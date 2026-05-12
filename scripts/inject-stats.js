#!/usr/bin/env node
/**
 * @fileoverview 统计数据注入脚本
 * @description 在构建时将真实统计数据注入到首页
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = resolve(__dirname, '..');

/**
 * 统计规则数量
 */
function countRules() {
  const rulesDir = join(ROOT_DIR, 'rules');
  if (!existsSync(rulesDir)) return 0;

  let count = 0;

  function traverse(dir) {
    const items = readdirSync(dir);
    for (const item of items) {
      if (item.startsWith('.') || item === 'node_modules') continue;
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        if (existsSync(join(fullPath, '.cursorrules'))) {
          count++;
        } else {
          traverse(fullPath);
        }
      }
    }
  }

  traverse(rulesDir);
  return count;
}

/**
 * 统计分类数量
 */
function countCategories() {
  const rulesDir = join(ROOT_DIR, 'rules');
  if (!existsSync(rulesDir)) return 0;

  const items = readdirSync(rulesDir);
  return items.filter(item => {
    if (item.startsWith('.') || item === 'node_modules') return false;
    const fullPath = join(rulesDir, item);
    return statSync(fullPath).isDirectory();
  }).length;
}

/**
 * 统计文档数量
 */
function countDocs() {
  let count = 0;

  // 统计 docs 目录
  const docsDir = join(ROOT_DIR, 'docs');
  if (existsSync(docsDir)) {
    count += countMarkdownFiles(docsDir);
  }

  // 统计根目录 README
  if (existsSync(join(ROOT_DIR, 'README.md'))) {
    count++;
  }

  return count;
}

/**
 * 递归统计 Markdown 文件
 */
function countMarkdownFiles(dir) {
  let count = 0;
  const items = readdirSync(dir);

  for (const item of items) {
    if (item.startsWith('.') || item === 'node_modules') continue;
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      count += countMarkdownFiles(fullPath);
    } else if (item.endsWith('.md')) {
      count++;
    }
  }

  return count;
}

/**
 * 更新首页统计数据
 */
function updateIndexStats() {
  const indexPath = join(ROOT_DIR, 'index.md');
  if (!existsSync(indexPath)) {
    console.log('⚠️  index.md 不存在');
    return;
  }

  const rules = countRules();
  const categories = countCategories();
  const docs = countDocs();

  console.log('📊 统计数据:');
  console.log(`   规则: ${rules}`)
  console.log(`   分类: ${categories}`)
  console.log(`   文档: ${docs}`)

  let content = readFileSync(indexPath, 'utf-8');

  // 更新统计数据
  content = content.replace(
    /<strong>\d+\+<\/strong>\s*规则/g,
    `<strong>${rules}+</strong> 规则`
  );
  content = content.replace(
    /<strong>\d+\+<\/strong>\s*分类/g,
    `<strong>${categories}+</strong> 分类`
  );
  content = content.replace(
    /<strong>\d+\+<\/strong>\s*文档/g,
    `<strong>${docs}+</strong> 文档`
  );

  writeFileSync(indexPath, content);
  console.log('✅ 首页统计数据已更新');
}

// 执行
console.log('🔄 开始注入统计数据...\n');
updateIndexStats();
console.log('\n✨ 完成！');
