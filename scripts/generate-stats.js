#!/usr/bin/env node
/**
 * @fileoverview 项目统计生成脚本
 * @module scripts/generate-stats
 * @description 自动生成项目数据统计报告，包括规则数量、技术栈分布等
 * @example
 * // 运行统计
 * node scripts/generate-stats.js
 * // 或通过 npm
 * npm run stats
 */

import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getFiles } from './utils/traverse.js';

/** @type {string} 当前脚本文件路径 */
const __filename = fileURLToPath(import.meta.url);

/** @type {string} 当前脚本目录路径 */
const __dirname = dirname(__filename);

/** @type {string} 规则文件根目录路径 */
const RULES_DIR = resolve(__dirname, '../rules');

/** @type {string} 统计报告输出文件路径 */
const STATS_FILE = resolve(__dirname, '../stats.json');

/**
 * @typedef {Object} RuleInfo
 * @property {string} name - 规则名称
 * @property {string} path - 规则路径
 * @property {number} size - 文件大小（字节）
 * @property {number} lines - 文件行数
 * @property {boolean} hasReadme - 是否有 README 文件
 */

/**
 * @typedef {Object} CategoryInfo
 * @property {number} count - 规则数量
 * @property {RuleInfo[]} rules - 规则列表
 */

/**
 * @typedef {Object} StatsSummary
 * @property {number} totalRules - 规则总数
 * @property {number} totalCategories - 分类总数
 * @property {number} totalDocs - 文档总数
 * @property {number} totalLines - 总行数
 * @property {number} avgRuleSize - 平均规则大小
 */

/**
 * @typedef {Object} TopRule
 * @property {string} name - 规则名称
 * @property {string} category - 所属分类
 * @property {number} size - 文件大小
 * @property {number} lines - 文件行数
 */

/**
 * @typedef {Object} ProjectStats
 * @property {string} generatedAt - 生成时间 (ISO 格式)
 * @property {StatsSummary} summary - 统计摘要
 * @property {Object.<string, CategoryInfo>} categories - 分类统计
 * @property {Object.<string, number>} techStack - 技术栈统计
 * @property {TopRule[]} topRules - 最大的规则文件
 * @property {Object[]} recentChanges - 最近变更（预留）
 */

/**
 * 统计规则分类
 * @returns {Object.<string, CategoryInfo>} 分类统计对象，键为分类名
 * @example
 * const categories = getRulesByCategory();
 * console.log(categories.frontend.count); // 前端规则数量
 */
function getRulesByCategory() {
  const categories = {};

  if (!existsSync(RULES_DIR)) {
    return categories;
  }

  const categoryDirs = readdirSync(RULES_DIR).filter(item => {
    if (item.startsWith('.')) return false;
    const stat = statSync(join(RULES_DIR, item));
    return stat.isDirectory();
  });

  for (const category of categoryDirs) {
    const categoryPath = join(RULES_DIR, category);
    const rules = [];

    /**
     * 递归遍历目录收集规则
     * @param {string} dir - 当前遍历目录
     * @param {string} [basePath=''] - 相对路径前缀
     */
    function traverse(dir, basePath = '') {
      let items;
      try {
        items = readdirSync(dir);
      } catch (e) {
        console.warn(`Warning: Cannot read directory ${dir} - ${e.message}`);
        return;
      }

      for (const item of items) {
        const fullPath = join(dir, item);
        let stat;
        try {
          stat = statSync(fullPath);
        } catch (e) {
          console.warn(`Warning: Cannot stat ${fullPath} - ${e.message}`);
          continue;
        }
        const relativePath = join(basePath, item);

        if (stat.isDirectory()) {
          traverse(fullPath, relativePath);
        } else if (item === '.cursorrules') {
          let content;
          try {
            content = readFileSync(fullPath, 'utf-8');
          } catch (e) {
            console.warn(`Warning: Cannot read ${fullPath} - ${e.message}`);
            content = '';
          }
          const parentDir = dirname(relativePath);
          const ruleName = parentDir.split('/').pop() || 'unnamed';

          rules.push({
            name: ruleName,
            path: `rules/${category}/${parentDir}`,
            size: content.length,
            lines: content.split('\n').length,
            hasReadme: existsSync(join(dir, 'README.md'))
          });
        }
      }
    }

    traverse(categoryPath);

    categories[category] = {
      count: rules.length,
      rules: rules
    };
  }

  return categories;
}

/**
 * 技术栈关键词映射表
 * @type {Object.<string, RegExp>}
 * @description 用于识别规则文件中提及的技术栈
 */
const TECH_KEYWORDS = {
  'React': /react/i,
  'Vue': /vue/i,
  'Angular': /angular/i,
  'Svelte': /svelte/i,
  'Node.js': /node\.?js/i,
  'Python': /python/i,
  'Go': /\bgo\b|\bgolang\b/i,
  'Rust': /rust/i,
  'TypeScript': /typescript/i,
  'JavaScript': /\bjavascript\b/i,
  'Java': /\bjava\b(?!script)/i,
  'PHP': /\bphp\b/i,
  '.NET': /\.net|dotnet/i,
  'Flutter': /flutter/i,
  'Swift': /\bswift\b/i,
  'Kotlin': /kotlin/i,
  'Docker': /docker/i,
  'Kubernetes': /kubernetes|k8s/i,
  'AWS': /aws|amazon/i,
  'Terraform': /terraform/i,
  'FastAPI': /fastapi/i,
  'Django': /django/i,
  'Next.js': /next\.?js/i,
  'Tailwind': /tailwind/i
};

/**
 * 统计技术栈分布
 * @returns {Object.<string, number>} 技术栈统计对象，键为技术名，值为规则数量
 * @example
 * const techStack = getTechStackStats();
 * console.log(techStack['React']); // 提及 React 的规则数量
 */
function getTechStackStats() {
  const stats = {};
  const cursorRulesFiles = getFiles(RULES_DIR, /\.cursorrules$/);

  for (const [tech, regex] of Object.entries(TECH_KEYWORDS)) {
    let count = 0;
    for (const file of cursorRulesFiles) {
      try {
        const content = readFileSync(file, 'utf-8');
        if (regex.test(content)) {
          count++;
        }
      } catch (e) {
        console.warn(`Warning: Cannot read ${file} - ${e.message}`);
      }
    }
    if (count > 0) {
      stats[tech] = count;
    }
  }

  return stats;
}

/**
 * 主函数
 * @async
 * @returns {Promise<void>}
 * @description 执行完整的统计生成流程，输出到控制台和文件
 * @example
 * main().catch(console.error);
 */
async function main() {
  console.log('📊 生成项目统计报告...\n');

  /** @type {ProjectStats} */
  const stats = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalRules: 0,
      totalCategories: 0,
      totalDocs: 0,
      totalLines: 0,
      avgRuleSize: 0
    },
    categories: {},
    techStack: {},
    topRules: [],
    recentChanges: []
  };

  // 统计规则
  const cursorRulesFiles = getFiles(RULES_DIR, /\.cursorrules$/);
  stats.summary.totalRules = cursorRulesFiles.length;

  let totalSize = 0;
  let totalLines = 0;
  const ruleDetails = [];

  for (const file of cursorRulesFiles) {
    try {
      const content = readFileSync(file, 'utf-8');
      const size = content.length;
      const lines = content.split('\n').length;

      totalSize += size;
      totalLines += lines;

      const relativePath = file.replace(RULES_DIR, 'rules');
      const parts = relativePath.split('/');
      const category = parts[1] || 'unknown';
      const name = parts[parts.length - 2] || 'unnamed';

      ruleDetails.push({
        name,
        category,
        path: relativePath,
        size,
        lines
      });
    } catch (e) {
      console.warn(`Warning: Cannot read ${file} - ${e.message}`);
    }
  }

  stats.summary.totalLines = totalLines;
  stats.summary.avgRuleSize = stats.summary.totalRules > 0 ?
    Math.round(totalSize / stats.summary.totalRules) : 0;

  // 按分类统计
  stats.categories = getRulesByCategory();
  stats.summary.totalCategories = Object.keys(stats.categories).length;

  // 技术栈统计
  stats.techStack = getTechStackStats();

  // 最大的规则文件
  stats.topRules = ruleDetails
    .sort((a, b) => b.size - a.size)
    .slice(0, 10)
    .map(r => ({
      name: r.name,
      category: r.category,
      size: r.size,
      lines: r.lines
    }));

  // Markdown 文档统计
  const rootDir = resolve(__dirname, '..');
  const mdFiles = getFiles(rootDir, /\.(md|mdx)$/).filter(f => !f.includes('node_modules'));
  stats.summary.totalDocs = mdFiles.length;

  // 输出统计
  console.log('='.repeat(60));
  console.log('📈 项目统计摘要');
  console.log('='.repeat(60));
  console.log(`\n🔢 基础数据:`);
  console.log(`  规则文件总数: ${stats.summary.totalRules}`);
  console.log(`  技术域分类: ${stats.summary.totalCategories}`);
  console.log(`  Markdown 文档: ${stats.summary.totalDocs}`);
  console.log(`  总行数: ${stats.summary.totalLines.toLocaleString()}`);
  console.log(`  平均规则大小: ${stats.summary.avgRuleSize} 字符`);

  console.log(`\n📂 分类分布 (TOP 10):`);
  Object.entries(stats.categories)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10)
    .forEach(([cat, data]) => {
      console.log(`  ${cat}: ${data.count} 个规则`);
    });

  console.log(`\n🔧 技术栈 TOP 10:`);
  Object.entries(stats.techStack)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([tech, count], i) => {
      console.log(`  ${i + 1}. ${tech}: ${count} 个规则`);
    });

  console.log(`\n📝 最大的规则文件:`);
  stats.topRules.slice(0, 5).forEach((r, i) => {
    console.log(`  ${i + 1}. ${r.name} (${r.category}): ${r.lines} 行`);
  });

  console.log('\n' + '='.repeat(60));

  // 写入统计文件
  writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
  console.log(`\n✅ 统计报告已保存到: ${STATS_FILE}`);
}

main().catch(error => {
  console.error('❌ 统计生成失败:', error);
  process.exit(1);
});
