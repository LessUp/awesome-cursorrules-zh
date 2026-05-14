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
    general: '通用',
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
    general: 'General',
  },
} as const;

const CATEGORY_GROUPS = {
  zh: [
    { text: '核心开发', categories: ['frontend', 'backend', 'mobile', 'ai'] },
    { text: '工程与平台', categories: ['devops', 'cloud', 'security', 'database', 'data'] },
    {
      text: '智能与科学',
      categories: ['data-science', 'edge', 'emerging-tech', 'robotics', 'automation', 'science', 'bio', 'quantum', 'simulation'],
    },
    {
      text: '行业与基础设施',
      categories: ['blockchain', 'iot', 'gaming', 'ar-vr', 'industrial', 'cms', 'hardware', 'network', 'storage', 'compute', 'systems', 'platform'],
    },
    { text: '通用能力', categories: ['tools', 'general'] },
  ],
  en: [
    { text: 'Core Development', categories: ['frontend', 'backend', 'mobile', 'ai'] },
    { text: 'Engineering & Platform', categories: ['devops', 'cloud', 'security', 'database', 'data'] },
    {
      text: 'Intelligence & Science',
      categories: ['data-science', 'edge', 'emerging-tech', 'robotics', 'automation', 'science', 'bio', 'quantum', 'simulation'],
    },
    {
      text: 'Industry & Infra',
      categories: ['blockchain', 'iot', 'gaming', 'ar-vr', 'industrial', 'cms', 'hardware', 'network', 'storage', 'compute', 'systems', 'platform'],
    },
    { text: 'General Capability', categories: ['tools', 'general'] },
  ],
} as const;

function createRuleSidebarGroups(lang: 'zh' | 'en') {
  return CATEGORY_GROUPS[lang].map((group, index) => ({
    text: group.text,
    collapsed: index !== 0,
    items: group.categories.map((category) => ({
      text: CATEGORY_NAMES[lang][category] || category,
      link: `/${lang}/rules/${category}`,
    })),
  }));
}

export const zhNav = [
  { text: '项目主张', link: '/zh/' },
  { text: '白皮书', link: '/zh/whitepaper/decision-brief', activeMatch: '/zh/whitepaper/' },
  { text: '架构图谱', link: '/zh/architecture/blueprint', activeMatch: '/zh/architecture/' },
  { text: '采用路径', link: '/zh/playbook/adoption-path', activeMatch: '/zh/playbook/' },
  { text: '规则证据库', link: '/zh/rules/', activeMatch: '/zh/rules/' },
  { text: '资源网络', link: '/zh/resources/ecosystem', activeMatch: '/zh/resources/' },
];

export const enNav = [
  { text: 'Project Thesis', link: '/en/' },
  { text: 'Whitepaper', link: '/en/whitepaper/decision-brief', activeMatch: '/en/whitepaper/' },
  { text: 'Architecture Atlas', link: '/en/architecture/blueprint', activeMatch: '/en/architecture/' },
  { text: 'Adoption Paths', link: '/en/playbook/adoption-path', activeMatch: '/en/playbook/' },
  { text: 'Rules Evidence Library', link: '/en/rules/', activeMatch: '/en/rules/' },
  { text: 'Resource Network', link: '/en/resources/ecosystem', activeMatch: '/en/resources/' },
];

export const zhSidebar = {
  '/zh/whitepaper/': [
    {
      text: '白皮书',
      items: [
        { text: '决策者摘要', link: '/zh/whitepaper/decision-brief' },
        { text: '项目总览', link: '/zh/whitepaper/overview' },
        { text: '采用模型', link: '/zh/whitepaper/adoption-model' },
      ],
    },
  ],
  '/zh/architecture/': [
    {
      text: '架构图谱',
      items: [
        { text: '信息图谱', link: '/zh/architecture/information-graph' },
        { text: '站点蓝图', link: '/zh/architecture/blueprint' },
        { text: '内容系统', link: '/zh/architecture/content-system' },
      ],
    },
  ],
  '/zh/playbook/': [
    {
      text: '采用路径',
      items: [
        { text: '采用路径', link: '/zh/playbook/adoption-path' },
        { text: '角色路径', link: '/zh/playbook/role-paths' },
        { text: '运行模型', link: '/zh/playbook/operating-model' },
        { text: '快速开始', link: '/zh/getting-started' },
        { text: '最佳实践', link: '/zh/best-practices' },
        { text: '故障排除', link: '/zh/troubleshooting' },
        { text: '规则模板指南', link: '/zh/guides/rule-template' },
      ],
    },
  ],
  '/zh/resources/': [
    {
      text: '资源网络',
      items: [
        { text: '生态资源', link: '/zh/resources/ecosystem' },
        { text: '延伸阅读', link: '/zh/resources/extended-reading' },
        { text: '更新日志', link: '/zh/changelog' },
        { text: '贡献指南', link: '/zh/contributing' },
      ],
    },
  ],
  '/zh/rules/': [
    {
      text: '规则证据库',
      items: [
        { text: '证据库首页', link: '/zh/rules/' },
        { text: '组合模式', link: '/zh/rules/composition-patterns' },
      ],
    },
    ...createRuleSidebarGroups('zh'),
  ],
  '/zh/': [
    {
      text: '项目主张',
      items: [
        { text: '首页', link: '/zh/' },
        { text: '决策者摘要', link: '/zh/whitepaper/decision-brief' },
        { text: '信息图谱', link: '/zh/architecture/information-graph' },
        { text: '采用路径', link: '/zh/playbook/adoption-path' },
        { text: '规则证据库', link: '/zh/rules/' },
        { text: '资源网络', link: '/zh/resources/ecosystem' },
      ],
    },
  ],
};

export const enSidebar = {
  '/en/whitepaper/': [
    {
      text: 'Whitepaper',
      items: [
        { text: 'Decision Brief', link: '/en/whitepaper/decision-brief' },
        { text: 'Project Overview', link: '/en/whitepaper/overview' },
        { text: 'Adoption Model', link: '/en/whitepaper/adoption-model' },
      ],
    },
  ],
  '/en/architecture/': [
    {
      text: 'Architecture',
      items: [
        { text: 'Information Graph', link: '/en/architecture/information-graph' },
        { text: 'Site Blueprint', link: '/en/architecture/blueprint' },
        { text: 'Content System', link: '/en/architecture/content-system' },
      ],
    },
  ],
  '/en/playbook/': [
    {
      text: 'Playbook',
      items: [
        { text: 'Adoption Path', link: '/en/playbook/adoption-path' },
        { text: 'Role Paths', link: '/en/playbook/role-paths' },
        { text: 'Operating Model', link: '/en/playbook/operating-model' },
        { text: 'Getting Started', link: '/en/getting-started' },
        { text: 'Best Practices', link: '/en/best-practices' },
        { text: 'Troubleshooting', link: '/en/troubleshooting' },
        { text: 'Rule Template Guide', link: '/en/guides/rule-template' },
      ],
    },
  ],
  '/en/resources/': [
    {
      text: 'Resource Network',
      items: [
        { text: 'Ecosystem', link: '/en/resources/ecosystem' },
        { text: 'Extended Reading', link: '/en/resources/extended-reading' },
        { text: 'Changelog', link: '/en/changelog' },
        { text: 'Contributing', link: '/en/contributing' },
      ],
    },
  ],
  '/en/rules/': [
    {
      text: 'Rules Evidence Library',
      items: [
        { text: 'Rules Evidence Library', link: '/en/rules/' },
        { text: 'Composition Patterns', link: '/en/rules/composition-patterns' },
      ],
    },
    ...createRuleSidebarGroups('en'),
  ],
  '/en/': [
    {
      text: 'Overview',
      items: [
        { text: 'Home', link: '/en/' },
        { text: 'Decision Brief', link: '/en/whitepaper/decision-brief' },
        { text: 'Information Graph', link: '/en/architecture/information-graph' },
        { text: 'Adoption Path', link: '/en/playbook/adoption-path' },
        { text: 'Rules Evidence Library', link: '/en/rules/' },
        { text: 'Resource Network', link: '/en/resources/ecosystem' },
      ],
    },
  ],
};
