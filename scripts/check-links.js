#!/usr/bin/env node
/**
 * @fileoverview 链接有效性检查脚本
 * @description 检查所有 Markdown 文件中的链接是否有效
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, dirname, join, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = resolve(__dirname, '..');

const errors = [];
const warnings = [];

/**
 * 递归获取所有 Markdown 文件
 */
function getMarkdownFiles(dir, baseDir = dir) {
  const files = [];
  const items = readdirSync(dir);

  for (const item of items) {
    if (item.startsWith('.') || item === 'node_modules' || item === '.vitepress') continue;
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath, baseDir));
    } else if (item.endsWith('.md')) {
      files.push({
        path: fullPath,
        relativePath: fullPath.replace(baseDir, '').replace(/^\//, '')
      });
    }
  }

  return files;
}

/**
 * 提取 Markdown 中的链接
 */
function extractLinks(content) {
  const links = [];

  // 匹配 [text](link) 格式
  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[2];
    // 忽略锚点链接和纯锚点
    if (url.startsWith('#') || url === '') continue;
    links.push(url);
  }

  return links;
}

/**
 * 检查内部链接
 */
function checkInternalLink(link, sourceFile) {
  // 处理相对路径
  const sourceDir = dirname(sourceFile.path);

  let targetPath;
  if (link.startsWith('/')) {
    // 绝对路径
    targetPath = join(ROOT_DIR, link.replace(/^\//, ''));
  } else if (link.startsWith('./') || link.startsWith('../')) {
    // 相对路径
    targetPath = resolve(sourceDir, link);
  } else {
    // 可能是 URL 或其他格式
    return null;
  }

  // 处理 .md 扩展名
  if (!targetPath.endsWith('.md') && !targetPath.includes('.')) {
    targetPath += '.md';
  }

  // 处理 index
  if (targetPath.endsWith('/')) {
    targetPath += 'index.md';
  }

  // 检查文件是否存在
  if (!existsSync(targetPath)) {
    // 尝试检查目录是否存在（对于规则链接）
    const dirPath = targetPath.replace(/\.md$/, '').replace(/\/index$/, '');
    if (existsSync(dirPath) && statSync(dirPath).isDirectory()) {
      return null; // 目录存在，可能是有效的
    }
    return { error: 'NOT_FOUND', target: targetPath };
  }

  return null;
}

/**
 * 检查单个文件
 */
function checkFile(file) {
  const content = readFileSync(file.path, 'utf-8');
  const links = extractLinks(content);

  for (const link of links) {
    // 跳过外部链接和特殊链接
    if (link.startsWith('http://') || link.startsWith('https://')) continue;
    if (link.startsWith('mailto:')) continue;
    if (link.startsWith('tel:')) continue;

    const result = checkInternalLink(link, file);
    if (result) {
      errors.push({
        file: file.relativePath,
        link,
        error: result.error,
        target: result.target
      });
    }
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🔍 开始检查链接...\n');

  // 获取所有 Markdown 文件
  const files = [
    ...getMarkdownFiles(join(ROOT_DIR, 'docs')),
    ...getMarkdownFiles(join(ROOT_DIR, 'rules')),
    ...getMarkdownFiles(join(ROOT_DIR, 'zh')),
    ...getMarkdownFiles(join(ROOT_DIR, 'en'))
  ];

  // 添加根目录的 index.md
  if (existsSync(join(ROOT_DIR, 'index.md'))) {
    files.push({
      path: join(ROOT_DIR, 'index.md'),
      relativePath: 'index.md'
    });
  }

  console.log(`📁 找到 ${files.length} 个 Markdown 文件\n`);

  // 检查每个文件
  for (const file of files) {
    try {
      checkFile(file);
    } catch (err) {
      warnings.push({
        file: file.relativePath,
        error: err.message
      });
    }
  }

  // 输出结果
  console.log('='.repeat(60));
  console.log('📊 检查结果');
  console.log('='.repeat(60));
  console.log(`检查文件: ${files.length}`);
  console.log(`错误数量: ${errors.length}`);
  console.log(`警告数量: ${warnings.length}`);
  console.log();

  if (errors.length > 0) {
    console.log('❌ 错误详情:');
    console.log('-'.repeat(60));
    for (const err of errors) {
      console.log(`文件: ${err.file}`);
      console.log(`链接: ${err.link}`);
      console.log(`目标: ${err.target}`);
      console.log();
    }
  }

  if (warnings.length > 0) {
    console.log('⚠️  警告详情:');
    console.log('-'.repeat(60));
    for (const warn of warnings) {
      console.log(`文件: ${warn.file}`);
      console.log(`错误: ${warn.error}`);
      console.log();
    }
  }

  // 返回退出码
  if (errors.length > 0) {
    console.log('❌ 发现链接错误，请修复后再构建');
    process.exit(1);
  } else {
    console.log('✅ 所有链接检查通过');
    process.exit(0);
  }
}

main();
