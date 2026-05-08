#!/usr/bin/env node
/**
 * @fileoverview VitePress 配置生成器
 * @module scripts/generate-config
 * @description 从 rules 目录结构动态生成导航和侧边栏配置
 * @example
 * node scripts/generate-config.js
 */

import { writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

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
 * 分类名称映射表
 * @type {Object.<string, {zh: string, en: string, priority: number}>}
 */
const CATEGORY_NAMES = {
  frontend: { zh: '前端开发', en: 'Frontend', priority: 1 },
  backend: { zh: '后端开发', en: 'Backend', priority: 2 },
  mobile: { zh: '移动开发', en: 'Mobile', priority: 3 },
  ai: { zh: 'AI与数据', en: 'AI & Data', priority: 4 },
  'data-science': { zh: '数据科学', en: 'Data Science', priority: 5 },
  devops: { zh: 'DevOps', en: 'DevOps', priority: 6 },
  blockchain: { zh: '区块链', en: 'Blockchain', priority: 7 },
  security: { zh: '安全', en: 'Security', priority: 8 },
  cloud: { zh: '云服务', en: 'Cloud', priority: 9 },
  database: { zh: '数据库', en: 'Database', priority: 10 },
  iot: { zh: '物联网', en: 'IoT', priority: 11 },
  gaming: { zh: '游戏开发', en: 'Gaming', priority: 12 },
  'ar-vr': { zh: 'AR/VR', en: 'AR/VR', priority: 13 },
  robotics: { zh: '机器人', en: 'Robotics', priority: 14 },
  automation: { zh: '自动化', en: 'Automation', priority: 15 },
  tools: { zh: '工具', en: 'Tools', priority: 16 },
  general: { zh: '通用', en: 'General', priority: 17 },
  platform: { zh: '平台', en: 'Platform', priority: 18 },
  systems: { zh: '系统', en: 'Systems', priority: 19 },
  network: { zh: '网络', en: 'Network', priority: 20 },
  storage: { zh: '存储', en: 'Storage', priority: 21 },
  compute: { zh: '计算', en: 'Compute', priority: 22 },
  hardware: { zh: '硬件', en: 'Hardware', priority: 23 },
  science: { zh: '科学', en: 'Science', priority: 24 },
  bio: { zh: '生物', en: 'Bio', priority: 25 },
  quantum: { zh: '量子', en: 'Quantum', priority: 26 },
  simulation: { zh: '仿真', en: 'Simulation', priority: 27 },
  industrial: { zh: '工业', en: 'Industrial', priority: 28 },
  cms: { zh: 'CMS', en: 'CMS', priority: 29 },
  data: { zh: '数据', en: 'Data', priority: 30 },
  edge: { zh: '边缘计算', en: 'Edge', priority: 31 },
  'emerging-tech': { zh: '新兴技术', en: 'Emerging Tech', priority: 32 }
};

/**
 * 获取所有分类目录
 * @returns {string[]} 分类名称列表
 */
function getCategories() {
  if (!existsSync(RULES_DIR)) {
    console.error('❌ 错误: rules 目录不存在');
    return [];
  }
  
  const items = readdirSync(RULES_DIR);
  const categories = [];
  
  for (const item of items) {
    if (item.startsWith('.') || item === 'node_modules') {
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
 * 生成规则配置项
 * @param {string} category - 分类名称
 * @param {string} lang - 语言 ('zh' 或 'en')
 * @returns {Object} 配置项
 */
function generateRuleItem(category, lang) {
  const names = CATEGORY_NAMES[category] || { zh: category, en: category, priority: 999 };
  const text = lang === 'zh' ? names.zh : names.en;
  
  return {
    text,
    link: `rules/${category}`
  };
}

/**
 * 生成导航配置文件内容
 * @param {string[]} categories - 分类列表
 * @returns {string} JavaScript 代码
 */
function generateNavConfig(categories) {
  // 按优先级排序
  const sortedCategories = categories.sort((a, b) => {
    const priorityA = CATEGORY_NAMES[a]?.priority || 999;
    const priorityB = CATEGORY_NAMES[b]?.priority || 999;
    return priorityA - priorityB;
  });
  
  // 取前 8 个分类用于导航
  const navCategories = sortedCategories.slice(0, 8);
  
  const zhItems = navCategories.map(cat => generateRuleItem(cat, 'zh'));
  const enItems = navCategories.map(cat => generateRuleItem(cat, 'en'));
  
  return `/**
 * 自动生成的规则导航配置
 * 由 scripts/generate-config.js 生成
 * 请勿手动修改
 */

export const rulesNavZh = ${JSON.stringify(zhItems, null, 2)};

export const rulesNavEn = ${JSON.stringify(enItems, null, 2)};
`;
}

/**
 * 生成侧边栏配置文件内容
 * @param {string[]} categories - 分类列表
 * @returns {string} JavaScript 代码
 */
function generateSidebarConfig(categories) {
  // 按优先级排序
  const sortedCategories = categories.sort((a, b) => {
    const priorityA = CATEGORY_NAMES[a]?.priority || 999;
    const priorityB = CATEGORY_NAMES[b]?.priority || 999;
    return priorityA - priorityB;
  });
  
  const zhItems = [
    { text: '全部规则', link: 'rules/' },
    ...sortedCategories.map(cat => generateRuleItem(cat, 'zh'))
  ];
  
  const enItems = [
    { text: 'All Rules', link: 'en/rules/' },
    ...sortedCategories.map(cat => generateRuleItem(cat, 'en'))
  ];
  
  return `/**
 * 自动生成的规则侧边栏配置
 * 由 scripts/generate-config.js 生成
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
  
  // 获取所有分类
  const categories = getCategories();
  console.log(`📁 发现 ${categories.length} 个分类\n`);
  
  if (categories.length === 0) {
    console.log('⚠️  没有找到任何分类,跳过配置生成');
    return;
  }
  
  // 生成导航配置
  console.log('📝 生成导航配置...');
  const navConfig = generateNavConfig(categories);
  const navPath = join(CONFIG_DIR, 'generated-nav.js');
  writeFileSync(navPath, navConfig);
  console.log(`   ✅ 已生成: ${navPath}\n`);
  
  // 生成侧边栏配置
  console.log('📝 生成侧边栏配置...');
  const sidebarConfig = generateSidebarConfig(categories);
  const sidebarPath = join(CONFIG_DIR, 'generated-sidebar.js');
  writeFileSync(sidebarPath, sidebarConfig);
  console.log(`   ✅ 已生成: ${sidebarPath}\n`);
  
  console.log('='.repeat(50));
  console.log('📊 生成结果摘要');
  console.log('='.repeat(50));
  console.log(`总分类数: ${categories.length}`);
  console.log(`导航显示: 前 8 个分类`);
  console.log(`侧边栏显示: 全部 ${categories.length} 个分类`);
  console.log('\n✅ 配置文件生成完成！');
  console.log('\n💡 下一步:');
  console.log('   修改 .vitepress/config/nav.js 和 sidebar.js');
  console.log('   引用生成的配置: import { rulesNavZh } from "./generated-nav.js"');
}

main();
