import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import llmstxt from 'vitepress-plugin-llms'

const rawBase = process.env.VITEPRESS_BASE
const base = rawBase
  ? rawBase.startsWith('/')
    ? rawBase.endsWith('/') ? rawBase : `${rawBase}/`
    : `/${rawBase}/`
  : '/'
const basePath = base === '/' ? '' : base.replace(/\/$/, '')

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
}

const CATEGORY_GROUPS = {
  zh: [
    { text: '核心开发', categories: ['frontend', 'backend', 'mobile', 'ai'] },
    { text: '工程与平台', categories: ['devops', 'cloud', 'security', 'database', 'data'] },
    { text: '智能与科学', categories: ['data-science', 'edge', 'emerging-tech', 'robotics', 'automation', 'science', 'bio', 'quantum', 'simulation'] },
    { text: '行业与基础设施', categories: ['blockchain', 'iot', 'gaming', 'ar-vr', 'industrial', 'cms', 'hardware', 'network', 'storage', 'compute', 'systems', 'platform'] },
    { text: '通用能力', categories: ['tools', 'general'] }
  ],
  en: [
    { text: 'Core Development', categories: ['frontend', 'backend', 'mobile', 'ai'] },
    { text: 'Engineering & Platform', categories: ['devops', 'cloud', 'security', 'database', 'data'] },
    { text: 'Intelligence & Science', categories: ['data-science', 'edge', 'emerging-tech', 'robotics', 'automation', 'science', 'bio', 'quantum', 'simulation'] },
    { text: 'Industry & Infra', categories: ['blockchain', 'iot', 'gaming', 'ar-vr', 'industrial', 'cms', 'hardware', 'network', 'storage', 'compute', 'systems', 'platform'] },
    { text: 'General Capability', categories: ['tools', 'general'] }
  ]
} as const

function createRuleSidebarGroups(lang: 'zh' | 'en') {
  return CATEGORY_GROUPS[lang].map((group, index) => ({
    text: group.text,
    collapsed: index !== 0,
    items: group.categories.map((category) => ({
      text: CATEGORY_NAMES[lang][category] || category,
      link: `/${lang}/rules/${category}`
    }))
  }))
}

export default withMermaid(defineConfig({
  base,
  title: 'Awesome Cursor Rules Atlas',
  description: 'Cursor rules knowledge atlas, technical whitepaper, and architecture showcase',

  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Awesome Cursor Rules Atlas',
      description: 'Cursor 规则知识图谱、技术白皮书与架构展示站',
      themeConfig: {
        nav: [
          { text: '白皮书', link: '/zh/whitepaper/overview', activeMatch: '/zh/whitepaper/' },
          { text: '架构', link: '/zh/architecture/blueprint', activeMatch: '/zh/architecture/' },
          { text: '方法论', link: '/zh/playbook/adoption-path', activeMatch: '/zh/playbook/' },
          { text: '规则库', link: '/zh/rules/', activeMatch: '/zh/rules/' },
          { text: '资源', link: '/zh/resources/ecosystem', activeMatch: '/zh/resources/' },
          { text: 'FAQ', link: '/zh/faq' }
        ],
        sidebar: {
          '/zh/whitepaper/': [
            {
              text: '技术白皮书',
              items: [
                { text: '项目总览', link: '/zh/whitepaper/overview' },
                { text: '采用模型', link: '/zh/whitepaper/adoption-model' }
              ]
            }
          ],
          '/zh/architecture/': [
            {
              text: '架构展示',
              items: [
                { text: '站点蓝图', link: '/zh/architecture/blueprint' },
                { text: '内容系统', link: '/zh/architecture/content-system' }
              ]
            }
          ],
          '/zh/playbook/': [
            {
              text: '方法论',
              items: [
                { text: '采用路径', link: '/zh/playbook/adoption-path' },
                { text: '运行模型', link: '/zh/playbook/operating-model' },
                { text: '快速开始', link: '/zh/getting-started' },
                { text: '最佳实践', link: '/zh/best-practices' },
                { text: '故障排除', link: '/zh/troubleshooting' },
                { text: '规则模板指南', link: '/zh/guides/rule-template' }
              ]
            }
          ],
          '/zh/resources/': [
            {
              text: '资源网络',
              items: [
                { text: '生态资源', link: '/zh/resources/ecosystem' },
                { text: '延伸阅读', link: '/zh/resources/extended-reading' },
                { text: 'FAQ', link: '/zh/faq' },
                { text: '更新日志', link: '/zh/changelog' },
                { text: '贡献指南', link: '/zh/contributing' }
              ]
            }
          ],
          '/zh/rules/': [
            {
              text: '规则总览',
              items: [
                { text: '全部规则', link: '/zh/rules/' }
              ]
            },
            ...createRuleSidebarGroups('zh')
          ],
          '/zh/': [
            {
              text: '站点总览',
              items: [
                { text: '首页', link: '/zh/' },
                { text: '项目总览', link: '/zh/whitepaper/overview' },
                { text: '站点蓝图', link: '/zh/architecture/blueprint' },
                { text: '采用路径', link: '/zh/playbook/adoption-path' },
                { text: '生态资源', link: '/zh/resources/ecosystem' }
              ]
            }
          ]
        },
        search: {
          provider: 'local',
          translations: {
            button: { buttonText: '搜索站点', buttonAriaLabel: '搜索站点' },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
            }
          }
        },
        editLink: {
          pattern: 'https://github.com/LessUp/awesome-cursorrules-zh/edit/master/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '本页结构' },
        lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'full', timeStyle: 'short' } },
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '多语言',
        footer: {
          message: '以白皮书、架构图谱与操作方法论重构 Cursor 规则知识站',
          copyright: 'Copyright © 2024-2026 Awesome Cursor Rules Contributors | MIT License'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Awesome Cursor Rules Atlas',
      description: 'Cursor rule atlas, technical whitepaper, and architecture showcase',
      themeConfig: {
        nav: [
          { text: 'Whitepaper', link: '/en/whitepaper/overview', activeMatch: '/en/whitepaper/' },
          { text: 'Architecture', link: '/en/architecture/blueprint', activeMatch: '/en/architecture/' },
          { text: 'Playbook', link: '/en/playbook/adoption-path', activeMatch: '/en/playbook/' },
          { text: 'Rules', link: '/en/rules/', activeMatch: '/en/rules/' },
          { text: 'Resources', link: '/en/resources/ecosystem', activeMatch: '/en/resources/' },
          { text: 'FAQ', link: '/en/faq' }
        ],
        sidebar: {
          '/en/whitepaper/': [
            {
              text: 'Whitepaper',
              items: [
                { text: 'Overview', link: '/en/whitepaper/overview' },
                { text: 'Adoption Model', link: '/en/whitepaper/adoption-model' }
              ]
            }
          ],
          '/en/architecture/': [
            {
              text: 'Architecture',
              items: [
                { text: 'Site Blueprint', link: '/en/architecture/blueprint' },
                { text: 'Content System', link: '/en/architecture/content-system' }
              ]
            }
          ],
          '/en/playbook/': [
            {
              text: 'Playbook',
              items: [
                { text: 'Adoption Path', link: '/en/playbook/adoption-path' },
                { text: 'Operating Model', link: '/en/playbook/operating-model' },
                { text: 'Getting Started', link: '/en/getting-started' },
                { text: 'Best Practices', link: '/en/best-practices' },
                { text: 'Troubleshooting', link: '/en/troubleshooting' },
                { text: 'Rule Template Guide', link: '/en/guides/rule-template' }
              ]
            }
          ],
          '/en/resources/': [
            {
              text: 'Resource Network',
              items: [
                { text: 'Ecosystem', link: '/en/resources/ecosystem' },
                { text: 'Extended Reading', link: '/en/resources/extended-reading' },
                { text: 'FAQ', link: '/en/faq' },
                { text: 'Changelog', link: '/en/changelog' },
                { text: 'Contributing', link: '/en/contributing' }
              ]
            }
          ],
          '/en/rules/': [
            {
              text: 'Rule Atlas',
              items: [
                { text: 'All Rules', link: '/en/rules/' }
              ]
            },
            ...createRuleSidebarGroups('en')
          ],
          '/en/': [
            {
              text: 'Overview',
              items: [
                { text: 'Home', link: '/en/' },
                { text: 'Project Overview', link: '/en/whitepaper/overview' },
                { text: 'Site Blueprint', link: '/en/architecture/blueprint' },
                { text: 'Adoption Path', link: '/en/playbook/adoption-path' },
                { text: 'Ecosystem', link: '/en/resources/ecosystem' }
              ]
            }
          ]
        },
        search: { provider: 'local' },
        editLink: {
          pattern: 'https://github.com/LessUp/awesome-cursorrules-zh/edit/master/docs/:path',
          text: 'Edit this page on GitHub'
        },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page' },
        lastUpdated: { text: 'Last updated', formatOptions: { dateStyle: 'full', timeStyle: 'short' } },
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Languages',
        footer: {
          message: 'Reframing the project as a whitepaper, architecture atlas, and operational guide for Cursor rules',
          copyright: 'Copyright © 2024-2026 Awesome Cursor Rules Contributors | MIT License'
        }
      }
    }
  },

  themeConfig: {
    outline: [2, 3],
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LessUp/awesome-cursorrules-zh' }
    ],
    logo: '/logo.svg',
    siteTitle: false
  },

  head: [
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3557ff'
      }
    ],
    [
      'script',
      {},
      `(function(){var p=location.pathname;var basePath=${JSON.stringify(basePath)};var locale=navigator.language||navigator.userLanguage||'';if(p===basePath||p===basePath+'/'||p==='/'||p===''){location.replace((basePath || '') + (locale.startsWith('zh') ? '/zh/' : '/en/'));}})();`
    ]
  ],

  vite: {
    plugins: [llmstxt()]
  },

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  srcDir: '.',
  srcExclude: ['**/rules/**/.cursorrules', '**/node_modules/**', '**/.git/**'],
  cacheDir: './.vitepress/cache',
  outDir: './.vitepress/dist',
}))
