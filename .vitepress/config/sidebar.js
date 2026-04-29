export function createSidebarConfig({ i18n, prefix }) {
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
      items: rules.items.map(item => ({
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
          title: '规则集',
          items: [
            { text: '全部规则', link: 'rules/' },
            { text: '前端开发', link: 'rules/frontend' },
            { text: '后端开发', link: 'rules/backend' },
            { text: '移动开发', link: 'rules/mobile' },
            { text: 'AI与数据', link: 'rules/ai' }
          ]
        }
      }
    },
    prefix: ''
  })
};

export const sidebarEn = sidebarZh;
