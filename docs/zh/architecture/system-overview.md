# 系统总览

`Awesome Cursor Rules Academy` 的核心不是视觉包装，而是一条完整的内容与发布链路。

<SystemShowcase
  title="四层系统，把仓库事实变成白皮书级展示"
  summary="从规则资产到同步脚本，再到主题组件与 GitHub Pages 发布面，所有层都服务于同一条解释链路。"
  :nodes="[
    {
      eyebrow: 'Asset Layer',
      title: '规则资产与分类索引',
      detail: '规则文件是系统权威源，站点指标与规则索引都应从这里派生。'
    },
    {
      eyebrow: 'Sync Layer',
      title: '构建前同步站点事实',
      detail: 'docs 构建前自动刷新规则总数、领域数和高频类别，确保首页与配置不漂移。'
    },
    {
      eyebrow: 'Narrative Layer',
      title: '导读、学院、架构、指南',
      detail: '通过明确的目录树，让读者先理解为什么，再决定如何深入。'
    },
    {
      eyebrow: 'Publishing Layer',
      title: '主题组件与 GitHub Pages',
      detail: '主题层提供双主题安全图示、研究引用面板和白皮书型首页，最后由 GitHub Pages 对外发布。'
    }
  ]"
/>

## 关键工程决策

### 构建前同步事实

参考 kimi-cli docs 的同步模式，站点在 `vitepress dev` 与 `vitepress build` 之前运行同步脚本，把仓库中的规则资产转写成可消费的站点事实。

这样做的好处是：

- 首页数字不会与实际仓库脱节
- 配置中的描述信息具备来源
- 未来新增规则时，不需要手动维护多个页面

### 主题组件服务内容，而不是反过来

新主题不再以“卡片堆叠”作为默认表达，而是改用：

- **WhitepaperHero**：承担立论和阅读引导
- **NarrativeRail**：承担阅读顺序
- **SystemShowcase**：承担结构解释
- **CurriculumDeck**：承担角色路径
- **CitationLedger**：承担研究引用与学术背书

## 推荐继续阅读

1. [站点蓝图](./blueprint)
2. [团队接入](../guides/team-onboarding)
3. [研究引用](../research/references)
