import { defineConfig } from 'vitepress';
import { navZh, navEn } from './config/nav.js';
import { sidebarZh, sidebarEn } from './config/sidebar.js';
import { localeZh, localeEn, searchLocales } from './config/locales.js';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Awesome Cursor Rules',
  description: '为中文开发者打造的 Cursor AI 编程规则集合',

  locales: {
    root: {
      ...localeZh,
      themeConfig: {
        ...localeZh.themeConfig,
        nav: navZh,
        sidebar: sidebarZh
      }
    },
    en: {
      ...localeEn,
      themeConfig: {
        ...localeEn.themeConfig,
        nav: navEn,
        sidebar: sidebarEn
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: searchLocales
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
