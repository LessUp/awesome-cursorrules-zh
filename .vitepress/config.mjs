import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import llmstxt from 'vitepress-plugin-llms';
import { navZh, navEn } from './config/nav.js';
import { sidebarZh, sidebarEn } from './config/sidebar.js';

export default withMermaid(defineConfig({
  title: 'Awesome Cursor Rules',
  description: '为中文开发者打造的 Cursor AI 编程规则集合',
  base: process.env.VITEPRESS_BASE || '/awesome-cursorrules-zh/',

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
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
        editLink: {
          pattern: 'https://github.com/LessUp/awesome-cursorrules-zh/edit/master/:path',
          text: '在 GitHub 上编辑此页'
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
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: navEn,
        sidebar: sidebarEn,
        search: {
          provider: 'local'
        },
        editLink: {
          pattern: 'https://github.com/LessUp/awesome-cursorrules-zh/edit/master/:path',
          text: 'Edit this page on GitHub'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          label: 'On this page'
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        },
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Languages'
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LessUp/awesome-cursorrules-zh' },
    ],
    logo: '/logo.svg',
    siteTitle: false,
    footer: {
      message: '为中文开发者打造的 Cursor AI 编程规则集合',
      copyright: 'Copyright © 2024-2025 Awesome Cursor Rules Contributors | MIT License'
    }
  },

  // Vite 插件配置
  vite: {
    plugins: [llmstxt()]
  },

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  srcDir: '.',
  srcExclude: ['docs/**', '**/rules/**/.cursorrules', '**/node_modules/**', '**/.git/**'],
  cacheDir: './.vitepress/cache',
  outDir: './.vitepress/dist',
  tempDir: './.vitepress/.temp',
  assetsDir: 'assets',
  useGit: true,
  metaChunk: true,
}));
