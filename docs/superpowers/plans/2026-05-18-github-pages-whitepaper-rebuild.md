# GitHub Pages Whitepaper Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the VitePress GitHub Pages site into a research-grade whitepaper portal with stronger IA, richer generated facts, new architecture/algorithm/performance/reference content, and reliable light/dark figure rendering.

**Architecture:** Expand the generated docs data first so navigation, diagrams, and whitepaper sections can share a single authoritative snapshot of the repository. Then rewire the IA, introduce a new set of research-facing theme components, and rewrite the key Chinese and English pages around the new “introduction → architecture → algorithms → performance → references → evidence” reading path.

**Tech Stack:** Node.js, VitePress, Vue 3 SFCs, TypeScript, Markdown, CSS cascade layers, node:test

---

## File Structure

- Modify: `docs/scripts/sync-site-facts.mjs` — generate richer repository snapshot data for navigation, diagrams, and dossier sections.
- Modify: `docs/.vitepress/site/facts.ts` — checked-in generated output consumed by the site and tests.
- Modify: `docs/.vitepress/site/atlas.ts` — replace current top-level IA with the new whitepaper-oriented reading path.
- Modify: `docs/.vitepress/config.ts` — align site copy, descriptions, and theme metadata with the new positioning if navigation or page labels change.
- Modify: `docs/.vitepress/theme/index.ts` — register the new research-facing presentation components.
- Modify: `docs/.vitepress/theme/style.css` — tighten tokens, layout, and light/dark figure behavior.
- Modify: `docs/.vitepress/theme/styles/components.css` — style new whitepaper cards, rails, evidence panels, and dossier sections.
- Modify: `docs/.vitepress/theme/styles/figures.css` — centralize diagram tokens and ensure high-contrast light/dark rendering.
- Create: `docs/.vitepress/theme/components/SignalGrid.vue` — render the first-screen thesis metrics and coverage board.
- Create: `docs/.vitepress/theme/components/TopologyMap.vue` — render the new system topology diagram.
- Create: `docs/.vitepress/theme/components/PipelineCanvas.vue` — render the rule-orchestration / algorithm pipeline.
- Create: `docs/.vitepress/theme/components/DossierMatrix.vue` — render references, competitors, and evolution signals in a research-friendly format.
- Modify: `docs/zh/index.md`, `docs/en/index.md` — turn the homepage into a true whitepaper landing page.
- Modify: `docs/zh/architecture/system-overview.md`, `docs/en/architecture/system-overview.md` — deepen the system architecture story.
- Create: `docs/zh/algorithms/overview.md`, `docs/en/algorithms/overview.md` — add the algorithm mechanism chapter.
- Modify: `docs/zh/whitepaper/performance.md`, `docs/en/whitepaper/performance.md` — rewrite around performance, maintainability, and reliability.
- Modify: `docs/zh/research/references.md`, `docs/en/research/references.md` — upgrade the scholarly references, competitor analysis, and evolution sections.
- Modify: `tests/site-ia.test.mjs` — codify the new IA, data snapshot, theme component registration, and critical content assertions.

### Task 1: Expand the generated docs facts snapshot

**Files:**
- Modify: `docs/scripts/sync-site-facts.mjs`
- Modify: `docs/.vitepress/site/facts.ts`
- Test: `tests/site-ia.test.mjs`

- [ ] **Step 1: Write the failing data-shape test**

```js
test('generated site facts include distribution, quality, and timeline signals for the whitepaper shell', () => {
  const facts = read('docs/.vitepress/site/facts.ts')

  for (const field of ['categoryDistribution', 'coverageBuckets', 'qualitySignals', 'timelineSignals']) {
    assert.match(facts, new RegExp(`"${field}"`))
  }
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "generated site facts include distribution"`
Expected: FAIL because the generated file only contains `ruleCount`, `domainCount`, `localeCount`, and `topDomains`.

- [ ] **Step 3: Upgrade the generator**

```js
const coverageBuckets = countsByCategory.map(({ category, count }) => ({
  category,
  count,
  ratio: Number((count / ruleFiles.length).toFixed(4)),
}))

const qualitySignals = {
  dominantCategory: countsByCategory[0]?.category ?? null,
  dominantCategoryCount: countsByCategory[0]?.count ?? 0,
  longTailCategoryCount: countsByCategory.filter(({ count }) => count <= 2).length,
}

const timelineSignals = [
  { phase: 'Asset Curation', focus: 'Normalize the rules corpus into a stable taxonomy.' },
  { phase: 'Knowledge Framing', focus: 'Translate asset counts into architecture and algorithm narratives.' },
  { phase: 'Publication Surface', focus: 'Render evidence, references, and diagrams through VitePress.' },
]

const siteFacts = {
  ruleCount: ruleFiles.length,
  domainCount: categories.length,
  localeCount: 2,
  topDomains: countsByCategory.slice(0, 6),
  categoryDistribution: coverageBuckets,
  coverageBuckets: [
    { label: 'High-density domains', count: countsByCategory.filter(({ count }) => count >= 8).length },
    { label: 'Mid-density domains', count: countsByCategory.filter(({ count }) => count >= 4 && count < 8).length },
    { label: 'Long-tail domains', count: countsByCategory.filter(({ count }) => count < 4).length },
  ],
  qualitySignals,
  timelineSignals,
}
```

- [ ] **Step 4: Regenerate the snapshot**

Run: `npm --prefix docs run sync`
Expected: PASS with `Synced site facts to .vitepress/site/facts.ts`.

- [ ] **Step 5: Run the focused test**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "generated site facts include distribution"`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add docs/scripts/sync-site-facts.mjs docs/.vitepress/site/facts.ts tests/site-ia.test.mjs
git commit -m "feat: expand whitepaper site facts"
```

### Task 2: Rebuild the information architecture around the new reading path

**Files:**
- Modify: `docs/.vitepress/site/atlas.ts`
- Modify: `docs/.vitepress/config.ts`
- Test: `tests/site-ia.test.mjs`

- [ ] **Step 1: Write the failing IA test**

```js
test('atlas exposes introduction, architecture, algorithms, performance, references, and evidence for both locales', () => {
  const atlas = read('docs/.vitepress/site/atlas.ts')

  for (const label of ['导读', '系统架构', '算法机制', '性能白皮书', '参考与演进', '规则证据']) {
    assert.match(atlas, new RegExp(`text: '${label}'`))
  }

  for (const route of ['/zh/algorithms/overview', '/en/algorithms/overview', '/zh/whitepaper/performance', '/en/research/references']) {
    assert.match(atlas, new RegExp(route.replaceAll('/', '\\/')))
  }
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "atlas exposes introduction"`
Expected: FAIL because the current atlas still uses `学院路径`, `架构设计`, and `研究引用` as the old top-level shell.

- [ ] **Step 3: Rewrite the atlas**

```ts
export const zhNav = [
  { text: '导读', link: '/zh/introduction/mission', activeMatch: '/zh/introduction/' },
  { text: '系统架构', link: '/zh/architecture/system-overview', activeMatch: '/zh/architecture/' },
  { text: '算法机制', link: '/zh/algorithms/overview', activeMatch: '/zh/algorithms/' },
  { text: '性能白皮书', link: '/zh/whitepaper/performance', activeMatch: '/zh/whitepaper/' },
  { text: '参考与演进', link: '/zh/research/references', activeMatch: '/zh/research/|/zh/resources/' },
  { text: '规则证据', link: '/zh/rules/', activeMatch: '/zh/rules/' },
]
```

- [ ] **Step 4: Align the site descriptions**

```ts
description: `面向高级开发者的系统架构白皮书、规则编排算法说明与研究型证据库，覆盖 ${siteFacts.ruleCount}+ 条规则资产与 ${siteFacts.domainCount}+ 个技术领域`
```

- [ ] **Step 5: Run the focused test**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "atlas exposes introduction"`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add docs/.vitepress/site/atlas.ts docs/.vitepress/config.ts tests/site-ia.test.mjs
git commit -m "feat: rebuild docs information architecture"
```

### Task 3: Add the new whitepaper presentation components

**Files:**
- Create: `docs/.vitepress/theme/components/SignalGrid.vue`
- Create: `docs/.vitepress/theme/components/TopologyMap.vue`
- Create: `docs/.vitepress/theme/components/PipelineCanvas.vue`
- Create: `docs/.vitepress/theme/components/DossierMatrix.vue`
- Modify: `docs/.vitepress/theme/index.ts`
- Modify: `docs/.vitepress/theme/styles/components.css`
- Modify: `docs/.vitepress/theme/styles/figures.css`
- Modify: `docs/.vitepress/theme/style.css`
- Test: `tests/site-ia.test.mjs`

- [ ] **Step 1: Write the failing component registration test**

```js
test('theme registers the new research-grade presentation components', () => {
  const themeIndex = read('docs/.vitepress/theme/index.ts')

  for (const component of ['SignalGrid', 'TopologyMap', 'PipelineCanvas', 'DossierMatrix']) {
    assert.match(themeIndex, new RegExp(`app\\.component\\('${component}'`))
  }
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "theme registers the new research-grade presentation components"`
Expected: FAIL because the new components do not exist or are not registered.

- [ ] **Step 3: Implement the diagram and dossier components**

```vue
<script setup lang="ts">
defineProps<{
  title: string
  items: Array<{ label: string; value: string; detail: string }>
}>()
</script>

<template>
  <section class="signal-grid">
    <header class="signal-grid__header">
      <p class="signal-grid__eyebrow">Research Signals</p>
      <h2>{{ title }}</h2>
    </header>
    <div class="signal-grid__items">
      <article v-for="item in items" :key="item.label" class="signal-grid__card">
        <span class="signal-grid__label">{{ item.label }}</span>
        <strong class="signal-grid__value">{{ item.value }}</strong>
        <p>{{ item.detail }}</p>
      </article>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Register the new components**

```ts
import SignalGrid from './components/SignalGrid.vue'
import TopologyMap from './components/TopologyMap.vue'
import PipelineCanvas from './components/PipelineCanvas.vue'
import DossierMatrix from './components/DossierMatrix.vue'

app.component('SignalGrid', SignalGrid)
app.component('TopologyMap', TopologyMap)
app.component('PipelineCanvas', PipelineCanvas)
app.component('DossierMatrix', DossierMatrix)
```

- [ ] **Step 5: Centralize figure contrast tokens**

```css
:root {
  --figure-surface: color-mix(in srgb, var(--surface-1) 88%, transparent);
  --figure-border: color-mix(in srgb, var(--figure-stroke-primary) 28%, var(--vp-c-border));
  --figure-ink-strong: var(--vp-c-text-1);
  --figure-ink-soft: var(--vp-c-text-2);
}

.dark {
  --figure-surface: color-mix(in srgb, var(--surface-1) 72%, transparent);
  --figure-border: color-mix(in srgb, var(--figure-stroke-primary) 36%, var(--vp-c-border));
}
```

- [ ] **Step 6: Run the focused test**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "theme registers the new research-grade presentation components"`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add docs/.vitepress/theme/index.ts docs/.vitepress/theme/style.css docs/.vitepress/theme/styles/components.css docs/.vitepress/theme/styles/figures.css docs/.vitepress/theme/components/SignalGrid.vue docs/.vitepress/theme/components/TopologyMap.vue docs/.vitepress/theme/components/PipelineCanvas.vue docs/.vitepress/theme/components/DossierMatrix.vue tests/site-ia.test.mjs
git commit -m "feat: add whitepaper presentation components"
```

### Task 4: Rewrite the homepages as thesis-driven whitepaper landings

**Files:**
- Modify: `docs/zh/index.md`
- Modify: `docs/en/index.md`
- Test: `tests/site-ia.test.mjs`

- [ ] **Step 1: Write the failing homepage content test**

```js
test('homepages present the new thesis, topology, pipeline, and dossier sections', () => {
  const zhHomepage = read('docs/zh/index.md')
  const enHomepage = read('docs/en/index.md')

  for (const section of ['SignalGrid', 'TopologyMap', 'PipelineCanvas', 'DossierMatrix']) {
    assert.match(zhHomepage, new RegExp(section))
    assert.match(enHomepage, new RegExp(section))
  }
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "homepages present the new thesis"`
Expected: FAIL because the current homepage still uses the previous academy shell.

- [ ] **Step 3: Rewrite the Chinese homepage**

```md
<SignalGrid
  title="用证据而不是口号定义仓库质量"
  :items="[
    { label: '规则资产', value: `${siteFacts.ruleCount}+`, detail: '作为权威资产源驱动整站叙事与图示。' },
    { label: '覆盖领域', value: `${siteFacts.domainCount}+`, detail: '形成足够完整的长尾技术知识面。' },
    { label: '演进阶段', value: `${siteFacts.timelineSignals.length}`, detail: '把策展、编排、发布拆成可审阅阶段。' }
  ]"
/>
```

- [ ] **Step 4: Mirror the English homepage with tighter copy**

```md
<SignalGrid
  title="A rules corpus presented as an engineering thesis"
  :items="[
    { label: 'Rule assets', value: `${siteFacts.ruleCount}+`, detail: 'The repository remains the canonical source of truth.' },
    { label: 'Domains', value: `${siteFacts.domainCount}+`, detail: 'The corpus spans a meaningful technical breadth.' },
    { label: 'Phases', value: `${siteFacts.timelineSignals.length}`, detail: 'Curation, orchestration, and publication stay explicit.' }
  ]"
/>
```

- [ ] **Step 5: Run the focused test**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "homepages present the new thesis"`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add docs/zh/index.md docs/en/index.md tests/site-ia.test.mjs
git commit -m "feat: rewrite whitepaper homepages"
```

### Task 5: Deepen the architecture and algorithm chapters

**Files:**
- Modify: `docs/zh/architecture/system-overview.md`
- Modify: `docs/en/architecture/system-overview.md`
- Create: `docs/zh/algorithms/overview.md`
- Create: `docs/en/algorithms/overview.md`
- Test: `tests/site-ia.test.mjs`

- [ ] **Step 1: Write the failing chapter-existence test**

```js
test('architecture and algorithm chapters exist for both locales', () => {
  for (const file of [
    'docs/zh/algorithms/overview.md',
    'docs/en/algorithms/overview.md',
    'docs/zh/architecture/system-overview.md',
    'docs/en/architecture/system-overview.md',
  ]) {
    assert.equal(exists(file), true, `${file} should exist`)
  }
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "architecture and algorithm chapters exist"`
Expected: FAIL because the algorithms chapter does not exist yet.

- [ ] **Step 3: Write the algorithm mechanism chapter**

```md
# 规则编排算法总览

本章解释本项目如何把离散的 `.cursorrules` 资产转化为可检索、可组合、可验证的工程知识系统。

## 四段式流程

1. 规则发现：从 `rules/` 递归扫描权威资产。
2. 分类映射：把资产映射到领域分类与覆盖桶。
3. 组合决策：根据场景、技术栈与复杂度将规则组织为升级路径。
4. 发布证据：把结果转换为导航、图示、性能页与引用矩阵。

<PipelineCanvas />
```

- [ ] **Step 4: Rewrite the architecture overview around the new topology**

```md
## 五层系统

1. 资产层：`rules/` 作为唯一事实源。
2. 生成层：`sync-site-facts.mjs` 把仓库状态转换为页面可用快照。
3. 架构层：`atlas.ts` 决定读者的进入顺序与心智模型。
4. 呈现层：主题组件负责图示、证据板与引用矩阵。
5. 发布层：VitePress + GitHub Pages 输出最终白皮书界面。

<TopologyMap />
```

- [ ] **Step 5: Run the focused test**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "architecture and algorithm chapters exist"`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add docs/zh/architecture/system-overview.md docs/en/architecture/system-overview.md docs/zh/algorithms/overview.md docs/en/algorithms/overview.md tests/site-ia.test.mjs
git commit -m "feat: add architecture and algorithm chapters"
```

### Task 6: Rebuild the performance and references dossier

**Files:**
- Modify: `docs/zh/whitepaper/performance.md`
- Modify: `docs/en/whitepaper/performance.md`
- Modify: `docs/zh/research/references.md`
- Modify: `docs/en/research/references.md`
- Modify: `docs/zh/resources/extended-reading.md`
- Modify: `docs/en/resources/extended-reading.md`
- Test: `tests/site-ia.test.mjs`

- [ ] **Step 1: Write the failing dossier test**

```js
test('performance and reference pages describe maintainability, references, competitors, and evolution', () => {
  const performance = read('docs/zh/whitepaper/performance.md')
  const references = read('docs/zh/research/references.md')

  for (const phrase of ['维护性', '生成链路', '竞品', '演进问题']) {
    assert.match(`${performance}\n${references}`, new RegExp(phrase))
  }
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "performance and reference pages describe maintainability"`
Expected: FAIL because the current pages do not frame the site as a dossier with competitor and evolution analysis.

- [ ] **Step 3: Rewrite the performance chapter**

```md
## 性能不是单一的构建速度

- **导航性能**：让高级开发者在更少跳转中建立完整认知。
- **生成性能**：构建前快照生成维持静态站点的一致性。
- **维护性能**：通过统一数据源和组件接口降低重复维护成本。
- **图示可靠性**：深浅色模式下保持线框、文本、背景和强调层的可读性。
```

- [ ] **Step 4: Upgrade the references page into a dossier**

```md
## 相关开源项目对照

| 项目 | 优势 | 本站吸收点 | 本站进一步推进 |
| --- | --- | --- | --- |
| kimi-cli | docs 工程组织清晰 | 构建前同步 | 强化成白皮书叙事外壳 |
| cursor-rules | 社区模板丰富 | 规则来源观察 | 引入系统架构和证据层 |
| awesome-cursorrules | 资源聚合能力强 | 资源覆盖广 | 升级为研究型站点 |

<DossierMatrix />
```

- [ ] **Step 5: Run the focused test**

Run: `node --test tests/site-ia.test.mjs --test-name-pattern "performance and reference pages describe maintainability"`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add docs/zh/whitepaper/performance.md docs/en/whitepaper/performance.md docs/zh/research/references.md docs/en/research/references.md docs/zh/resources/extended-reading.md docs/en/resources/extended-reading.md tests/site-ia.test.mjs
git commit -m "feat: rebuild performance and references dossier"
```

### Task 7: Run the full verification pass and prepare the merge-ready branch

**Files:**
- Modify: `tests/site-ia.test.mjs`
- Verify: `docs/.vitepress/config.ts`
- Verify: `docs/.vitepress/theme/**/*`
- Verify: `docs/zh/**/*`
- Verify: `docs/en/**/*`

- [ ] **Step 1: Run the full site IA test suite**

Run: `npm test`
Expected: PASS with all node:test assertions green.

- [ ] **Step 2: Run the repository quality gate**

Run: `npm run check`
Expected: PASS with markdown lint, site IA tests, and VitePress build succeeding.

- [ ] **Step 3: Inspect the working tree**

Run: `git --no-pager status --short`
Expected: only the planned docs/theme/test changes appear.

- [ ] **Step 4: Create the final commit**

```bash
git add docs tests
git commit -m "feat: rebuild github pages as a whitepaper portal"
```

- [ ] **Step 5: Merge to the main line**

```bash
git checkout master
git merge --ff-only HEAD@{1}
```

- [ ] **Step 6: Push the branch**

```bash
git push origin master
```

## Self-Review

- **Spec coverage:** The plan maps the spec into data, IA, presentation, homepage, architecture, algorithms, performance, references, and final verification tasks. No spec section is left without a corresponding task.
- **Placeholder scan:** The plan contains concrete file paths, code blocks, commands, and expected outcomes for every task. There are no `TODO`, `TBD`, or vague “handle it later” instructions.
- **Type consistency:** The plan consistently uses `SignalGrid`, `TopologyMap`, `PipelineCanvas`, and `DossierMatrix` as the new core components, and uses `algorithms/overview.md` as the new algorithm chapter path in both locales.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-18-github-pages-whitepaper-rebuild.md`.

Two execution options:

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

In autopilot mode, proceed with **Inline Execution** unless the user later requests subagent-driven work.
