# 系统总览

这个站点的目标不是“把规则列出来”，而是把仓库本身重构成一份可以被高级开发者审阅的系统架构白皮书。

<TopologyMap
  eyebrow="Five-Layer System"
  title="五层系统：让仓库、文档与 GitHub Pages 形成同一套工程结构"
  summary="从规则资产到发布界面，每一层都只承担一个清晰职责，并通过站点快照和统一视觉语言保持一致。"
  :layers="[
    { name: '资产层', detail: 'rules/ 作为唯一权威源，定义规则资产、分类范围与证据边界。' },
    { name: '快照层', detail: 'sync-site-facts.mjs 将仓库状态转写为 categoryDistribution、coverageBuckets 与 qualitySignals。' },
    { name: '信息架构层', detail: '导读、系统架构、算法机制、性能白皮书、参考与演进、规则证据构成稳定阅读路径。' },
    { name: '呈现层', detail: 'SignalGrid、TopologyMap、PipelineCanvas、DossierMatrix 负责指标、图示与引文矩阵。' },
    { name: '发布层', detail: 'VitePress 与 GitHub Pages 将结构、方法、性能和发布证据汇总成统一站点。' }
  ]"
/>

## 五层系统

### 1. 资产层

- **职责**：维护规则资产与分类权威性。
- **关键位置**：`rules/`
- **判断标准**：任何指标、引用、规则证据都必须可回溯到仓库真实内容。

### 2. 快照层

- **职责**：把仓库变成页面可消费的结构化数据。
- **关键位置**：`docs/scripts/sync-site-facts.mjs`、`docs/.vitepress/site/facts.ts`
- **核心价值**：快照层让首页、性能页、图示和引文矩阵共享同一份数据基础，而不是各自手写。

### 3. 信息架构层

- **职责**：决定高级开发者如何最短路径理解项目。
- **关键位置**：`docs/.vitepress/site/atlas.ts`
- **核心价值**：先立论，再解释系统，再说明规则编排算法，最后再展示规则证据和参考资料。

### 4. 呈现层

- **职责**：把抽象结构翻译成白皮书级页面和图示。
- **关键位置**：`docs/.vitepress/theme/`
- **核心价值**：图示颜色、连线、背景、文本都由 token 驱动，彻底修复深浅色模式下 SVG 看不清的问题。

### 5. 发布层

- **职责**：统一输出站点并对外提供稳定阅读体验。
- **关键位置**：`docs/.vitepress/config.ts`
- **核心价值**：发布层不创造内容，只负责把结构、方法、性能与发布证据可靠地送到 GitHub Pages。

## 关键工程决策

### 规则资产优先于页面文案

`rules/` 不再只是材料仓库，而是整站所有论点的上游。规则总数、分类覆盖、密度桶和主导领域都从资产派生，避免页面文案与仓库脱节。

### 快照层优先于静态指标

我们没有继续堆叠手写数字，而是把 `categoryDistribution`、`coverageBuckets`、`qualitySignals` 和 `timelineSignals` 放进快照层。这让白皮书、算法页和性能页可以共享同一套事实基础。

### 规则编排算法优先于目录展示

传统资源站往往只做分类索引；这里则明确解释规则编排算法如何把离散规则资产变成分类、组合模式、升级路径和发布证据，使“方法”本身成为项目亮点。

### 发布证据优先于装饰

视觉层的目标不是更花，而是更可审阅。TopologyMap 和 PipelineCanvas 不是装饰组件，而是用于公开解释系统边界、依赖和发布证据的结构图。

## 推荐继续阅读

1. [算法机制总览](../algorithms/overview)
2. [性能白皮书](../whitepaper/performance)
3. [参考与演进](../research/references)
