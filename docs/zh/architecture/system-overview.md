# 系统总览

`Awesome Cursor Rules Academy` 的核心不是视觉包装，而是一条完整的内容与发布链路。

<ArchitectureDiagram />

## 四层系统架构

从规则资产到同步脚本，再到主题组件与 GitHub Pages 发布面，所有层都服务于同一条解释链路。

### 1. 资产层 (Asset Layer)

**职责**：规则文件是系统权威源，站点指标与规则索引都应从这里派生。

**关键文件**：
- `rules/` - 规则资产目录
- `.cursorrules` - 规则文件格式

**设计原则**：
- 单一数据源：所有计数和领域覆盖从规则资产自动提取
- 避免首页指标与真实仓库脱节

### 2. 同步层 (Sync Layer)

**职责**：docs 构建前自动刷新规则总数、领域数和高频类别。

**关键文件**：
- `scripts/sync-site-facts.mjs` - 同步脚本
- `.vitepress/site/facts.ts` - 站点事实

**设计原则**：
- 构建前同步：`npm run sync && vitepress build`
- 配置中的描述信息具备来源

### 3. 叙事层 (Narrative Layer)

**职责**：通过明确的目录树，让读者先理解为什么，再决定如何深入。

**关键目录**：
- `introduction/` - 项目导读
- `academy/` - 学院路径
- `architecture/` - 架构设计
- `guides/` - 实施指南
- `research/` - 研究引用

**设计原则**：
- 白皮书式叙事
- 角色导向的阅读路径

### 4. 发布层 (Publishing Layer)

**职责**：主题层提供双主题安全图示、研究引用面板和白皮书型首页。

**关键组件**：
- `WhitepaperHero` - 承担立论和阅读引导
- `NarrativeRail` - 承担阅读顺序
- `SystemShowcase` - 承担结构解释
- `CurriculumDeck` - 承担角色路径
- `CitationLedger` - 承担研究引用与学术背书

## 关键工程决策

### 构建前同步事实

参考 kimi-cli docs 的同步模式，站点在 `vitepress dev` 与 `vitepress build` 之前运行同步脚本，把仓库中的规则资产转写成可消费的站点事实。

这样做的好处是：

- 首页数字不会与实际仓库脱节
- 配置中的描述信息具备来源
- 未来新增规则时，不需要手动维护多个页面

### 主题组件服务内容，而不是反过来

新主题不再以"卡片堆叠"作为默认表达，而是改用：

- **WhitepaperHero**：承担立论和阅读引导
- **NarrativeRail**：承担阅读顺序
- **SystemShowcase**：承担结构解释
- **CurriculumDeck**：承担角色路径
- **CitationLedger**：承担研究引用与学术背书

### CSS 架构现代化

采用 CSS 层叠层（@layer）系统：

```
reset → tokens → fonts → base → layout → components → utilities → overrides
```

优势：
- 样式优先级可预测
- 消除 `!important` 依赖
- 组件样式解耦

### 深浅色模式完美适配

采用图形专用令牌系统：

- 深色模式下自动增加亮度
- 发光滤镜增强可见性
- 所有 SVG 在双主题下清晰可见

## 推荐继续阅读

1. [站点蓝图](./blueprint)
2. [团队接入](../guides/team-onboarding)
3. [研究引用](../research/references)
