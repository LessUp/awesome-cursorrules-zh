import { rulesSidebarZh, rulesSidebarEn } from './generated-sidebar.js';

export function createSidebarConfig({ i18n, prefix, rulesItems }) {
  const { gettingStarted, userGuide, reference, rules } = i18n.sidebar;

  return [
    {
      text: gettingStarted.icon + ' ' + gettingStarted.title,
      collapsed: false,
      items: gettingStarted.items.map(item => ({
        text: item.text,
        link: `${prefix}/${item.link}`
      }))
    },
    {
      text: userGuide.icon + ' ' + userGuide.title,
      collapsed: false,
      items: userGuide.items.map(item => ({
        text: item.text,
        link: `${prefix}/${item.link}`
      }))
    },
    {
      text: reference.icon + ' ' + reference.title,
      collapsed: false,
      items: reference.items.map(item => ({
        text: item.text,
        link: item.link || `${prefix}/${item.linkPath}`
      }))
    },
    {
      text: rules.icon + ' ' + rules.title,
      collapsed: false,
      items: rulesItems.map(item => ({
        text: item.text,
        link: `${prefix}/${item.link}`
      }))
    }
  ];
}

export const sidebarZh = {
  '/': createSidebarConfig({
    i18n: {
      sidebar: {
        gettingStarted: {
          icon: '🚀',
          title: '快速开始',
          items: [
            { text: '简介', link: '' },
            { text: '快速开始', link: 'getting-started' },
            { text: '安装指南', link: 'installation-guide' }
          ]
        },
        userGuide: {
          icon: '📖',
          title: '使用指南',
          items: [
            { text: '最佳实践', link: 'best-practices' },
            { text: '故障排除', link: 'troubleshooting' }
          ]
        },
        reference: {
          icon: '📚',
          title: '参考文档',
          items: [
            { text: 'API 参考', link: 'api-reference' }
          ]
        },
        rules: {
          icon: '📂',
          title: '规则集'
        }
      }
    },
    prefix: '',
    rulesItems: rulesSidebarZh
  })
};

export const sidebarEn = {
  '/en/': createSidebarConfig({
    i18n: {
      sidebar: {
        gettingStarted: {
          icon: '🚀',
          title: 'Getting Started',
          items: [
            { text: 'Introduction', link: '' },
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'Installation Guide', link: 'installation-guide' }
          ]
        },
        userGuide: {
          icon: '📖',
          title: 'User Guide',
          items: [
            { text: 'Best Practices', link: 'best-practices' },
            { text: 'Troubleshooting', link: 'troubleshooting' }
          ]
        },
        reference: {
          icon: '📚',
          title: 'Reference',
          items: [
            { text: 'API Reference', link: 'api-reference' }
          ]
        },
        rules: {
          icon: '📂',
          title: 'Rules'
        }
      }
    },
    prefix: '/en',
    rulesItems: rulesSidebarEn
  })
};
