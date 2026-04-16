---
layout: home

hero:
  name: Awesome Cursor Rules
  text: 
  tagline: A curated collection of Cursor AI coding rules<br>Optimized for Chinese developers with bilingual documentation
  image:
    src: /logo.svg
    alt: Awesome Cursor Rules
  actions:
    - theme: brand
      text: Quick Start
      link: /en/getting-started
    - theme: alt
      text: Browse Rules
      link: /en/rules/
    - theme: alt
      text: GitHub
      link: https://github.com/LessUp/awesome-cursorrules-zh

features:
  - icon: 🎯
    title: Accurate Translation
    details: High-quality Chinese translations with accurate technical terminology
  - icon: 📂
    title: Well Organized
    details: 43 categories, 119 rule files, organized by technology domain
  - icon: 🚀
    title: Ready to Use
    details: Copy .cursorrules file to project root and start coding immediately
  - icon: 🌍
    title: Bilingual Support
    details: Complete Simplified Chinese and English documentation
  - icon: 💡
    title: Best Practices
    details: Industry-standard coding guidelines to improve team productivity
  - icon: 🤖
    title: AI Enhanced
    details: Optimize AI code generation for better project understanding
---

<script setup>
const stats = {
  rules: 119,
  categories: 43,
  docs: 568
}
</script>

## 📊 Project Statistics

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">119</div>
    <div class="stat-label">Rule Files</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">43</div>
    <div class="stat-label">Categories</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">568</div>
    <div class="stat-label">Documents</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">100%</div>
    <div class="stat-label">Translated</div>
  </div>
</div>

## 🚀 Quick Start

### Three Steps to Start

```bash
# 1. Clone the repository
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. Choose rules for your project
cd awesome-cursorrules-zh
ls rules/frontend/react/

# 3. Copy to your project
cp rules/frontend/react/nextjs-typescript/.cursorrules /path/to/your/project/
```

::: tip 💡 Tip
In most cases, just copy a `.cursorrules` file to your project root and you're ready to go!
:::

## 📂 Rule Categories

<div class="category-grid">
  <a href="./rules/frontend" class="category-card">
    <div class="category-icon">🌐</div>
    <div class="category-content">
      <h3>Frontend</h3>
      <p>React, Vue, Angular, Svelte, TypeScript</p>
    </div>
  </a>
  <a href="./rules/backend" class="category-card">
    <div class="category-icon">⚙️</div>
    <div class="category-content">
      <h3>Backend</h3>
      <p>Node.js, Python, Go, Java, PHP</p>
    </div>
  </a>
  <a href="./rules/mobile" class="category-card">
    <div class="category-icon">📱</div>
    <div class="category-content">
      <h3>Mobile</h3>
      <p>Flutter, React Native, SwiftUI, Android</p>
    </div>
  </a>
  <a href="./rules/ai" class="category-card">
    <div class="category-icon">🤖</div>
    <div class="category-content">
      <h3>AI & Data</h3>
      <p>Machine Learning, Data Science, MLOps</p>
    </div>
  </a>
</div>

## 🔧 What is .cursorrules?

`.cursorrules` is a project-level configuration file for [Cursor AI](https://cursor.sh/) editor:

| Feature | Description | Example |
|---------|-------------|---------|
| **Coding Standards** | Define code style and naming conventions | PascalCase components, camelCase functions |
| **Tech Stack** | Specify frameworks, libraries, toolchains | React + TypeScript + Tailwind |
| **Best Practices** | Apply industry standards automatically | Error handling, performance, security |
| **AI Behavior** | Customize AI code generation style | Detailed comments, functional programming |

## 📚 Popular Rules

| Tech Stack | Rule | Command |
|------------|------|---------|
| **Next.js + TypeScript** | nextjs-typescript | `cp rules/frontend/react/nextjs-typescript/.cursorrules ./` |
| **Vue 3** | composition-api | `cp rules/frontend/vue/composition-api/.cursorrules ./` |
| **FastAPI** | fastapi-api-example | `cp rules/backend/python/fastapi-api-example/.cursorrules ./` |
| **Flutter** | flutter-app-expert | `cp rules/mobile/flutter/flutter-app-expert/.cursorrules ./` |

## 🤝 Contributing

Contributions are welcome:

- 🐛 [Report Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- 🔧 [Submit PRs](https://github.com/LessUp/awesome-cursorrules-zh/pulls)
- 📝 [Improve Docs](./getting-started)

## 📄 License

[MIT License](https://github.com/LessUp/awesome-cursorrules-zh/blob/master/LICENSE)
