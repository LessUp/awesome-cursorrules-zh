#!/usr/bin/env node
/**
 * @fileoverview VitePress 配置生成器
 * @module scripts/generate-config
 * @description 从统一配置生成导航和侧边栏配置文件
 */

import { writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {
  CATEGORIES,
  getCategoriesByPriority,
  getCategoryName,
  NAV_CONFIG
} from './config/categories.js';

/** @type {string} 当前脚本文件路径 */
const __filename = fileURLToPath(import.meta.url);

/** @type {string} 当前脚本目录路径 */
const __dirname = dirname(__filename);

/** @type {string} 项目根目录路径 */
const ROOT_DIR = resolve(__dirname, '..');

/** @type {string} 规则文件根目录路径 */
const RULES_DIR = resolve(ROOT_DIR, 'rules');

/** @type {string} VitePress 配置目录 */
const CONFIG_DIR = resolve(ROOT_DIR, '.vitepress/config');

/**
 * 获取实际存在的分类目录
 * @returns {string[]} 分类名称列表
 */
function getExistingCategories() {
  if (!existsSync(RULES_DIR)) {
    console.error('❌ 错误: rules 目录不存在');
    return [];
  }

  const items = readdirSync(RULES_DIR);
  const categories = [];

  for (const item of items) {
    if (item.startsWith('.') || item === 'node_modules' || item.endsWith('.md')) {
      continue;
    }

    const fullPath = join(RULES_DIR, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      categories.push(item);
    }
  }

  return categories;
}

/**
 * 生成导航配置文件内容
 * @param {string[]} existingCategories - 实际存在的分类列表
 * @returns {string} JavaScript 代码
 */
function generateNavConfig(existingCategories) {
  // 按优先级排序存在的分类
  const sortedCategories = getCategoriesByPriority()
    .filter(cat => existingCategories.includes(cat));

  // 取配置数量的分类用于导航
  const navCategories = sortedCategories.slice(0, NAV_CONFIG.maxNavItems);

  const zhItems = navCategories.map(cat => ({
    text: getCategoryName(cat, 'zh'),
    link: `zh/rules/${cat}`
  }));

  const enItems = navCategories.map(cat => ({
    text: getCategoryName(cat, 'en'),
    link: `en/rules/${cat}`
  }));

  return `/**
 * 自动生成的规则导航配置
 * 由 scripts/generate-config.js 生成
 * 数据源: scripts/config/categories.js
 * 请勿手动修改
 */

export const rulesNavZh = ${JSON.stringify(zhItems, null, 2)};

export const rulesNavEn = ${JSON.stringify(enItems, null, 2)};
`;
}

/**
 * 生成侧边栏配置文件内容
 * @param {string[]} existingCategories - 实际存在的分类列表
 * @returns {string} JavaScript 代码
 */
function generateSidebarConfig(existingCategories) {
  // 按优先级排序存在的分类
  const sortedCategories = getCategoriesByPriority()
    .filter(cat => existingCategories.includes(cat));

  const zhItems = [
    { text: '全部规则', link: 'zh/rules/' },
    ...sortedCategories.map(cat => ({
      text: getCategoryName(cat, 'zh'),
      link: `zh/rules/${cat}`
    }))
  ];

  const enItems = [
    { text: 'All Rules', link: 'en/rules/' },
    ...sortedCategories.map(cat => ({
      text: getCategoryName(cat, 'en'),
      link: `en/rules/${cat}`
    }))
  ];

  return `/**
 * 自动生成的规则侧边栏配置
 * 由 scripts/generate-config.js 生成
 * 数据源: scripts/config/categories.js
 * 请勿手动修改
 */

export const rulesSidebarZh = ${JSON.stringify(zhItems, null, 2)};

export const rulesSidebarEn = ${JSON.stringify(enItems, null, 2)};
`;
}

/**
 * 主函数
 * @returns {void}
 */
function main() {
  console.log('🔍 开始生成 VitePress 配置...\n');

  // 获取实际存在的分类
  const existingCategories = getExistingCategories();
  console.log(`📁 发现 ${existingCategories.length} 个分类目录\n`);

  if (existingCategories.length === 0) {
    console.log('⚠️  没有找到任何分类，跳过配置生成');
    return;
  }

  // 生成导航配置
  console.log('📝 生成导航配置...');
  const navConfig = generateNavConfig(existingCategories);
  const navPath = join(CONFIG_DIR, 'generated-nav.js');
  writeFileSync(navPath, navConfig);
  console.log(`   ✅ 已生成: ${navPath}\n`);

  // 生成侧边栏配置
  console.log('📝 生成侧边栏配置...');
  const sidebarConfig = generateSidebarConfig(existingCategories);
  const sidebarPath = join(CONFIG_DIR, 'generated-sidebar.js');
  writeFileSync(sidebarPath, sidebarConfig);
  console.log(`   ✅ 已生成: ${sidebarPath}\n`);

  console.log('='.repeat(50));
  console.log('📊 生成结果摘要');
  console.log('='.repeat(50));
  console.log(`总分类数: ${existingCategories.length}`);
  console.log(`导航显示: 前 ${NAV_CONFIG.maxNavItems} 个分类`);
  console.log(`侧边栏显示: 全部 ${existingCategories.length} 个分类`);
  console.log('\n✅ 配置文件生成完成！');
}

main();
