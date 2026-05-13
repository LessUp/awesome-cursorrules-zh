# awesome-cursorrules-zh 改造方案：kimi-cli 风格

## 一、项目对比分析

### 1.1 框架与依赖对比

| 项目 | VitePress | mermaid | llms | 配置位置 |
|------|-----------|---------|------|----------|
| kimi-cli | v1.5.0 | ✅ | ✅ | `docs/.vitepress/` |
| awesome-cursorrules-zh | v1.6.4 | ✅ | ✅ | `.vitepress/` (根目录) |

**差异点**：
- awesome-cursorrules-zh 已更新到 VitePress 1.6.4
- 配置文件格式不同：kimi-cli 用 `config.ts`，awesome 用 `config.mjs`
- 目录结构：kimi-cli 在 `docs/` 下，awesome 在根目录

### 1.2 样式对比

| 文件 | kimi-cli | awesome-cursorrules-zh |
|------|----------|------------------------|
| style.css | 658 行 | 660 行 |
| custom.css | - | 311 行 |
| **总计** | **658 行** | **971 行** |

**关键差异**：
- kimi-cli 单一样式文件，更精简
- awesome 有 `style.css + custom.css` 两层，包含额外组件样式
- 两者基础结构相似（都移除了 Hero 渐变）

### 1.3 品牌色对比

| 变量 | kimi-cli (Kimi Blue) | awesome (Indigo) |
|------|---------------------|------------------|
| --vp-c-brand-1 | #3476f6 | #6366f1 |
| --vp-c-brand-2 | #488aff | #818cf8 |
| --vp-c-brand-3 | #5c9eff | #a5b4fc |

### 1.4 首页结构对比

**kimi-cli 首页组件**：
```
home-header → home-intro-row → feature-map (6卡片) → quick-start
```

**awesome-cursorrules-zh 首页组件**：
```
home-header → home-intro-row → rules-map (6卡片) → quick-start
```

**结论**：两者结构几乎一致，主要差异在组件命名和内容。

---

## 二、改造目标与决策

### 2.1 核心目标
1. **统一设计语言**：采用 kimi-cli 简洁现代风格
2. **精简样式文件**：合并 style.css + custom.css
3. **保持现有功能**：llms.txt、双语、分类系统、32 分类规则
4. **品牌色决策**：**保持 Indigo (#6366f1)** - 更符合 AI/开发者工具定位

### 2.2 不改造的部分
- 目录结构（保持根目录 `.vitepress/`）
- 配置文件格式（保持 `config.mjs`）
- 多语言结构（zh/, en/ 符号链接）
- rules/ 目录的 32 个分类
- 构建脚本（scripts/）

---

## 三、详细改造方案

### 3.1 需要修改的文件清单

#### 3.1.1 样式文件（核心改造）

| 操作 | 文件路径 | 说明 |
|------|----------|------|
| **重写** | `.vitepress/theme/style.css` | 整合 kimi-cli 风格，保留 Indigo 色 |
| **删除** | `.vitepress/theme/custom.css` | 合并到 style.css |
| **修改** | `.vitepress/theme/index.mjs` | 移除 custom.css 引用 |

#### 3.1.2 首页模板（布局优化）

| 操作 | 文件路径 | 说明 |
|------|----------|------|
| **重写** | `index.md` | 采用 kimi-cli 布局风格 |
| **重写** | `zh/index.md` | 同步中文首页 |
| **重写** | `en/index.md` | 同步英文首页 |

#### 3.1.3 配置文件（微调）

| 操作 | 文件路径 | 说明 |
|------|----------|------|
| **可选** | `.vitepress/config.mjs` | 可添加 footer 样式配置 |

---

### 3.2 样式改造策略

#### 3.2.1 核心原则
1. **保持 Indigo 品牌色系** - 不改为 Kimi Blue
2. **采用 kimi-cli 的 CSS 结构** - 更清晰的组织
3. **保留必要的自定义组件** - rule-card 等

#### 3.2.2 合并后的 style.css 结构

```css
/* === CSS Variables === */
/* 保持 Indigo 品牌色，采用 kimi-cli 结构 */

/* === Dark Mode Variables === */
/* 同步更新 */

/* === Hero Section === */
/* 采用 kimi-cli 简化风格 */

/* === Navigation === */
/* 采用 kimi-cli 简洁导航 */

/* === Sidebar === */
/* 保持现有，优化样式 */

/* === Content === */
/* 统一文档页样式 */

/* === Custom Components === */
/* home-header, home-intro-row */
/* feature-map (重命名 rules-map) */
/* feature-card (重命名 rule-card) */
/* quick-start */
/* command-block */

/* === Legacy Components (保留) === */
/* stats-grid, category-card 等用于其他页面 */

/* === Responsive === */
/* 保持现有断点 */
```

#### 3.2.3 组件重命名策略

| 旧名称 | 新名称 | 说明 |
|--------|--------|------|
| `rules-map` | `feature-map` | 统一命名 |
| `rule-card` | `feature-card` | 统一命名 |
| `rule-card-title` | `feature-card-title` | 统一命名 |
| `rule-tags` | `feature-tags` | 统一命名 |
| `rule-tag` | `feature-tag` | 统一命名 |
| `rule-tag-more` | `feature-tag-more` | 统一命名 |

**注意**：保留旧类名作为别名，确保其他页面不 break：
```css
/* 别名兼容 */
.rules-map { /* 同 feature-map */ }
.rule-card { /* 同 feature-card */ }
```

---

### 3.3 首页布局改造

#### 3.3.1 新首页结构（kimi-cli 风格）

```html
<!-- home-header: 品牌头部 -->
<div class="home-header">
  <div class="home-header-left">
    <div class="home-logo">AC</div>
    <div>
      <span class="home-title">Awesome Cursor Rules</span>
      <span class="home-subtitle">中文版</span>
    </div>
  </div>
  <div class="home-nav">
    <a href="./zh/getting-started">快速开始</a>
    <a href="https://github.com/LessUp/awesome-cursorrules-zh">GitHub</a>
    <a href="./en/">English</a>
  </div>
</div>

<!-- home-intro-row: 介绍 + 统计 -->
<div class="home-intro-row">
  <div class="home-intro">
    Cursor AI 编辑器的 .cursorrules 规则集合...
  </div>
  <div class="home-stats">
    <span><strong>132+</strong> 规则</span>
    <span><strong>32+</strong> 分类</span>
    <span><strong>190+</strong> 文档</span>
  </div>
</div>

## 规则地图

<!-- feature-map: 6列卡片 -->
<div class="feature-map">
  <div class="feature-card">
    <div class="feature-card-title">🎯 前端开发</div>
    <div class="feature-card-desc">
      React、Vue、Next.js、Angular、Svelte 等框架规则
    </div>
    <div class="feature-tags">
      <a href="..." class="feature-tag">React</a>
      <a href="..." class="feature-tag">Vue</a>
      <a href="..." class="feature-tag-more">查看全部</a>
    </div>
  </div>
  <!-- ... 其他 5 个卡片 -->
</div>

<!-- quick-start: 快速开始 -->
<div class="quick-start">
  <div class="quick-start-title">快速使用</div>
  <div class="quick-start-content">
    <div class="command-block">
      <code># 复制规则到项目根目录</code>
    </div>
    选择规则 → 复制 .cursorrules → 在 Cursor 中使用
  </div>
</div>
```

#### 3.3.2 与 kimi-cli 的差异

| 项目 | kimi-cli | awesome-cursorrules-zh |
|------|----------|------------------------|
| 卡片内容 | 功能特性描述 | 分类 + 技术标签 |
| 卡片链接 | 文档页面 | GitHub raw + 分类页面 |
| 快速开始 | pip install | 复制 .cursorrules |

---

### 3.4 组件复用/新建

#### 3.4.1 直接复用（从 kimi-cli）

| 组件 | 说明 |
|------|------|
| `.home-header` | 品牌头部 |
| `.home-header-left` | 头部左侧 |
| `.home-logo` | Logo 样式 |
| `.home-title` | 标题样式 |
| `.home-subtitle` | 副标题样式 |
| `.home-nav` | 导航链接 |
| `.home-intro-row` | 介绍行布局 |
| `.home-intro` | 介绍文字 |
| `.home-stats` | 统计信息 |
| `.feature-map` | 功能网格（原 rules-map） |
| `.feature-card` | 功能卡片（原 rule-card） |
| `.feature-card-title` | 卡片标题 |
| `.feature-card-desc` | 卡片描述 |
| `.feature-tags` | 标签容器 |
| `.feature-tag` | 标签样式 |
| `.quick-start` | 快速开始区块 |
| `.quick-start-title` | 快速开始标题 |
| `.quick-start-content` | 快速开始内容 |
| `.command-block` | 命令块 |

#### 3.4.2 保留（awesome 特有）

| 组件 | 用途 | 文件 |
|------|------|------|
| `.stats-grid` | 统计卡片网格 | custom.css |
| `.stat-card` | 统计卡片 | custom.css |
| `.category-card` | 分类卡片（其他页面用） | custom.css |
| `.category-grid` | 分类网格 | custom.css |
| `.custom-badge` | 自定义徽章 | custom.css |
| `.tip-box` | 提示框 | custom.css |
| `.highlight-box` | 高亮框 | custom.css |
| `.comparison-table` | 对比表格 | custom.css |

---

### 3.5 迁移步骤

#### Phase 1: 样式整合（优先级：高）

```bash
# 1. 备份现有样式
cp .vitepress/theme/style.css .vitepress/theme/style.css.bak
cp .vitepress/theme/custom.css .vitepress/theme/custom.css.bak

# 2. 创建新的 style.css
# 合并 kimi-cli 结构 + Indigo 色系 + 必要的 custom.css 组件

# 3. 修改 index.mjs
# 移除 custom.css 引用

# 4. 删除 custom.css
```

#### Phase 2: 首页更新（优先级：高）

```bash
# 1. 备份首页
cp index.md index.md.bak
cp zh/index.md zh/index.md.bak
cp en/index.md en/index.md.bak

# 2. 更新首页
# 采用新布局，重命名组件类名
```

#### Phase 3: 验证测试（优先级：中）

```bash
# 1. 本地构建测试
npm run docs:build

# 2. 本地预览
npm run docs:preview

# 3. 检查所有页面样式
# - 首页
# - 分类页面
# - 文档页面
# - 移动端响应式
```

#### Phase 4: 清理优化（优先级：低）

```bash
# 1. 删除备份文件
# 2. 清理未使用的 CSS
# 3. 优化图片资源
```

---

## 四、风险点与缓解措施

### 4.1 风险清单

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| CSS 类名变更破坏其他页面 | 高 | 保留旧类名别名 |
| 响应式布局问题 | 中 | 保留所有媒体查询 |
| 深色模式样式丢失 | 中 | 同步更新 dark 变量 |
| 构建失败 | 低 | 渐进式迁移，每步验证 |
| 组件样式冲突 | 低 | 检查特异性，必要时用 !important |

### 4.2 回滚方案

```bash
# 如果改造出现问题
cp .vitepress/theme/style.css.bak .vitepress/theme/style.css
cp .vitepress/theme/custom.css.bak .vitepress/theme/custom.css
# 修改 index.mjs 恢复 custom.css 引用
```

---

## 五、执行计划

### 5.1 预估时间

| 阶段 | 时间 | 内容 |
|------|------|------|
| Phase 1 | 1 小时 | 样式整合 |
| Phase 2 | 30 分钟 | 首页更新 |
| Phase 3 | 30 分钟 | 验证测试 |
| Phase 4 | 30 分钟 | 清理优化 |
| **总计** | **2.5 小时** | |

### 5.2 执行顺序

1. ✅ 分析两个项目结构（已完成）
2. ⬜ 创建样式备份
3. ⬜ 整合 style.css
4. ⬜ 更新 index.mjs
5. ⬜ 更新首页模板
6. ⬜ 本地验证
7. ⬜ 清理优化

---

## 六、附录：关键代码示例

### 6.1 新 style.css 核心结构

```css
/**
 * Awesome Cursor Rules - VitePress Styles
 * 基于 kimi-cli 风格，Indigo 品牌色
 */

/* === CSS Variables === */
:root {
  /* Brand Colors - Indigo/AI Style */
  --vp-c-brand-1: #6366f1;
  --vp-c-brand-2: #818cf8;
  --vp-c-brand-3: #a5b4fc;
  --vp-c-brand-soft: rgba(99, 102, 241, 0.14);

  /* GitHub Primer 风格背景 */
  --vp-c-bg: #ffffff;
  --vp-c-bg-alt: #f6f8fa;
  --vp-c-bg-soft: #f6f8fa;

  /* Hero 简化 */
  --vp-home-hero-name-color: #6366f1;
  --vp-home-hero-name-background: transparent;
  --vp-home-hero-image-background-image: none;

  /* 标签色 */
  --tag-bg: rgba(99, 102, 241, 0.1);
  --tag-text: #6366f1;

  /* 间距系统 */
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 40px;

  /* 圆角系统 */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* 过渡动画 */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.2s ease;
}

/* === Feature Map (原 rules-map) === */
.feature-map {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.feature-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  padding: var(--spacing-md);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
}

/* === 别名兼容 === */
.rules-map { /* 同 feature-map */ }
.rule-card { /* 同 feature-card */ }
```

### 6.2 新首页模板结构

```markdown
---
layout: home
---

<div class="home-header">
  <!-- 头部内容 -->
</div>

<div class="home-intro-row">
  <!-- 介绍 + 统计 -->
</div>

## 规则地图

<div class="feature-map">
  <!-- 6 个 feature-card -->
</div>

<div class="quick-start">
  <!-- 快速开始 -->
</div>
```

---

**文档版本**: v1.0
**创建时间**: 2026-05-13
**作者**: Claude Agent
