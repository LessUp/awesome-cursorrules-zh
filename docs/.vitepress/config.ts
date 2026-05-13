import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import llmstxt from 'vitepress-plugin-llms'

const rawBase = process.env.VITEPRESS_BASE
const base = rawBase
  ? rawBase.startsWith('/')
    ? rawBase.endsWith('/') ? rawBase : `${rawBase}/`
    : `/${rawBase}/`
  : '/'

// 规则分类配置
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
}

function createRuleSidebarGroups(lang: 'zh' | 'en') {
  return CATEGORY_GROUPS[lang].map((group, index) => ({
    text: group.text,
    collapsed: index !== 0,
    items: group.categories.map(category => ({
      text: CATEGORY_NAMES[lang][category] || category,
      link: `/${lang}/rules/${category}`
    }))
  }))
}

export default withMermaid(defineConfig({
  base,
  title: 'Awesome Cursor Rules',
  description: 'Cursor AI 规则集合文档',

  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Awesome Cursor Rules 中文站',
      description: '为中文开发者打造的 Cursor AI 编程规则集合',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/getting-started', activeMatch: '/zh/(getting-started|installation-guide|best-practices|troubleshooting|guides/)' },
          { text: '规则库', link: '/zh/rules/', activeMatch: '/zh/rules/' },
          { text: '地图', link: '/zh/maps/', activeMatch: '/zh/maps/' },
          { text: '资源', link: '/zh/resources/', activeMatch: '/zh/resources/' },
          { text: '哲学', link: '/zh/philosophy', activeMatch: '/zh/philosophy' },
          { text: 'FAQ', link: '/zh/faq' },
        ],
        sidebar: {
          '/zh/maps/': [
            { text: '地图', items: [{ text: '知识与技能地图', link: '/zh/maps/' }] },
          ],
          '/zh/resources/': [
            { text: '资源', items: [{ text: '精选资源', link: '/zh/resources/' }] },
          ],
          '/zh/philosophy': [
            { text: '哲学', items: [{ text: '项目哲学', link: '/zh/philosophy' }] },
          ],
          '/zh/': [
            {
              text: '开始使用',
              items: [
                { text: '快速开始', link: '/zh/getting-started' },
                { text: '安装指南', link: '/zh/installation-guide' },
              ],
            },
            {
              text: '使用指南',
              items: [
                { text: '最佳实践', link: '/zh/best-practices' },
                { text: '故障排除', link: '/zh/troubleshooting' },
                { text: '规则模板指南', link: '/zh/guides/rule-template' },
              ],
            },
            {
              text: '参考',
              items: [
                { text: 'API 参考', link: '/zh/api-reference' },
                { text: '常见问题', link: '/zh/faq' },
                { text: '更新日志', link: '/zh/changelog' },
                { text: '贡献指南', link: '/zh/contributing' },
              ],
            },
            {
              text: '规则分类',
              collapsed: false,
              items: [
                { text: '全部规则', link: '/zh/rules/' },
                ...createRuleSidebarGroups('zh'),
              ],
            },
          ],
        },
        search: {
          provider: 'local',
          translations: {
            button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
            }
          }
        },
        editLink: {
          pattern: 'https://github.com/LessUp/awesome-cursorrules-zh/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '页面导航' },
        lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'full', timeStyle: 'short' } },
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '多语言',
        footer: {
          message: 'Cursor 规则库与工程实践知识库',
          copyright: 'Copyright © 2024-2026 Awesome Cursor Rules Contributors | MIT License'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Awesome Cursor Rules',
      description: 'A curated collection of Cursor AI rules for developers',
      themeConfig: {
        nav: [
          { text: 'Guides', link: '/en/getting-started', activeMatch: '/en/(getting-started|installation-guide|best-practices|troubleshooting|guides/)' },
          { text: 'Rules', link: '/en/rules/', activeMatch: '/en/rules/' },
          { text: 'Maps', link: '/en/maps/', activeMatch: '/en/maps/' },
          { text: 'Resources', link: '/en/resources/', activeMatch: '/en/resources/' },
          { text: 'Philosophy', link: '/en/philosophy', activeMatch: '/en/philosophy' },
          { text: 'FAQ', link: '/en/faq' },
        ],
        sidebar: {
          '/en/maps/': [
            { text: 'Maps', items: [{ text: 'Knowledge and Skill Maps', link: '/en/maps/' }] },
          ],
          '/en/resources/': [
            { text: 'Resources', items: [{ text: 'Curated Resources', link: '/en/resources/' }] },
          ],
          '/en/philosophy': [
            { text: 'Philosophy', items: [{ text: 'Project Philosophy', link: '/en/philosophy' }] },
          ],
          '/en/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Getting Started', link: '/en/getting-started' },
                { text: 'Installation Guide', link: '/en/installation-guide' },
              ],
            },
            {
              text: 'Guides',
              items: [
                { text: 'Best Practices', link: '/en/best-practices' },
                { text: 'Troubleshooting', link: '/en/troubleshooting' },
                { text: 'Rule Template Guide', link: '/en/guides/rule-template' },
              ],
            },
            {
              text: 'Reference',
              items: [
                { text: 'API Reference', link: '/en/api-reference' },
                { text: 'FAQ', link: '/en/faq' },
                { text: 'Changelog', link: '/en/changelog' },
                { text: 'Contributing', link: '/en/contributing' },
              ],
            },
            {
              text: 'Rule Categories',
              collapsed: false,
              items: [
                { text: 'All Rules', link: '/en/rules/' },
                ...createRuleSidebarGroups('en'),
              ],
            },
          ],
        },
        search: { provider: 'local' },
        editLink: {
          pattern: 'https://github.com/LessUp/awesome-cursorrules-zh/edit/main/docs/:path',
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
          message: 'A practical playbook for Cursor rules and engineering workflows',
          copyright: 'Copyright © 2024-2026 Awesome Cursor Rules Contributors | MIT License'
        }
      }
    }
  },

  themeConfig: {
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LessUp/awesome-cursorrules-zh' },
    ],
    logo: '/logo.svg',
    siteTitle: false,
  },

  head: [
    [
      'script',
      {},
      `(function(){var p=location.pathname;if(p==='/'||p===''){var l=navigator.language||navigator.userLanguage||'';location.replace(l.startsWith('zh')?'/zh/':'/en/');}})();`
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
