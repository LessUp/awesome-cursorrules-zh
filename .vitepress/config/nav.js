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

function createRuleGroups(lang, prefix) {
  return CATEGORY_GROUPS[lang].map(group => ({
    text: group.text,
    items: group.categories.map(category => ({
      text: CATEGORY_NAMES[lang][category] || category,
      link: `/${prefix}/rules/${category}`,
      activeMatch: `^/${prefix}/rules/${category}`
    }))
  }));
}

export const navZh = [
  { text: '首页', link: '/zh/' },
  {
    text: '文档',
    items: [
      { text: '快速开始', link: '/zh/getting-started', activeMatch: '^/zh/getting-started' },
      { text: '安装指南', link: '/zh/installation-guide', activeMatch: '^/zh/installation-guide' },
      { text: '最佳实践', link: '/zh/best-practices', activeMatch: '^/zh/best-practices' },
      { text: '故障排除', link: '/zh/troubleshooting', activeMatch: '^/zh/troubleshooting' },
      { text: 'API 参考', link: '/zh/api-reference', activeMatch: '^/zh/api-reference' },
      { text: '常见问题', link: '/zh/faq', activeMatch: '^/zh/faq' },
      { text: '规则模板指南', link: '/zh/guides/rule-template', activeMatch: '^/zh/guides/' },
      { text: '贡献指南', link: '/zh/contributing', activeMatch: '^/zh/contributing' },
      { text: '更新日志', link: '/zh/changelog', activeMatch: '^/zh/changelog' }
    ]
  },
  {
    text: '规则库',
    items: [
      ...createRuleGroups('zh', 'zh'),
      { text: '查看全部规则 →', link: '/zh/rules/' }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/LessUp/awesome-cursorrules-zh' }
];

export const navEn = [
  { text: 'Home', link: '/en/' },
  {
    text: 'Docs',
    items: [
      { text: 'Getting started', link: '/en/getting-started', activeMatch: '^/en/getting-started' },
      { text: 'Installation guide', link: '/en/installation-guide', activeMatch: '^/en/installation-guide' },
      { text: 'Best practices', link: '/en/best-practices', activeMatch: '^/en/best-practices' },
      { text: 'Troubleshooting', link: '/en/troubleshooting', activeMatch: '^/en/troubleshooting' },
      { text: 'API reference', link: '/en/api-reference', activeMatch: '^/en/api-reference' },
      { text: 'FAQ', link: '/en/faq', activeMatch: '^/en/faq' },
      { text: 'Rule template guide', link: '/en/guides/rule-template', activeMatch: '^/en/guides/' },
      { text: 'Contributing', link: '/en/contributing', activeMatch: '^/en/contributing' },
      { text: 'Changelog', link: '/en/changelog', activeMatch: '^/en/changelog' }
    ]
  },
  {
    text: 'Rules',
    items: [
      ...createRuleGroups('en', 'en'),
      { text: 'View all rules →', link: '/en/rules/' }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/LessUp/awesome-cursorrules-zh' }
];
