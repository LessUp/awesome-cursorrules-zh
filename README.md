<div align="center">

# Awesome Cursor Rules

[![Project Status](https://img.shields.io/badge/status-active-success?style=flat-square)](https://github.com/LessUp/awesome-cursorrules-zh)
[![Translation Progress](https://img.shields.io/badge/translation-100%25-brightgreen?style=flat-square)](https://github.com/LessUp/awesome-cursorrules-zh)
[![GitHub Stars](https://img.shields.io/github/stars/LessUp/awesome-cursorrules-zh?style=flat-square&logo=github&label=Stars)](https://github.com/LessUp/awesome-cursorrules-zh/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/LessUp/awesome-cursorrules-zh?style=flat-square&logo=github&label=Forks)](https://github.com/LessUp/awesome-cursorrules-zh/network)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](./LICENSE)

**[🇺🇸 English](#english)** | **[🇨🇳 中文版](./README.zh-CN.md)**

A curated collection of [Cursor](https://cursor.sh/) AI coding rules for modern development stacks
*为中文开发者打造的 Cursor AI 编程规则集合 - [查看中文版](./README.zh-CN.md)*

**119** rule files · **43** tech domains · **568** technical docs

[Quick Start](#quick-start) · [Browse Rules](#rule-categories) · [Usage Guide](#usage) · [Contributing](#contributing)

</div>

---

## English

### 📖 What is this?

[Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) is a curated collection of Cursor AI coding assistant rules. This project provides **comprehensive translations and localized content** for global developers:

- **🎯 Accurate Translation** - High-quality translations with accurate technical terminology
- **📂 Clear Structure** - Organized by technology domain for easy discovery
- **🚀 Ready to Use** - Copy `.cursorrules` file and start coding
- **🌍 Bilingual Support** - Complete English and Chinese documentation

### 🔧 What is .cursorrules?

`.cursorrules` is a project-level configuration file for the Cursor AI editor:

| Feature | Description | Example |
|---------|-------------|---------|
| Coding Standards | Define code style and naming conventions | PascalCase components, camelCase functions |
| Tech Stack | Specify frameworks, libraries, toolchains | React + TypeScript + Tailwind |
- **[Agent Shadow Brain](https://github.com/theihtisham/agent-shadow-brain)** - Self-evolving AI coding intelligence with infinite memory (TurboQuant), genetic algorithm self-evolution, predictive bug detection, PageRank knowledge graphs, swarm intelligence, and adversarial defense.
- **[Omni Skills Forge](https://github.com/theihtisham/omni-skills-forge)** - 50,000+ curated AI agent skills for Claude Code, Cursor, Copilot, Windsurf, Cline. Visual dashboard, one-click install, skill doctor, auto-update.
| Best Practices | Automatically apply industry standards | Error handling, performance, security |
| AI Behavior | Customize AI response and code generation style | Detailed comments, functional programming |

> 💡 **Essence**: A "project handbook" for AI assistants

---

### 🚀 Quick Start

#### Three Steps to Get Started

```bash
# 1. Clone the repository
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. Browse available rules
cd awesome-cursorrules-zh
ls rules/frontend/react/  # View frontend React rules

# 3. Copy rules to your project
cp rules/frontend/react/nextjs-typescript/.cursorrules /path/to/your/project/
```

#### Popular Rules

| Tech Stack | Rule | Path |
|------------|------|------|
| Next.js + TypeScript | `nextjs-typescript` | `rules/frontend/react/nextjs-typescript/` |
| Vue 3 | `composition-api` | `rules/frontend/vue/composition-api/` |
| FastAPI | `fastapi-api-example` | `rules/backend/python/fastapi-api-example/` |
| Flutter | `flutter-app-expert` | `rules/mobile/flutter/flutter-app-expert/` |
| Go Backend | `backend-scalability` | `rules/backend/go/backend-scalability/` |

📖 [Complete Quick Start Guide](./docs/en/getting-started.md) · [中文版快速开始](./docs/zh/getting-started.md)

---

### 📂 Rule Categories

<details>
<summary><b>🌐 App Development</b></summary>

| Domain | Directory | Includes |
|--------|-----------|----------|
| Frontend | [`rules/frontend/`](./rules/frontend/) | React, Vue, Angular, Svelte, TypeScript |
| Backend | [`rules/backend/`](./rules/backend/) | Node.js, Python, Go, Java, PHP, .NET |
| Mobile | [`rules/mobile/`](./rules/mobile/) | Flutter, React Native, SwiftUI, Android |
| Database | [`rules/database/`](./rules/database/) | Cloud-native, Spatiotemporal |
| Systems | [`rules/systems/`](./rules/systems/) | Modern C++ guidelines |

</details>

<details>
<summary><b>🤖 AI & Data</b></summary>

| Domain | Directory | Includes |
|--------|-----------|----------|
| AI/ML | [`rules/ai/`](./rules/ai/) | Computer Vision, MLOps, Knowledge Graphs |
| Data Science | [`rules/data-science/`](./rules/data-science/) | Pandas, PyTorch, TensorFlow |
| Data Engineering | [`rules/data/`](./rules/data/) | Kafka, Spark, Data Warehouses |

</details>

<details>
<summary><b>☁️ Infrastructure</b></summary>

| Domain | Directory | Includes |
|--------|-----------|----------|
| DevOps | [`rules/devops/`](./rules/devops/) | Docker, K8s, Terraform, CI/CD |
| Cloud | [`rules/cloud/`](./rules/cloud/) | Middleware |
| Edge Computing | [`rules/edge/`](./rules/edge/) | AI Inference, Model Compression |
| Security | [`rules/security/`](./rules/security/) | Zero Trust, Privacy Computing |

</details>

<details>
<summary><b>🔬 Specialized Domains</b></summary>

| Domain | Directory | Includes |
|--------|-----------|----------|
| Blockchain | [`rules/blockchain/`](./rules/blockchain/) | Solidity, Web3, Smart Contracts |
| IoT | [`rules/iot/`](./rules/iot/) | Embedded, Digital Twins |
| Quantum Computing | [`rules/quantum/`](./rules/quantum/) | Quantum Error Correction, Superconducting |
| Bio Tech | [`rules/bio/`](./rules/bio/) | Bioelectronics, Biosensors |

</details>

See full directory structure in [`rules/`](./rules/)

---

### 💡 Usage

#### Single Tech Stack Projects

```bash
# Copy relevant rules to project root
cp rules/frontend/react/nextjs-typescript/.cursorrules ./
```

#### Multi Tech Stack Projects

**Option 1: Merge Rules**

```bash
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**Option 2: Directory-Level Rules** (Recommended)

```
project/
├── .cursorrules           # Global rules
├── frontend/
│   └── .cursorrules       # Frontend-specific rules
└── backend/
    └── .cursorrules       # Backend-specific rules
```

#### Customizing Rules

```bash
# Append project-specific rules
cat >> .cursorrules << 'EOF'

## Project Custom Rules
- API routes use /api/v1 prefix
- All models must include created_at and updated_at fields
EOF
```

📖 [Complete Best Practices Guide](./docs/en/best-practices.md) · [中文版最佳实践](./docs/zh/best-practices.md)

---

### 📊 Project Statistics

| Metric | Count |
|--------|-------|
| Rule Files | 119 `.cursorrules` |
| Tech Domains | 43 categories |
| Tech Documents | 568 files |
| Translation Progress | 100% complete |
| Documentation Languages | English + Chinese |

---

### 📚 Documentation

| Document | Description | Link |
|----------|-------------|------|
| Quick Start | 5-minute getting started guide | [English](./docs/en/getting-started.md) · [中文](./docs/zh/getting-started.md) |
| Installation Guide | Detailed setup instructions | [English](./docs/en/installation-guide.md) · [中文](./docs/zh/installation-guide.md) |
| Best Practices | Configuration & usage tips | [English](./docs/en/best-practices.md) · [中文](./docs/zh/best-practices.md) |
| Troubleshooting | Common issues & solutions | [English](./docs/en/troubleshooting.md) · [中文](./docs/zh/troubleshooting.md) |
| API Reference | Rule format reference | [English](./docs/en/api-reference.md) · [中文](./docs/zh/api-reference.md) |
| Changelog | Version history | [English](./CHANGELOG.md) · [中文](./CHANGELOG.zh-CN.md) |

---

### 🤝 Contributing

Contributions are welcome in all forms:

- 🐛 **Report Issues** — [Submit an Issue](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- 🔧 **Improve Content** — [Submit a Pull Request](https://github.com/LessUp/awesome-cursorrules-zh/pulls)
- 🔄 **Sync Upstream** — Help keep this project in sync with the original
- 📝 **Enhance Documentation** — Improve guides and documentation

See [Contributing Guide](./CONTRIBUTING.md) for details.

---

### 📄 License

[MIT License](./LICENSE)

---

## 🇨🇳 中文版

本项目提供完整的中文本地化内容，专为中文开发者优化。访问 **[中文版 README](./README.zh-CN.md)** 查看中文版本的详细说明。

Key features for Chinese developers:
- 高质量中文翻译，技术术语准确
- 按技术领域分类，便于快速查找
- 开箱即用，复制 `.cursorrules` 文件即可使用
- 完整的中英文双语文档

---

<div align="center">

**If this project helps you, please give it a ⭐ Star!**

[⬆ Back to Top](#awesome-cursor-rules)

</div>
