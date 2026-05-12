import { rulesSidebarZh, rulesSidebarEn } from './generated-sidebar.js';

/**
 * 分类分组定义（用于侧边栏折叠）
 */
const SIDEBAR_GROUPS = {
  zh: [
    {
      text: '热门领域',
      categories: ['frontend', 'backend', 'mobile', 'ai']
    },
    {
      text: 'DevOps & 云',
      categories: ['devops', 'cloud', 'security', 'database']
    },
    {
      text: '数据 & AI',
      categories: ['data-science', 'data', 'blockchain']
    },
    {
      text: '其他领域',
      categories: ['iot', 'gaming', 'ar-vr', 'hardware', 'tools', 'general', 'edge', 'emerging-tech']
    }
  ],
  en: [
    {
      text: 'Popular',
      categories: ['frontend', 'backend', 'mobile', 'ai']
    },
    {
      text: 'DevOps & Cloud',
      categories: ['devops', 'cloud', 'security', 'database']
    },
    {
      text: 'Data & AI',
      categories: ['data-science', 'data', 'blockchain']
    },
    {
      text: 'Others',
      categories: ['iot', 'gaming', 'ar-vr', 'hardware', 'tools', 'general', 'edge', 'emerging-tech']
    }
  ]
};

/**
 * 分类名称映射
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
  'emerging-tech': '新兴技术'
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
  'emerging-tech': 'Emerging Tech'
};

export function createSidebarConfig({ i18n, rulesItems, docPrefix }) {
  const { gettingStarted, userGuide, reference, rules } = i18n.sidebar;

  return [
    {
      text: gettingStarted.icon + ' ' + gettingStarted.title,
      collapsed: false,
      items: gettingStarted.items.map(item => ({
        text: item.text,
        link: `/${docPrefix}/${item.link}`
      }))
    },
    {
      text: userGuide.icon + ' ' + userGuide.title,
      collapsed: false,
      items: userGuide.items.map(item => ({
        text: item.text,
        link: `/${docPrefix}/${item.link}`
      }))
    },
    {
      text: reference.icon + ' ' + reference.title,
      collapsed: false,
      items: reference.items.map(item => ({
        text: item.text,
        link: `/${item.linkPath}`
      }))
    },
    {
      text: rules.icon + ' ' + rules.title,
      collapsed: false,
      items: rulesItems.map(item => ({
        text: item.text,
        link: `/${item.link}`
      }))
    }
  ];
}

/**
 * 创建带分组的侧边栏配置
 */
function createGroupedSidebar({ i18n, docPrefix, groups, categoryNames }) {
  const { gettingStarted, userGuide, reference, rules } = i18n.sidebar;

  // 创建分组规则项
  const rulesGroups = groups.map((group, index) => ({
    text: group.text,
    collapsed: index > 0, // 第一个分组默认展开，其他折叠
    items: group.categories.map(cat => ({
      text: categoryNames[cat] || cat,
      link: `/${docPrefix}/rules/${cat}`
    }))
  }));

  return [
    {
      text: gettingStarted.icon + ' ' + gettingStarted.title,
      collapsed: false,
      items: gettingStarted.items.map(item => ({
        text: item.text,
        link: `/${docPrefix}/${item.link}`
      }))
    },
    {
      text: userGuide.icon + ' ' + userGuide.title,
      collapsed: false,
      items: userGuide.items.map(item => ({
        text: item.text,
        link: `/${docPrefix}/${item.link}`
      }))
    },
    {
      text: reference.icon + ' ' + reference.title,
      collapsed: false,
      items: reference.items.map(item => ({
        text: item.text,
        link: `/${item.linkPath}`
      }))
    },
    {
      text: rules.icon + ' ' + rules.title,
      collapsed: false,
      items: [
        { text: rules.viewAll, link: `/${docPrefix}/rules/` },
        ...rulesGroups
      ]
    }
  ];
}

export const sidebarZh = {
  '/': createGroupedSidebar({
    i18n: {
      sidebar: {
        gettingStarted: {
          icon: '🚀',
          title: '快速开始',
          items: [
            { text: '简介', link: '' },
            { text: '快速开始', link: 'getting-started' },
            { text: '安装指南', link: 'installation-guide' }
          ]
        },
        userGuide: {
          icon: '📖',
          title: '使用指南',
          items: [
            { text: '最佳实践', link: 'best-practices' },
            { text: '故障排除', link: 'troubleshooting' }
          ]
        },
        reference: {
          icon: '📚',
          title: '参考文档',
          items: [
            { text: 'API 参考', link: 'api-reference', linkPath: 'zh/api-reference' }
          ]
        },
        rules: {
          icon: '📂',
          title: '规则集',
          viewAll: '全部规则'
        }
      }
    },
    docPrefix: 'zh',
    groups: SIDEBAR_GROUPS.zh,
    categoryNames: CATEGORY_NAMES_ZH
  })
};

export const sidebarEn = {
  '/en/': createGroupedSidebar({
    i18n: {
      sidebar: {
        gettingStarted: {
          icon: '🚀',
          title: 'Getting Started',
          items: [
            { text: 'Introduction', link: '' },
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'Installation Guide', link: 'installation-guide' }
          ]
        },
        userGuide: {
          icon: '📖',
          title: 'User Guide',
          items: [
            { text: 'Best Practices', link: 'best-practices' },
            { text: 'Troubleshooting', link: 'troubleshooting' }
          ]
        },
        reference: {
          icon: '📚',
          title: 'Reference',
          items: [
            { text: 'API Reference', link: 'api-reference', linkPath: 'en/api-reference' }
          ]
        },
        rules: {
          icon: '📂',
          title: 'Rules',
          viewAll: 'All Rules'
        }
      }
    },
    docPrefix: 'en',
    groups: SIDEBAR_GROUPS.en,
    categoryNames: CATEGORY_NAMES_EN
  })
};
