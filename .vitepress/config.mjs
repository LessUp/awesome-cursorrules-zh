import { defineConfig } from 'vitepress'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join, resolve } from 'path'

// 统计规则数据
function getRulesStats() {
  const rulesDir = resolve('./rules')
  const categories = readdirSync(rulesDir).filter(f => statSync(join(rulesDir, f)).isDirectory())
  
  let totalRules = 0
  let totalCategories = categories.length
  
  categories.forEach(cat => {
    const catPath = join(rulesDir, cat)
    try {
      const subdirs = readdirSync(catPath).filter(f => statSync(join(catPath, f)).isDirectory())
      totalRules += subdirs.length
    } catch {}
  })
  
  return { totalRules, totalCategories }
}

const stats = getRulesStats()

// 获取文档侧边栏
function getDocsSidebar(labelGettingStarted, labelGuide, labelReference) {
  return [
    {
      text: labelGettingStarted,
      collapsed: false,
      items: [
        { text: 'Quick Start', link: '/getting-started' },
        { text: 'Installation', link: '/installation-guide' },
      ]
    },
    {
      text: labelGuide,
      collapsed: false,
      items: [
        { text: 'Best Practices', link: '/best-practices' },
        { text: 'Troubleshooting', link: '/troubleshooting' },
      ]
    },
    {
      text: labelReference,
      collapsed: false,
      items: [
        { text: 'API Reference', link: '/api-reference' },
      ]
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基础配置
  title: 'Awesome Cursor Rules',
  description: '为中文开发者打造的 Cursor AI 编程规则集合 | A curated collection of Cursor AI coding rules',
  
  // 语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { 
            text: '文档',
            items: [
              { text: '快速开始', link: '/zh/getting-started' },
              { text: '安装指南', link: '/zh/installation-guide' },
              { text: '最佳实践', link: '/zh/best-practices' },
              { text: '故障排除', link: '/zh/troubleshooting' },
              { text: 'API 参考', link: '/zh/api-reference' },
            ]
          },
          { 
            text: `📦 ${stats.totalRules}+ 规则`,
            items: [
              { text: '前端开发', link: '/zh/rules/frontend' },
              { text: '后端开发', link: '/zh/rules/backend' },
              { text: '移动开发', link: '/zh/rules/mobile' },
              { text: 'AI/数据', link: '/zh/rules/ai' },
              { text: '查看全部 →', link: '/zh/rules/' },
            ]
          },
          { 
            text: '更新日志',
            link: '/changelog-zh'
          },
        ],
        sidebar: {
          '/zh/': [
            {
              text: '🚀 快速开始',
              collapsed: false,
              items: [
                { text: '简介', link: '/zh/' },
                { text: '快速开始', link: '/zh/getting-started' },
                { text: '安装指南', link: '/zh/installation-guide' },
              ]
            },
            {
              text: '📖 使用指南',
              collapsed: false,
              items: [
                { text: '最佳实践', link: '/zh/best-practices' },
                { text: '故障排除', link: '/zh/troubleshooting' },
              ]
            },
            {
              text: '📚 参考文档',
              collapsed: false,
              items: [
                { text: 'API 参考', link: '/zh/api-reference' },
                { text: '更新日志', link: '/changelog-zh' },
              ]
            },
            {
              text: '📂 规则集',
              collapsed: false,
              items: [
                { text: '全部规则', link: '/zh/rules/' },
                { text: '前端开发', link: '/zh/rules/frontend' },
                { text: '后端开发', link: '/zh/rules/backend' },
                { text: '移动开发', link: '/zh/rules/mobile' },
                { text: 'AI与数据', link: '/zh/rules/ai' },
              ]
            },
          ]
        },
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
        langMenuLabel: '多语言',
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { 
            text: 'Docs',
            items: [
              { text: 'Quick Start', link: '/en/getting-started' },
              { text: 'Installation', link: '/en/installation-guide' },
              { text: 'Best Practices', link: '/en/best-practices' },
              { text: 'Troubleshooting', link: '/en/troubleshooting' },
              { text: 'API Reference', link: '/en/api-reference' },
            ]
          },
          { 
            text: `📦 ${stats.totalRules}+ Rules`,
            items: [
              { text: 'Frontend', link: '/en/rules/frontend' },
              { text: 'Backend', link: '/en/rules/backend' },
              { text: 'Mobile', link: '/en/rules/mobile' },
              { text: 'AI/Data', link: '/en/rules/ai' },
              { text: 'View All →', link: '/en/rules/' },
            ]
          },
          { 
            text: 'Changelog',
            link: '/changelog'
          },
        ],
        sidebar: {
          '/en/': [
            {
              text: '🚀 Getting Started',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/en/' },
                { text: 'Quick Start', link: '/en/getting-started' },
                { text: 'Installation', link: '/en/installation-guide' },
              ]
            },
            {
              text: '📖 User Guide',
              collapsed: false,
              items: [
                { text: 'Best Practices', link: '/en/best-practices' },
                { text: 'Troubleshooting', link: '/en/troubleshooting' },
              ]
            },
            {
              text: '📚 Reference',
              collapsed: false,
              items: [
                { text: 'API Reference', link: '/en/api-reference' },
                { text: 'Changelog', link: '/changelog' },
              ]
            },
            {
              text: '📂 Rules',
              collapsed: false,
              items: [
                { text: 'All Rules', link: '/en/rules/' },
                { text: 'Frontend', link: '/en/rules/frontend' },
                { text: 'Backend', link: '/en/rules/backend' },
                { text: 'Mobile', link: '/en/rules/mobile' },
                { text: 'AI & Data', link: '/en/rules/ai' },
              ]
            },
          ]
        },
        footer: {
          message: 'A curated collection of Cursor AI coding rules for developers',
          copyright: 'Copyright © 2024-2025 Awesome Cursor Rules Contributors | MIT License'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
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
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Languages',
      }
    }
  },

  // 共享主题配置
  themeConfig: {
    // 搜索配置 - 本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LessUp/awesome-cursorrules-zh' },
    ],

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/LessUp/awesome-cursorrules-zh/edit/master/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 网站图标
    logo: '/logo.svg',
    
    // 站点标题
    siteTitle: false,
  },

  // 头部配置
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'Awesome Cursor Rules' }],
    ['meta', { name: 'og:image', content: 'https://awesome-cursorrules-zh.js.org/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://awesome-cursorrules-zh.js.org/og-image.png' }],
  ],

  // Markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    config: (md) => {
      // 自定义 markdown 插件
    }
  },

  // Vite 配置
  vite: {
    resolve: {
      alias: {
        '@': resolve('./'),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 1000,
    }
  },

  // 最后更新时间
  lastUpdated: true,
  
  // 清理 URL
  cleanUrls: true,
  
  // 忽略的死链接
  ignoreDeadLinks: [
    /^https?:\/\//,
    /^\//,
  ],

  // 源目录
  srcDir: '.',
  
  // 排除的文件
  srcExclude: ['**/rules/**/.cursorrules', '**/node_modules/**', '**/.git/**'],
  
  // 缓存目录
  cacheDir: './.vitepress/cache',
  
  // 输出目录
  outDir: './.vitepress/dist',
  
  // 临时目录
  tempDir: './.vitepress/.temp',
  
  // 资产目录
  assetsDir: 'assets',
  
  // 是否使用 Git 日志获取最后更新时间
  useGit: true,
})
