/**
 * 共享导航配置
 * 提取中英文导航的共享结构
 */

/**
 * 导航项配置
 * @typedef {Object} NavItem
 * @property {string} text - 显示文本
 * @property {string} [link] - 链接路径
 * @property {NavItem[]} [items] - 子菜单项
 */

/**
 * 创建导航配置
 * @param {Object} options - 配置选项
 * @param {Object} options.i18n - 国际化文本
 * @param {string} options.prefix - 链接前缀
 * @returns {NavItem[]}
 */
export function createNavConfig({ i18n, prefix }) {
  const { home, docs, rules, changelog } = i18n.nav;

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
    },
    { text: changelog.text, link: changelog.link }
  ];
}

/**
 * 中文导航配置
 */
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
      },
      changelog: { text: '更新日志', link: '/changelog-zh' }
    }
  },
  prefix: '/zh'
});

/**
 * 英文导航配置
 */
export const navEn = createNavConfig({
  i18n: {
    nav: {
      home: 'Home',
      docs: {
        title: 'Docs',
        items: [
          { text: 'Quick Start', link: 'getting-started' },
          { text: 'Installation', link: 'installation-guide' },
          { text: 'Best Practices', link: 'best-practices' },
          { text: 'Troubleshooting', link: 'troubleshooting' },
          { text: 'API Reference', link: 'api-reference' }
        ]
      },
      rules: {
        title: 'Rules',
        items: [
          { text: 'Frontend', link: 'rules/frontend' },
          { text: 'Backend', link: 'rules/backend' },
          { text: 'Mobile', link: 'rules/mobile' },
          { text: 'AI/Data', link: 'rules/ai' }
        ],
        viewAll: 'View All →'
      },
      changelog: { text: 'Changelog', link: '/changelog' }
    }
  },
  prefix: '/en'
});
