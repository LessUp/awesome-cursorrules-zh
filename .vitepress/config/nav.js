export function createNavConfig({ i18n, prefix }) {
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
        ...rules.items.map(item => ({
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
        items: [
          { text: '前端开发', link: 'rules/frontend' },
          { text: '后端开发', link: 'rules/backend' },
          { text: '移动开发', link: 'rules/mobile' },
          { text: 'AI/数据', link: 'rules/ai' }
        ],
        viewAll: '查看全部 →'
      }
    }
  },
  prefix: ''
});

export const navEn = navZh;
