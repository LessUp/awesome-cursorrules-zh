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
  { text: '项目导读', link: '/zh/introduction/mission', activeMatch: '/zh/introduction/' },
  { text: '技术白皮书', link: '/zh/whitepaper/performance', activeMatch: '/zh/whitepaper/' },
  { text: '学院路径', link: '/zh/academy/learning-path', activeMatch: '/zh/academy/' },
  { text: '架构设计', link: '/zh/architecture/system-overview', activeMatch: '/zh/architecture/' },
  { text: '规则索引', link: '/zh/rules/', activeMatch: '/zh/rules/' },
  { text: '研究引用', link: '/zh/research/references', activeMatch: '/zh/research/' },
];

export const enNav = [
  { text: 'Introduction', link: '/en/introduction/mission', activeMatch: '/en/introduction/' },
  { text: 'Whitepaper', link: '/en/whitepaper/performance', activeMatch: '/en/whitepaper/' },
  { text: 'Academy', link: '/en/academy/learning-path', activeMatch: '/en/academy/' },
  { text: 'Architecture', link: '/en/architecture/system-overview', activeMatch: '/en/architecture/' },
  { text: 'Rules Index', link: '/en/rules/', activeMatch: '/en/rules/' },
  { text: 'Research', link: '/en/research/references', activeMatch: '/en/research/' },
];

export const zhSidebar = {
  '/zh/whitepaper/': [
    {
      text: '技术白皮书',
      items: [
        { text: '性能分析', link: '/zh/whitepaper/performance' },
        { text: '设计决策', link: '/zh/whitepaper/design-decisions' },
      ],
    },
  ],
  '/zh/introduction/': [
    {
      text: '项目导读',
      items: [
        { text: '项目使命', link: '/zh/introduction/mission' },
        { text: '读者地图', link: '/zh/introduction/reader-map' },
      ],
    },
  ],
  '/zh/academy/': [
    {
      text: '学院路径',
      items: [
        { text: '学院路径', link: '/zh/academy/learning-path' },
        { text: '维护者课程', link: '/zh/academy/maintainer-curriculum' },
        { text: '企业案例研究', link: '/zh/academy/case-studies/enterprise-adoption' },
      ],
    },
  ],
  '/zh/architecture/': [
    {
      text: '架构设计',
      items: [
        { text: '系统总览', link: '/zh/architecture/system-overview' },
        { text: '站点蓝图', link: '/zh/architecture/blueprint' },
        { text: '信息图谱', link: '/zh/architecture/information-graph' },
        { text: '内容系统', link: '/zh/architecture/content-system' },
      ],
    },
  ],
  '/zh/guides/': [
    {
      text: '实施指南',
      items: [
        { text: '团队接入', link: '/zh/guides/team-onboarding' },
        { text: '规则模板指南', link: '/zh/guides/rule-template' },
        { text: '快速开始', link: '/zh/getting-started' },
        { text: '最佳实践', link: '/zh/best-practices' },
        { text: '故障排除', link: '/zh/troubleshooting' },
      ],
    },
  ],
  '/zh/research/': [
    {
      text: '研究引用',
      items: [
        { text: '参考文献', link: '/zh/research/references' },
        { text: 'Prompt 工程解读', link: '/zh/research/papers/prompt-engineering' },
        { text: '相关开源项目探究', link: '/zh/resources/ecosystem' },
        { text: '演进思考', link: '/zh/resources/extended-reading' },
        { text: '更新日志', link: '/zh/changelog' },
        { text: '贡献指南', link: '/zh/contributing' },
      ],
    },
  ],
  '/zh/rules/': [
    {
      text: '规则索引',
      items: [
        { text: '规则索引', link: '/zh/rules/' },
        { text: '组合模式', link: '/zh/rules/composition-patterns' },
      ],
    },
    ...createRuleSidebarGroups('zh'),
  ],
  '/zh/': [
    {
      text: '总览',
      items: [
        { text: '首页', link: '/zh/' },
        { text: '项目使命', link: '/zh/introduction/mission' },
        { text: '学院路径', link: '/zh/academy/learning-path' },
        { text: '系统总览', link: '/zh/architecture/system-overview' },
        { text: '团队接入', link: '/zh/guides/team-onboarding' },
        { text: '规则索引', link: '/zh/rules/' },
        { text: '研究引用', link: '/zh/research/references' },
      ],
    },
  ],
};

export const enSidebar = {
  '/en/whitepaper/': [
    {
      text: 'Whitepaper',
      items: [
        { text: 'Performance Analysis', link: '/en/whitepaper/performance' },
        { text: 'Design Decisions', link: '/en/whitepaper/design-decisions' },
      ],
    },
  ],
  '/en/introduction/': [
    {
      text: 'Introduction',
      items: [
        { text: 'Project Mission', link: '/en/introduction/mission' },
        { text: 'Reader Map', link: '/en/introduction/reader-map' },
      ],
    },
  ],
  '/en/academy/': [
    {
      text: 'Academy',
      items: [
        { text: 'Academy Path', link: '/en/academy/learning-path' },
        { text: 'Maintainer Curriculum', link: '/en/academy/maintainer-curriculum' },
        { text: 'Enterprise Case Study', link: '/en/academy/case-studies/enterprise-adoption' },
      ],
    },
  ],
  '/en/architecture/': [
    {
      text: 'Architecture',
      items: [
        { text: 'System Overview', link: '/en/architecture/system-overview' },
        { text: 'Site Blueprint', link: '/en/architecture/blueprint' },
        { text: 'Information Graph', link: '/en/architecture/information-graph' },
        { text: 'Content System', link: '/en/architecture/content-system' },
      ],
    },
  ],
  '/en/guides/': [
    {
      text: 'Guides',
      items: [
        { text: 'Team Onboarding', link: '/en/guides/team-onboarding' },
        { text: 'Rule Template Guide', link: '/en/guides/rule-template' },
        { text: 'Getting Started', link: '/en/getting-started' },
        { text: 'Best Practices', link: '/en/best-practices' },
        { text: 'Troubleshooting', link: '/en/troubleshooting' },
      ],
    },
  ],
  '/en/research/': [
    {
      text: 'Research',
      items: [
        { text: 'References', link: '/en/research/references' },
        { text: 'Prompt Engineering Deep Dive', link: '/en/research/papers/prompt-engineering' },
        { text: 'Open Source Survey', link: '/en/resources/ecosystem' },
        { text: 'Evolution Notes', link: '/en/resources/extended-reading' },
        { text: 'Changelog', link: '/en/changelog' },
        { text: 'Contributing', link: '/en/contributing' },
      ],
    },
  ],
  '/en/rules/': [
    {
      text: 'Rules Index',
      items: [
        { text: 'Rules Index', link: '/en/rules/' },
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
        { text: 'Project Mission', link: '/en/introduction/mission' },
        { text: 'Academy Path', link: '/en/academy/learning-path' },
        { text: 'System Overview', link: '/en/architecture/system-overview' },
        { text: 'Team Onboarding', link: '/en/guides/team-onboarding' },
        { text: 'Rules Index', link: '/en/rules/' },
        { text: 'Research', link: '/en/research/references' },
      ],
    },
  ],
};
