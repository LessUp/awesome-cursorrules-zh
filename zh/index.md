---
layout: home

hero:
  name: Awesome Cursor Rules
  text: 中文版
  tagline: 为中文开发者打造的 Cursor AI 编程规则集合<br>A curated collection of Cursor AI coding rules for Chinese developers
  image:
    src: /logo.svg
    alt: Awesome Cursor Rules
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/getting-started
    - theme: alt
      text: 查看规则集
      link: /zh/rules/
    - theme: alt
      text: GitHub
      link: https://github.com/LessUp/awesome-cursorrules-zh

features:
  - icon: 🎯
    title: 精准翻译
    details: 高质量中文翻译，技术术语准确，让中文开发者无障碍使用
  - icon: 📂
    title: 结构清晰
    details: 按技术领域分类，43个分类，119个规则文件，便于快速查找
  - icon: 🚀
    title: 开箱即用
    details: 复制 .cursorrules 文件到项目根目录即可开始使用，无需复杂配置
  - icon: 🌍
    title: 双语支持
    details: 完整的简体中文和英文文档，支持语言切换，服务全球开发者
  - icon: 💡
    title: 最佳实践
    details: 汇集业界优秀编码规范，帮助团队统一代码风格，提升开发效率
  - icon: 🤖
    title: AI 增强
    details: 优化 AI 代码生成质量，让 Cursor AI 更好地理解项目需求
---

<script setup>
const stats = {
  rules: 119,
  categories: 43,
  docs: 568
}
</script>

## 📊 项目统计

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">119</div>
    <div class="stat-label">规则文件</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">43</div>
    <div class="stat-label">技术领域</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">568</div>
    <div class="stat-label">技术文档</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">100%</div>
    <div class="stat-label">翻译进度</div>
  </div>
</div>

## 🚀 快速开始

### 三步上手

```bash
# 1. 克隆规则集仓库
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. 选择适合你项目的规则
cd awesome-cursorrules-zh
ls rules/frontend/react/

# 3. 应用到你的项目
cp rules/frontend/react/nextjs-typescript/.cursorrules /你的项目路径/
```

::: tip 💡 提示
大多数情况下，只需复制一个 `.cursorrules` 文件到项目根目录即可开始使用！
:::

## 📂 规则分类

<div class="category-grid">
  <a href="./rules/frontend" class="category-card">
    <div class="category-icon">🌐</div>
    <div class="category-content">
      <h3>前端开发</h3>
      <p>React, Vue, Angular, Svelte, TypeScript</p>
    </div>
  </a>
  <a href="./rules/backend" class="category-card">
    <div class="category-icon">⚙️</div>
    <div class="category-content">
      <h3>后端开发</h3>
      <p>Node.js, Python, Go, Java, PHP</p>
    </div>
  </a>
  <a href="./rules/mobile" class="category-card">
    <div class="category-icon">📱</div>
    <div class="category-content">
      <h3>移动开发</h3>
      <p>Flutter, React Native, SwiftUI, Android</p>
    </div>
  </a>
  <a href="./rules/ai" class="category-card">
    <div class="category-icon">🤖</div>
    <div class="category-content">
      <h3>AI 与数据</h3>
      <p>机器学习, 数据科学, MLOps</p>
    </div>
  </a>
</div>

## 🔧 什么是 .cursorrules？

`.cursorrules` 是 [Cursor AI](https://cursor.sh/) 编辑器的项目级配置文件，用于：

| 功能 | 说明 | 示例 |
|------|------|------|
| **编码规范** | 定义代码风格、命名约定 | PascalCase 组件、camelCase 函数 |
| **技术栈** | 指定框架、库、工具链 | React + TypeScript + Tailwind |
| **最佳实践** | 自动应用行业标准 | 错误处理、性能优化、安全策略 |
| **AI 行为** | 定制 AI 回复和代码生成风格 | 详细注释、函数式编程 |

## 📚 热门规则推荐

| 技术栈 | 规则 | 命令 |
|--------|------|------|
| **Next.js + TypeScript** | nextjs-typescript | `cp rules/frontend/react/nextjs-typescript/.cursorrules ./` |
| **Vue 3** | composition-api | `cp rules/frontend/vue/composition-api/.cursorrules ./` |
| **FastAPI** | fastapi-api-example | `cp rules/backend/python/fastapi-api-example/.cursorrules ./` |
| **Flutter** | flutter-app-expert | `cp rules/mobile/flutter/flutter-app-expert/.cursorrules ./` |

## 🤝 贡献

欢迎所有形式的贡献：

- 🐛 [报告问题](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- 🔧 [改进内容](https://github.com/LessUp/awesome-cursorrules-zh/pulls)
- 📝 [完善文档](./getting-started)

## 📄 许可证

[MIT License](https://github.com/LessUp/awesome-cursorrules-zh/blob/master/LICENSE)
