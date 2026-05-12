/**
 * 统一分类配置模块
 * @module scripts/config/categories
 * @description 所有分类定义的唯一数据源
 *
 * @example
 * import { CATEGORIES, getCategoriesByPriority, getCategoryNames } from './config/categories.js';
 */

/**
 * 分类定义
 * @typedef {Object} CategoryDefinition
 * @property {string} zh - 中文名称
 * @property {string} en - 英文名称
 * @property {number} priority - 显示优先级（越小越靠前）
 * @property {string} [icon] - 可选图标
 * @property {string} [description] - 可选描述
 */

/**
 * 所有分类定义
 * @type {Object.<string, CategoryDefinition>}
 */
export const CATEGORIES = {
  frontend: {
    zh: '前端开发',
    en: 'Frontend',
    priority: 1,
    icon: '🎨',
    description: 'Web 前端开发规则'
  },
  backend: {
    zh: '后端开发',
    en: 'Backend',
    priority: 2,
    icon: '⚙️',
    description: '服务端开发规则'
  },
  mobile: {
    zh: '移动开发',
    en: 'Mobile',
    priority: 3,
    icon: '📱',
    description: '移动应用开发规则'
  },
  ai: {
    zh: 'AI与数据',
    en: 'AI & Data',
    priority: 4,
    icon: '🤖',
    description: 'AI 与数据处理规则'
  },
  'data-science': {
    zh: '数据科学',
    en: 'Data Science',
    priority: 5,
    icon: '📊',
    description: '数据分析与科学计算规则'
  },
  devops: {
    zh: 'DevOps',
    en: 'DevOps',
    priority: 6,
    icon: '🔧',
    description: '运维自动化规则'
  },
  blockchain: {
    zh: '区块链',
    en: 'Blockchain',
    priority: 7,
    icon: '⛓️',
    description: '区块链开发规则'
  },
  security: {
    zh: '安全',
    en: 'Security',
    priority: 8,
    icon: '🔒',
    description: '安全开发规则'
  },
  cloud: {
    zh: '云服务',
    en: 'Cloud',
    priority: 9,
    icon: '☁️',
    description: '云平台开发规则'
  },
  database: {
    zh: '数据库',
    en: 'Database',
    priority: 10,
    icon: '🗄️',
    description: '数据库开发规则'
  },
  iot: {
    zh: '物联网',
    en: 'IoT',
    priority: 11,
    icon: '🌐',
    description: '物联网开发规则'
  },
  gaming: {
    zh: '游戏开发',
    en: 'Gaming',
    priority: 12,
    icon: '🎮',
    description: '游戏开发规则'
  },
  'ar-vr': {
    zh: 'AR/VR',
    en: 'AR/VR',
    priority: 13,
    icon: '🥽',
    description: '增强/虚拟现实规则'
  },
  robotics: {
    zh: '机器人',
    en: 'Robotics',
    priority: 14,
    icon: '🤖',
    description: '机器人开发规则'
  },
  automation: {
    zh: '自动化',
    en: 'Automation',
    priority: 15,
    icon: '⚡',
    description: '自动化脚本规则'
  },
  tools: {
    zh: '工具',
    en: 'Tools',
    priority: 16,
    icon: '🛠️',
    description: '开发工具规则'
  },
  general: {
    zh: '通用',
    en: 'General',
    priority: 17,
    icon: '📋',
    description: '通用编程规则'
  },
  platform: {
    zh: '平台',
    en: 'Platform',
    priority: 18,
    icon: '🏢',
    description: '平台开发规则'
  },
  systems: {
    zh: '系统',
    en: 'Systems',
    priority: 19,
    icon: '💻',
    description: '系统编程规则'
  },
  network: {
    zh: '网络',
    en: 'Network',
    priority: 20,
    icon: '🔌',
    description: '网络编程规则'
  },
  storage: {
    zh: '存储',
    en: 'Storage',
    priority: 21,
    icon: '💾',
    description: '存储系统规则'
  },
  compute: {
    zh: '计算',
    en: 'Compute',
    priority: 22,
    icon: '🔢',
    description: '计算服务规则'
  },
  hardware: {
    zh: '硬件',
    en: 'Hardware',
    priority: 23,
    icon: '🔩',
    description: '硬件开发规则'
  },
  science: {
    zh: '科学',
    en: 'Science',
    priority: 24,
    icon: '🔬',
    description: '科学计算规则'
  },
  bio: {
    zh: '生物',
    en: 'Bio',
    priority: 25,
    icon: '🧬',
    description: '生物信息学规则'
  },
  quantum: {
    zh: '量子',
    en: 'Quantum',
    priority: 26,
    icon: '⚛️',
    description: '量子计算规则'
  },
  simulation: {
    zh: '仿真',
    en: 'Simulation',
    priority: 27,
    icon: '🎯',
    description: '仿真模拟规则'
  },
  industrial: {
    zh: '工业',
    en: 'Industrial',
    priority: 28,
    icon: '🏭',
    description: '工业开发规则'
  },
  cms: {
    zh: 'CMS',
    en: 'CMS',
    priority: 29,
    icon: '📝',
    description: '内容管理规则'
  },
  data: {
    zh: '数据',
    en: 'Data',
    priority: 30,
    icon: '📈',
    description: '数据处理规则'
  },
  edge: {
    zh: '边缘计算',
    en: 'Edge',
    priority: 31,
    icon: '🌐',
    description: '边缘计算规则'
  },
  'emerging-tech': {
    zh: '新兴技术',
    en: 'Emerging Tech',
    priority: 32,
    icon: '🚀',
    description: '新兴技术规则'
  }
};

/**
 * 子分类定义
 * @type {Object.<string, Object.<string, {zh: string, en: string}>>}
 */
export const SUBCATEGORIES = {
  frontend: {
    react: { zh: 'React', en: 'React' },
    vue: { zh: 'Vue', en: 'Vue' },
    angular: { zh: 'Angular', en: 'Angular' },
    typescript: { zh: 'TypeScript', en: 'TypeScript' },
    svelte: { zh: 'Svelte', en: 'Svelte' },
    solidjs: { zh: 'SolidJS', en: 'SolidJS' },
    chrome: { zh: 'Chrome 扩展', en: 'Chrome Extension' },
    nextjs: { zh: 'Next.js', en: 'Next.js' },
    nuxt: { zh: 'Nuxt', en: 'Nuxt' }
  },
  backend: {
    nodejs: { zh: 'Node.js', en: 'Node.js' },
    python: { zh: 'Python', en: 'Python' },
    go: { zh: 'Go', en: 'Go' },
    rust: { zh: 'Rust', en: 'Rust' },
    java: { zh: 'Java', en: 'Java' },
    php: { zh: 'PHP', en: 'PHP' },
    ruby: { zh: 'Ruby', en: 'Ruby' },
    csharp: { zh: 'C#', en: 'C#' }
  },
  mobile: {
    flutter: { zh: 'Flutter', en: 'Flutter' },
    'react-native': { zh: 'React Native', en: 'React Native' },
    kotlin: { zh: 'Kotlin', en: 'Kotlin' },
    swift: { zh: 'Swift', en: 'Swift' }
  },
  ai: {
    openai: { zh: 'OpenAI', en: 'OpenAI' },
    langchain: { zh: 'LangChain', en: 'LangChain' },
    huggingface: { zh: 'Hugging Face', en: 'Hugging Face' }
  },
  devops: {
    docker: { zh: 'Docker', en: 'Docker' },
    kubernetes: { zh: 'Kubernetes', en: 'Kubernetes' },
    terraform: { zh: 'Terraform', en: 'Terraform' },
    ansible: { zh: 'Ansible', en: 'Ansible' }
  },
  database: {
    postgresql: { zh: 'PostgreSQL', en: 'PostgreSQL' },
    mysql: { zh: 'MySQL', en: 'MySQL' },
    mongodb: { zh: 'MongoDB', en: 'MongoDB' },
    redis: { zh: 'Redis', en: 'Redis' }
  }
};

/**
 * 导航配置
 * @type {Object}
 */
export const NAV_CONFIG = {
  /** 导航栏显示的分类数量 */
  maxNavItems: 8,
  /** 侧边栏是否显示全部分类 */
  sidebarShowAll: true
};

// ============================================================================
// 辅助函数
// ============================================================================

/**
 * 获取所有分类 ID
 * @returns {string[]} 分类 ID 列表
 * @internal 用于未来扩展
 */
export function getCategoryIds() {
  return Object.keys(CATEGORIES);
}

/**
 * 按优先级排序的分类列表
 * @returns {string[]} 排序后的分类 ID 列表
 */
export function getCategoriesByPriority() {
  return Object.entries(CATEGORIES)
    .sort((a, b) => a[1].priority - b[1].priority)
    .map(([id]) => id);
}

/**
 * 获取分类的显示名称
 * @param {string} categoryId - 分类 ID
 * @param {'zh'|'en'} lang - 语言
 * @returns {string} 显示名称
 */
export function getCategoryName(categoryId, lang = 'zh') {
  const category = CATEGORIES[categoryId];
  if (!category) {
    return categoryId;
  }
  return lang === 'zh' ? category.zh : category.en;
}

/**
 * 获取分类的完整定义
 * @param {string} categoryId - 分类 ID
 * @returns {CategoryDefinition|null} 分类定义
 * @internal 用于未来扩展
 */
export function getCategory(categoryId) {
  return CATEGORIES[categoryId] || null;
}

/**
 * 获取子分类的显示名称
 * @param {string} categoryId - 分类 ID
 * @param {string} subcategoryId - 子分类 ID
 * @param {'zh'|'en'} lang - 语言
 * @returns {string} 显示名称
 * @description 如果子分类未定义，返回原始 subcategoryId 作为 fallback
 */
export function getSubcategoryName(categoryId, subcategoryId, lang = 'zh') {
  const subcategories = SUBCATEGORIES[categoryId];
  if (!subcategories || !subcategories[subcategoryId]) {
    return subcategoryId;
  }
  return lang === 'zh'
    ? subcategories[subcategoryId].zh
    : subcategories[subcategoryId].en;
}

/**
 * 获取用于导航的分类列表
 * @param {'zh'|'en'} lang - 语言
 * @returns {Array<{text: string, link: string}>} 导航项
 * @internal 用于未来扩展，可直接替换 generate-config.js 中的逻辑
 */
export function getNavCategories(lang = 'zh') {
  const sorted = getCategoriesByPriority();
  const navItems = sorted.slice(0, NAV_CONFIG.maxNavItems);

  return navItems.map(categoryId => ({
    text: getCategoryName(categoryId, lang),
    link: `rules/${categoryId}`
  }));
}

/**
 * 获取用于侧边栏的分类列表
 * @param {'zh'|'en'} lang - 语言
 * @param {string} [prefix=''] - 链接前缀
 * @returns {Array<{text: string, link: string}>} 侧边栏项
 * @internal 用于未来扩展，可直接替换 generate-config.js 中的逻辑
 */
export function getSidebarCategories(lang = 'zh', prefix = '') {
  const sorted = getCategoriesByPriority();

  const allLink = lang === 'zh' ? 'rules/' : 'en/rules/';
  const items = [
    { text: lang === 'zh' ? '全部规则' : 'All Rules', link: `${prefix}${allLink}` }
  ];

  for (const categoryId of sorted) {
    items.push({
      text: getCategoryName(categoryId, lang),
      link: `${prefix}rules/${categoryId}`
    });
  }

  return items;
}
