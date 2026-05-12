#!/usr/bin/env node
/**
 * @fileoverview 规则索引文件生成器
 * @module scripts/generate-rule-index
 * @description 自动扫描 rules 目录并生成 Markdown 索引文件
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';
import { traverseDirectory, getDirectories } from './utils/traverse.js';
import { parseCursorrulesFile, extractRuleName, extractCategory, extractSubCategory } from './utils/parse-cursorrules.js';
import {
  CATEGORIES,
  SUBCATEGORIES,
  getCategoryName,
  getSubcategoryName,
  getCategoriesByPriority
} from './config/categories.js';

/** @type {string} 当前脚本文件路径 */
const __filename = fileURLToPath(import.meta.url);

/** @type {string} 当前脚本目录路径 */
const __dirname = dirname(__filename);

/** @type {string} 项目根目录路径 */
const ROOT_DIR = resolve(__dirname, '..');

/** @type {string} 规则文件根目录路径 */
const RULES_DIR = resolve(ROOT_DIR, 'rules');

/** @type {string} 中文站点规则索引目录 */
const ZH_RULES_DIR = resolve(ROOT_DIR, 'zh/rules');

/** @type {string} 英文站点规则索引目录 */
const EN_RULES_DIR = resolve(ROOT_DIR, 'en/rules');

/**
 * @typedef {Object} RuleInfo
 * @property {string} name - 规则名称
 * @property {string} path - 规则文件相对路径
 * @property {string} description - 规则描述
 * @property {string} category - 分类名称
 * @property {string} subcategory - 子分类名称
 * @property {string} githubLink - GitHub 链接
 */

/**
 * 收集指定分类下的所有规则文件
 * @param {string} categoryDir - 分类目录路径
 * @returns {Object.<string, RuleInfo[]>} 子分类到规则列表的映射
 */
function collectRulesBySubcategory(categoryDir) {
  const subcategoryMap = {};

  const items = traverseDirectory(categoryDir, {
    pattern: /^\.cursorrules$/,
    skipDirs: ['node_modules', '.git']
  });

  for (const filePath of items) {
    const ruleName = extractRuleName(filePath);
    const category = extractCategory(filePath);
    const subcategory = extractSubCategory(filePath);

    let description = '';
    try {
      const content = readFileSync(filePath, 'utf-8');
      const metadata = parseCursorrulesFile(content, ruleName);
      description = metadata.description;
    } catch (error) {
      console.warn(`Warning: Cannot read ${filePath} - ${error.message}`);
      description = `${ruleName} 开发规范`;
    }

    const relativePath = relative(RULES_DIR, filePath);
    const githubLink = `https://github.com/LessUp/awesome-cursorrules-zh/blob/master/rules/${relativePath}`;

    const ruleInfo = {
      name: ruleName,
      path: relativePath,
      githubLink,
      description,
      category,
      subcategory
    };

    if (!subcategoryMap[subcategory]) {
      subcategoryMap[subcategory] = [];
    }
    subcategoryMap[subcategory].push(ruleInfo);
  }

  // 对每个子分类内的规则排序
  for (const subcategory in subcategoryMap) {
    subcategoryMap[subcategory].sort((a, b) => a.name.localeCompare(b.name));
  }

  return subcategoryMap;
}

/**
 * 生成 Markdown 表格行
 * @param {RuleInfo} rule - 规则信息
 * @returns {string} Markdown 表格行
 */
function generateTableRow(rule) {
  return `| [${rule.name}](${rule.githubLink}) | ${rule.description} |`;
}

/**
 * 生成分类索引文件内容
 * @param {string} category - 分类名称
 * @param {Object.<string, RuleInfo[]>} subcategoryMap - 子分类到规则列表的映射
 * @param {string} lang - 语言 ('zh' 或 'en')
 * @returns {string} Markdown 文件内容
 */
function generateIndexContent(category, subcategoryMap, lang) {
  const title = getCategoryName(category, lang);

  let content = `---
editLink: false
---

# ${title}${lang === 'zh' ? '规则' : ' Rules'}

`;

  if (lang === 'zh') {
    content += `${title}相关的 Cursor AI 编程规则集合。\n\n`;
  } else {
    content += `Cursor AI programming rules for ${title}.\n\n`;
  }

  const subcategories = Object.keys(subcategoryMap).sort();

  for (const subcategory of subcategories) {
    const subcategoryTitle = getSubcategoryName(category, subcategory, lang);

    content += `## ${subcategoryTitle}\n\n`;
    content += `| ${lang === 'zh' ? '规则' : 'Rule'} | ${lang === 'zh' ? '说明' : 'Description'} |\n`;
    content += `|------|------|\n`;

    const rules = subcategoryMap[subcategory];
    for (const rule of rules) {
      content += generateTableRow(rule) + '\n';
    }

    content += '\n';
  }

  if (lang === 'zh') {
    content += `## 使用方法

1. 点击规则链接，在 GitHub 上查看 \`.cursorrules\` 文件
2. 复制内容到项目根目录的 \`.cursorrules\` 文件
3. 在 Cursor AI 中启用项目规则
4. 开始编码，AI 将遵循规则生成代码
`;
  } else {
    content += `## Usage

1. Click the rule link to view the \`.cursorrules\` file on GitHub
2. Copy the content to the \`.cursorrules\` file in your project root
3. Enable project rules in Cursor AI
4. Start coding, AI will follow the rules to generate code
`;
  }

  return content;
}

/**
 * 生成总索引文件内容
 * @param {string[]} categories - 分类列表
 * @param {string} lang - 语言
 * @returns {string} Markdown 文件内容
 */
function generateMainIndexContent(categories, lang) {
  let content = `---
editLink: false
---

# ${lang === 'zh' ? '全部规则' : 'All Rules'}

`;

  if (lang === 'zh') {
    content += `Cursor AI 编辑器规则集合，提供 **${categories.length}+** 个技术领域的编程规则。\n\n`;
  } else {
    content += `Cursor AI Editor Rules Collection, providing programming rules for **${categories.length}+** technical fields.\n\n`;
  }

  content += `## ${lang === 'zh' ? '分类索引' : 'Category Index'}\n\n`;

  // 按优先级排序
  const sortedCategories = getCategoriesByPriority()
    .filter(cat => categories.includes(cat));

  for (const category of sortedCategories) {
    const title = getCategoryName(category, lang);
    const link = lang === 'zh' ? `rules/${category}` : `en/rules/${category}`;
    content += `- [${title}](/${link})\n`;
  }

  if (lang === 'zh') {
    content += `\n## 使用方法

1. 选择适合你项目的规则分类
2. 点击规则链接，在 GitHub 上查看 \`.cursorrules\` 文件
3. 复制内容到项目根目录的 \`.cursorrules\` 文件
4. 在 Cursor AI 中启用项目规则
5. 开始编码，AI 将遵循规则生成代码
`;
  } else {
    content += `\n## Usage

1. Choose the rule category suitable for your project
2. Click the rule link to view the \`.cursorrules\` file on GitHub
3. Copy the content to the \`.cursorrules\` file in your project root
4. Enable project rules in Cursor AI
5. Start coding, AI will follow the rules to generate code
`;
  }

  return content;
}

/**
 * 主函数
 * @async
 * @returns {Promise<void>}
 */
async function main() {
  console.log('🔍 开始生成规则索引文件...\n');

  // 获取所有分类目录
  const categoryDirs = getDirectories(RULES_DIR, ['node_modules', '.git']);
  const categories = categoryDirs.map(d => d.split('/').pop());
  console.log(`📁 发现 ${categories.length} 个分类\n`);

  let totalRules = 0;
  let generatedFiles = 0;

  // 为每个分类生成索引文件
  for (const categoryDir of categoryDirs) {
    const category = categoryDir.split('/').pop();
    console.log(`📝 处理分类: ${category}`);

    // 收集该分类下的所有规则
    const subcategoryMap = collectRulesBySubcategory(categoryDir);
    const ruleCount = Object.values(subcategoryMap).flat().length;
    totalRules += ruleCount;

    if (ruleCount === 0) {
      console.log(`   ⚠️  跳过空分类: ${category}`);
      continue;
    }

    // 生成中文索引
    const zhContent = generateIndexContent(category, subcategoryMap, 'zh');
    const zhIndexPath = join(ZH_RULES_DIR, `${category}.md`);
    writeFileSync(zhIndexPath, zhContent);
    console.log(`   ✅ 生成中文索引: ${zhIndexPath}`);
    generatedFiles++;

    // 生成英文索引
    const enContent = generateIndexContent(category, subcategoryMap, 'en');
    const enIndexPath = join(EN_RULES_DIR, `${category}.md`);
    writeFileSync(enIndexPath, enContent);
    console.log(`   ✅ 生成英文索引: ${enIndexPath}`);
    generatedFiles++;

    console.log(`   📊 包含 ${ruleCount} 个规则\n`);
  }

  // 生成总索引文件
  console.log('📝 生成总索引文件...');

  const zhMainContent = generateMainIndexContent(categories, 'zh');
  writeFileSync(join(ZH_RULES_DIR, 'index.md'), zhMainContent);
  console.log('   ✅ 生成中文总索引');
  generatedFiles++;

  const enMainContent = generateMainIndexContent(categories, 'en');
  writeFileSync(join(EN_RULES_DIR, 'index.md'), enMainContent);
  console.log('   ✅ 生成英文总索引');
  generatedFiles++;

  console.log('\n' + '='.repeat(50));
  console.log('📊 生成结果摘要');
  console.log('='.repeat(50));
  console.log(`总分类数: ${categories.length}`);
  console.log(`总规则数: ${totalRules}`);
  console.log(`生成文件数: ${generatedFiles}`);
  console.log('\n✅ 索引文件生成完成！');
}

main().catch(error => {
  console.error('❌ 生成过程中发生错误:', error);
  process.exit(1);
});
