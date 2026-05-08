#!/usr/bin/env node
/**
 * @fileoverview 多语言内容同步验证器
 * @module scripts/validate-i18n
 * @description 验证中英文站点内容的同步性
 * @example
 * node scripts/validate-i18n.js
 */

import { readdirSync, statSync, existsSync, readFileSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

/** @type {string} 当前脚本文件路径 */
const __filename = fileURLToPath(import.meta.url);

/** @type {string} 当前脚本目录路径 */
const __dirname = dirname(__filename);

/** @type {string} 项目根目录路径 */
const ROOT_DIR = resolve(__dirname, '..');

/** @type {string} 中文站点目录 */
const ZH_DIR = resolve(ROOT_DIR, 'zh');

/** @type {string} 英文站点目录 */
const EN_DIR = resolve(ROOT_DIR, 'en');

/**
 * @typedef {Object} ValidationResult
 * @property {string[]} missing - 缺失的文件列表
 * @property {string[]} extra - 多余的文件列表
 * @property {Object.<string, string>} differences - 内容差异
 * @property {boolean} valid - 是否通过验证
 */

/**
 * 递归获取目录下所有 Markdown 文件
 * @param {string} dir - 目录路径
 * @param {string} baseDir - 基准目录(用于计算相对路径)
 * @returns {string[]} 相对路径列表
 */
function getMarkdownFiles(dir, baseDir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = join(currentDir, item);
      
      // 跳过隐藏文件和 node_modules
      if (item.startsWith('.') || item === 'node_modules') {
        continue;
      }
      
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.md')) {
        const relativePath = relative(baseDir, fullPath);
        files.push(relativePath);
      }
    }
  }
  
  if (existsSync(dir)) {
    traverse(dir);
  }
  
  return files;
}

/**
 * 比较两个文件列表,找出差异
 * @param {string[]} zhFiles - 中文文件列表
 * @param {string[]} enFiles - 英文文件列表
 * @returns {{missing: string[], extra: string[]}}
 */
function compareFileLists(zhFiles, enFiles) {
  const zhSet = new Set(zhFiles);
  const enSet = new Set(enFiles);
  
  const missing = zhFiles.filter(f => !enSet.has(f));
  const extra = enFiles.filter(f => !zhSet.has(f));
  
  return { missing, extra };
}

/**
 * 验证多语言内容同步性
 * @returns {ValidationResult}
 */
function validateI18nSync() {
  console.log('🔍 开始验证多语言内容同步性...\n');
  
  const result = {
    missing: [],
    extra: [],
    differences: {},
    valid: true
  };
  
  // 获取中英文文件列表
  console.log('📁 扫描中文站点文件...');
  const zhFiles = getMarkdownFiles(ZH_DIR, ZH_DIR);
  console.log(`   找到 ${zhFiles.length} 个文件`);
  
  console.log('📁 扫描英文站点文件...');
  const enFiles = getMarkdownFiles(EN_DIR, EN_DIR);
  console.log(`   找到 ${enFiles.length} 个文件\n`);
  
  // 比较文件列表
  const { missing, extra } = compareFileLists(zhFiles, enFiles);
  
  result.missing = missing;
  result.extra = extra;
  
  // 输出缺失文件
  if (missing.length > 0) {
    console.log('❌ 英文站点缺失以下文件:');
    missing.forEach(file => {
      console.log(`   - ${file}`);
    });
    console.log('');
    result.valid = false;
  }
  
  // 输出多余文件
  if (extra.length > 0) {
    console.log('⚠️  英文站点多余以下文件:');
    extra.forEach(file => {
      console.log(`   - ${file}`);
    });
    console.log('');
    result.valid = false;
  }
  
  // 检查文件数量
  if (zhFiles.length !== enFiles.length) {
    console.log(`⚠️  文件数量不一致: 中文 ${zhFiles.length} 个, 英文 ${enFiles.length} 个\n`);
    result.valid = false;
  }
  
  // 如果所有文件都存在,检查内容长度(粗略检查翻译完整性)
  if (missing.length === 0 && extra.length === 0) {
    console.log('🔍 检查内容完整性...');
    
    let incompleteCount = 0;
    
    for (const file of zhFiles) {
      const zhPath = join(ZH_DIR, file);
      const enPath = join(EN_DIR, file);
      
      if (!existsSync(enPath)) {
        continue;
      }
      
      const zhContent = readFileSync(zhPath, 'utf-8');
      const enContent = readFileSync(enPath, 'utf-8');
      
      // 检查英文内容是否明显少于中文内容(可能未翻译)
      const zhLength = zhContent.length;
      const enLength = enContent.length;
      
      // 如果英文内容少于中文内容的 50%,可能需要翻译
      if (enLength < zhLength * 0.5) {
        const ratio = (enLength / zhLength * 100).toFixed(1);
        result.differences[file] = `英文内容仅为中文的 ${ratio}%`;
        incompleteCount++;
      }
    }
    
    if (incompleteCount > 0) {
      console.log(`\n⚠️  发现 ${incompleteCount} 个可能未完整翻译的文件:`);
      Object.entries(result.differences).forEach(([file, diff]) => {
        console.log(`   - ${file}: ${diff}`);
      });
      console.log('');
    } else {
      console.log('   ✅ 所有文件内容完整性检查通过\n');
    }
  }
  
  return result;
}

/**
 * 主函数
 * @returns {void}
 */
function main() {
  const result = validateI18nSync();
  
  console.log('='.repeat(50));
  console.log('📊 验证结果摘要');
  console.log('='.repeat(50));
  
  if (result.valid && Object.keys(result.differences).length === 0) {
    console.log('✅ 多语言内容同步验证通过！');
    process.exit(0);
  } else {
    console.log(`缺失文件: ${result.missing.length}`);
    console.log(`多余文件: ${result.extra.length}`);
    console.log(`待完善文件: ${Object.keys(result.differences).length}`);
    
    console.log('\n❌ 多语言内容同步验证失败！');
    console.log('\n💡 建议:');
    
    if (result.missing.length > 0) {
      console.log('   1. 运行 npm run generate:index 生成缺失的索引文件');
    }
    
    if (Object.keys(result.differences).length > 0) {
      console.log('   2. 检查并完善未完整翻译的文件');
    }
    
    process.exit(1);
  }
}

main();
