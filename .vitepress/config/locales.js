/**
 * 本地化配置
 * 包含主题本地化文本和搜索配置
 */

/**
 * 中文主题配置
 */
export const localeZh = {
  label: '简体中文',
  lang: 'zh-CN',
  themeConfig: {
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
  }
};

/**
 * 英文主题配置
 */
export const localeEn = {
  label: 'English',
  lang: 'en-US',
  themeConfig: {
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
    langMenuLabel: 'Languages'
  }
};

/**
 * 搜索本地化配置
 */
export const searchLocales = {
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
};
