import { rulesNavZh, rulesNavEn } from './generated-nav.js';

export function createNavConfig({ i18n, prefix, rulesNav }) {
  const { home, docs, rules } = i18n.nav;

  return [
    { text: home, link: `${prefix}/` },
    {
      text: docs.title,
      items: docs.items.map(item => ({
        text: item.text,
        link: `${prefix}/${item.link}`
      }))
    },
    {
      text: rules.title,
      items: [
        ...rulesNav.map(item => ({
          text: item.text,
          link: `${prefix}/${item.link}`
        })),
        { text: rules.viewAll, link: `${prefix}/rules/` }
      ]
    }
  ];
}

export const navZh = createNavConfig({
  i18n: {
    nav: {
      home: '首页',
      docs: {
        title: '文档',
        items: [
          { text: '快速开始', link: 'getting-started' },
          { text: '安装指南', link: 'installation-guide' },
          { text: '最佳实践', link: 'best-practices' },
          { text: '故障排除', link: 'troubleshooting' },
          { text: 'API 参考', link: 'api-reference' }
        ]
      },
      rules: {
        title: '规则库',
        viewAll: '查看全部 →'
      }
    }
  },
  prefix: '',
  rulesNav: rulesNavZh
});

export const navEn = createNavConfig({
  i18n: {
    nav: {
      home: 'Home',
      docs: {
        title: 'Docs',
        items: [
          { text: 'Getting Started', link: 'getting-started' },
          { text: 'Installation Guide', link: 'installation-guide' },
          { text: 'Best Practices', link: 'best-practices' },
          { text: 'Troubleshooting', link: 'troubleshooting' },
          { text: 'API Reference', link: 'api-reference' }
        ]
      },
      rules: {
        title: 'Rules',
        viewAll: 'View All →'
      }
    }
  },
  prefix: '/en',
  rulesNav: rulesNavEn
});
