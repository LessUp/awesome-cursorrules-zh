import { rulesNavZh, rulesNavEn } from './generated-nav.js';

/**
 * 分类分组定义
 * 用于将 32 个分类按领域分组显示
 */
const CATEGORY_GROUPS = {
  zh: [
    {
      text: '热门领域',
      items: ['frontend', 'backend', 'mobile', 'ai']
    },
    {
      text: 'DevOps & 云',
      items: ['devops', 'cloud', 'security']
    },
    {
      text: '数据 & AI',
      items: ['data-science', 'data', 'database']
    },
    {
      text: '更多领域',
      items: ['blockchain', 'iot', 'gaming', 'ar-vr', 'hardware', 'tools', 'general']
    }
  ],
  en: [
    {
      text: 'Popular',
      items: ['frontend', 'backend', 'mobile', 'ai']
    },
    {
      text: 'DevOps & Cloud',
      items: ['devops', 'cloud', 'security']
    },
    {
      text: 'Data & AI',
      items: ['data-science', 'data', 'database']
    },
    {
      text: 'More',
      items: ['blockchain', 'iot', 'gaming', 'ar-vr', 'hardware', 'tools', 'general']
    }
  ]
};

/**
 * 分类中文名称映射
 */
const CATEGORY_NAMES_ZH = {
  frontend: '前端开发',
  backend: '后端开发',
  mobile: '移动开发',
  ai: 'AI与数据',
  'data-science': '数据科学',
  devops: 'DevOps',
  blockchain: '区块链',
  security: '安全',
  cloud: '云服务',
  database: '数据库',
  iot: '物联网',
  gaming: '游戏开发',
  'ar-vr': 'AR/VR',
  hardware: '硬件',
  tools: '工具',
  general: '通用',
  data: '数据',
  edge: '边缘计算',
  'emerging-tech': '新兴技术',
  robotics: '机器人',
  automation: '自动化',
  platform: '平台',
  systems: '系统',
  network: '网络',
  storage: '存储',
  compute: '计算',
  science: '科学',
  bio: '生物',
  quantum: '量子',
  simulation: '仿真',
  industrial: '工业',
  cms: 'CMS'
};

const CATEGORY_NAMES_EN = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  ai: 'AI & Data',
  'data-science': 'Data Science',
  devops: 'DevOps',
  blockchain: 'Blockchain',
  security: 'Security',
  cloud: 'Cloud',
  database: 'Database',
  iot: 'IoT',
  gaming: 'Gaming',
  'ar-vr': 'AR/VR',
  hardware: 'Hardware',
  tools: 'Tools',
  general: 'General',
  data: 'Data',
  edge: 'Edge',
  'emerging-tech': 'Emerging Tech',
  robotics: 'Robotics',
  automation: 'Automation',
  platform: 'Platform',
  systems: 'Systems',
  network: 'Network',
  storage: 'Storage',
  compute: 'Compute',
  science: 'Science',
  bio: 'Bio',
  quantum: 'Quantum',
  simulation: 'Simulation',
  industrial: 'Industrial',
  cms: 'CMS'
};

/**
 * 创建分组导航配置
 */
function createGroupedNav(groups, categoryNames, linkPrefix) {
  return groups.map(group => ({
    text: group.text,
    items: group.items.map(cat => ({
      text: categoryNames[cat] || cat,
      link: `${linkPrefix}/${cat}`,
      activeMatch: `/${linkPrefix}/${cat}`
    }))
  }));
}

export function createNavConfig({ i18n, rulesNav }) {
  const { home, docs, rules } = i18n.nav;

  return [
    { text: home, link: '/' },
    {
      text: docs.title,
      items: docs.items.map(item => ({
        text: item.text,
        link: `/${item.link}`,
        activeMatch: `/${item.link}`
      }))
    },
    {
      text: rules.title,
      items: [
        ...rulesNav,
        { text: rules.viewAll, link: '/zh/rules/' }
      ]
    }
  ];
}

/**
 * 创建带分组的导航配置
 */
export function createGroupedNavConfig({ i18n, linkPrefix, categoryNames, groups }) {
  const { home, docs, rules } = i18n.nav;

  const groupedItems = createGroupedNav(groups, categoryNames, linkPrefix);

  return [
    { text: home, link: '/' },
    {
      text: docs.title,
      items: docs.items.map(item => ({
        text: item.text,
        link: `/${item.link}`,
        activeMatch: `/${item.link}`
      }))
    },
    {
      text: rules.title,
      items: [
        ...groupedItems,
        { text: rules.viewAll, link: `/${linkPrefix}/rules/` }
      ]
    }
  ];
}

export const navZh = createGroupedNavConfig({
  i18n: {
    nav: {
      home: '首页',
      docs: {
        title: '文档',
        items: [
          { text: '快速开始', link: 'zh/getting-started' },
          { text: '安装指南', link: 'zh/installation-guide' },
          { text: '最佳实践', link: 'zh/best-practices' },
          { text: '故障排除', link: 'zh/troubleshooting' },
          { text: 'API 参考', link: 'zh/api-reference' }
        ]
      },
      rules: {
        title: '规则库',
        viewAll: '查看全部 →'
      }
    }
  },
  linkPrefix: 'zh',
  categoryNames: CATEGORY_NAMES_ZH,
  groups: CATEGORY_GROUPS.zh
});

export const navEn = createGroupedNavConfig({
  i18n: {
    nav: {
      home: 'Home',
      docs: {
        title: 'Docs',
        items: [
          { text: 'Getting Started', link: 'en/getting-started' },
          { text: 'Installation Guide', link: 'en/installation-guide' },
          { text: 'Best Practices', link: 'en/best-practices' },
          { text: 'Troubleshooting', link: 'en/troubleshooting' },
          { text: 'API Reference', link: 'en/api-reference' }
        ]
      },
      rules: {
        title: 'Rules',
        viewAll: 'View All →'
      }
    }
  },
  linkPrefix: 'en',
  categoryNames: CATEGORY_NAMES_EN,
  groups: CATEGORY_GROUPS.en
});
