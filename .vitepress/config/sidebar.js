const CATEGORY_NAMES = {
  zh: {
    frontend: '前端开发',
    backend: '后端开发',
    mobile: '移动开发',
    ai: 'AI 与数据',
    devops: 'DevOps',
    cloud: '云服务',
    security: '安全',
    database: '数据库',
    data: '数据工程',
    'data-science': '数据科学',
    edge: '边缘计算',
    'emerging-tech': '新兴技术',
    robotics: '机器人',
    automation: '自动化',
    science: '科学',
    bio: '生物',
    quantum: '量子',
    simulation: '仿真',
    blockchain: '区块链',
    iot: '物联网',
    gaming: '游戏开发',
    'ar-vr': 'AR/VR',
    industrial: '工业',
    cms: 'CMS',
    hardware: '硬件',
    network: '网络',
    storage: '存储',
    compute: '计算',
    systems: '系统',
    platform: '平台',
    tools: '工具',
    general: '通用'
  },
  en: {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    ai: 'AI & Data',
    devops: 'DevOps',
    cloud: 'Cloud',
    security: 'Security',
    database: 'Database',
    data: 'Data Engineering',
    'data-science': 'Data Science',
    edge: 'Edge',
    'emerging-tech': 'Emerging Tech',
    robotics: 'Robotics',
    automation: 'Automation',
    science: 'Science',
    bio: 'Bio',
    quantum: 'Quantum',
    simulation: 'Simulation',
    blockchain: 'Blockchain',
    iot: 'IoT',
    gaming: 'Gaming',
    'ar-vr': 'AR/VR',
    industrial: 'Industrial',
    cms: 'CMS',
    hardware: 'Hardware',
    network: 'Network',
    storage: 'Storage',
    compute: 'Compute',
    systems: 'Systems',
    platform: 'Platform',
    tools: 'Tools',
    general: 'General'
  }
};

const CATEGORY_GROUPS = {
  zh: [
    {
      text: '核心开发',
      categories: ['frontend', 'backend', 'mobile', 'ai']
    },
    {
      text: '工程与平台',
      categories: ['devops', 'cloud', 'security', 'database', 'data']
    },
    {
      text: '智能与科学',
      categories: ['data-science', 'edge', 'emerging-tech', 'robotics', 'automation', 'science', 'bio', 'quantum', 'simulation']
    },
    {
      text: '行业与基础设施',
      categories: ['blockchain', 'iot', 'gaming', 'ar-vr', 'industrial', 'cms', 'hardware', 'network', 'storage', 'compute', 'systems', 'platform']
    },
    {
      text: '通用能力',
      categories: ['tools', 'general']
    }
  ],
  en: [
    {
      text: 'Core Development',
      categories: ['frontend', 'backend', 'mobile', 'ai']
    },
    {
      text: 'Engineering & Platform',
      categories: ['devops', 'cloud', 'security', 'database', 'data']
    },
    {
      text: 'Intelligence & Science',
      categories: ['data-science', 'edge', 'emerging-tech', 'robotics', 'automation', 'science', 'bio', 'quantum', 'simulation']
    },
    {
      text: 'Industry & Infra',
      categories: ['blockchain', 'iot', 'gaming', 'ar-vr', 'industrial', 'cms', 'hardware', 'network', 'storage', 'compute', 'systems', 'platform']
    },
    {
      text: 'General Capability',
      categories: ['tools', 'general']
    }
  ]
};

function createRuleSidebarGroups(lang, prefix) {
  return CATEGORY_GROUPS[lang].map((group, index) => ({
    text: group.text,
    collapsed: index !== 0,
    items: group.categories.map(category => ({
      text: CATEGORY_NAMES[lang][category] || category,
      link: `/${prefix}/rules/${category}`
    }))
  }));
}

const docSidebarZh = [
  {
    text: '🚀 开始',
    collapsed: false,
    items: [
      { text: '首页', link: '/zh/' },
      { text: '快速开始', link: '/zh/getting-started' },
      { text: '安装指南', link: '/zh/installation-guide' }
    ]
  },
  {
    text: '📘 使用与知识',
    collapsed: false,
    items: [
      { text: '最佳实践', link: '/zh/best-practices' },
      { text: '故障排除', link: '/zh/troubleshooting' },
      { text: '常见问题', link: '/zh/faq' },
      { text: '规则模板指南', link: '/zh/guides/rule-template' },
      { text: 'API 参考', link: '/zh/api-reference' },
      { text: '贡献指南', link: '/zh/contributing' },
      { text: '更新日志', link: '/zh/changelog' }
    ]
  },
  {
    text: '📂 规则地图',
    collapsed: false,
    items: [
      { text: '全部规则', link: '/zh/rules/' },
      ...createRuleSidebarGroups('zh', 'zh')
    ]
  }
];

const docSidebarEn = [
  {
    text: '🚀 Start',
    collapsed: false,
    items: [
      { text: 'Home', link: '/en/' },
      { text: 'Getting started', link: '/en/getting-started' },
      { text: 'Installation guide', link: '/en/installation-guide' }
    ]
  },
  {
    text: '📘 Guides & Knowledge',
    collapsed: false,
    items: [
      { text: 'Best practices', link: '/en/best-practices' },
      { text: 'Troubleshooting', link: '/en/troubleshooting' },
      { text: 'FAQ', link: '/en/faq' },
      { text: 'Rule template guide', link: '/en/guides/rule-template' },
      { text: 'API reference', link: '/en/api-reference' },
      { text: 'Contributing', link: '/en/contributing' },
      { text: 'Changelog', link: '/en/changelog' }
    ]
  },
  {
    text: '📂 Rules Map',
    collapsed: false,
    items: [
      { text: 'All rules', link: '/en/rules/' },
      ...createRuleSidebarGroups('en', 'en')
    ]
  }
];

export const sidebarZh = {
  '/zh/': docSidebarZh
};

export const sidebarEn = {
  '/en/': docSidebarEn
};
