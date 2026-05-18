import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import llmstxt from 'vitepress-plugin-llms'
import UnoCSS from 'unocss/vite'
import { zhNav, enNav, zhSidebar, enSidebar } from './site/atlas'
import { siteFacts } from './site/facts'

const rawBase = process.env.VITEPRESS_BASE
const base = rawBase
  ? rawBase.startsWith('/')
    ? rawBase.endsWith('/') ? rawBase : `${rawBase}/`
    : `/${rawBase}/`
  : '/'
const basePath = base === '/' ? '' : base.replace(/\/$/, '')

export default withMermaid(defineConfig({
  base,
  title: 'Awesome Cursor Rules Academy',
  description: `Technical whitepaper, architecture showcase, and research library for ${siteFacts.ruleCount}+ Cursor rule assets across ${siteFacts.domainCount}+ domains`,

  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Awesome Cursor Rules Academy',
      description: `面向技术负责人与高级开发者的 Cursor 白皮书、架构展厅与研究引文库，覆盖 ${siteFacts.ruleCount}+ 条规则资产与 ${siteFacts.domainCount}+ 个领域`,
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
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
          message: `以 ${siteFacts.ruleCount}+ 条规则资产、${siteFacts.domainCount}+ 个技术领域重构为白皮书、学院与研究站`,
          copyright: 'Copyright © 2024-2026 Awesome Cursor Rules Contributors | MIT License'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Awesome Cursor Rules Academy',
      description: `Technical whitepaper, architecture showcase, and research library for ${siteFacts.ruleCount}+ Cursor rule assets across ${siteFacts.domainCount}+ domains`,
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
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
          message: `Reframing ${siteFacts.ruleCount}+ rule assets across ${siteFacts.domainCount}+ domains as a whitepaper, academy, and research library`,
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
        content: '#3f5ef7'
      }
    ],
    [
      'script',
      {},
      `(function(){var p=location.pathname;var basePath=${JSON.stringify(basePath)};var locale=navigator.language||navigator.userLanguage||'';if(p===basePath||p===basePath+'/'||p==='/'||p===''){location.replace((basePath || '') + (locale.startsWith('zh') ? '/zh/' : '/en/'));}})();`
    ]
  ],

  vite: {
    plugins: [
      UnoCSS(),
      llmstxt()
    ]
  },

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  srcDir: '.',
  srcExclude: ['**/rules/**/.cursorrules', '**/node_modules/**', '**/.git/**'],
  cacheDir: './.vitepress/cache',
  outDir: './.vitepress/dist',
}))
