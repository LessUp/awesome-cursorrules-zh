import { defineConfig } from 'vitepress';
import { navZh } from './config/nav.js';
import { sidebarZh } from './config/sidebar.js';

export default defineConfig({
  title: 'Awesome Cursor Rules',
  description: '为中文开发者打造的 Cursor AI 编程规则集合',
  base: '/awesome-cursorrules-zh/',
  lang: 'zh-CN',

  themeConfig: {
    nav: navZh,
    sidebar: sidebarZh,
    search: {
      provider: 'local',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          noResultsText: '无法找到相关结果',
          resetButtonTitle: '清除查询条件',
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭'
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LessUp/awesome-cursorrules-zh' },
    ],
    editLink: {
      pattern: 'https://github.com/LessUp/awesome-cursorrules-zh/edit/master/:path',
      text: '在 GitHub 上编辑此页'
    },
    logo: '/logo.svg',
    siteTitle: false,
    footer: {
      message: '为中文开发者打造的 Cursor AI 编程规则集合',
      copyright: 'Copyright © 2024-2025 Awesome Cursor Rules Contributors | MIT License'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '多语言'
  },

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: [
    /^https?:\/\//,
    /^\//,
    /^\.\/docs\//,
    /^\.\/(README(?:\.zh-CN)?|getting-started|installation-guide|best-practices|troubleshooting|api-reference)$/,
    /\.\/LICENSE/,
    /\.\/README\.zh-CN/,
    /\.\/rules\/.*\/index/,
    /\.\.\/\.\.\//,
    /\/index$/,
    /\/README\.zh-CN$/,
  ],

  srcDir: '.',
  srcExclude: ['docs/**', '**/rules/**/.cursorrules', '**/node_modules/**', '**/.git/**'],
  cacheDir: './.vitepress/cache',
  outDir: './.vitepress/dist',
  tempDir: './.vitepress/.temp',
  assetsDir: 'assets',
  useGit: true,
  metaChunk: true,
})
