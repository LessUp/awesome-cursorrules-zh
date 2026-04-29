<div align="center">

# Awesome Cursor Rules

[![Project Status](https://img.shields.io/badge/status-active-success?style=flat-square)](https://github.com/LessUp/awesome-cursorrules-zh)
[![Website](https://img.shields.io/badge/website-awesome--cursorrules--zh.js.org-blue?style=flat-square&logo=globe)](https://awesome-cursorrules-zh.js.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success?style=flat-square&logo=github)](https://awesome-cursorrules-zh.js.org/)
[![Translation Progress](https://img.shields.io/badge/translation-100%25-brightgreen?style=flat-square)](https://github.com/LessUp/awesome-cursorrules-zh)
[![GitHub Stars](https://img.shields.io/github/stars/LessUp/awesome-cursorrules-zh?style=flat-square&logo=github&label=Stars)](https://github.com/LessUp/awesome-cursorrules-zh/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/LessUp/awesome-cursorrules-zh?style=flat-square&logo=github&label=Forks)](https://github.com/LessUp/awesome-cursorrules-zh/network)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](./LICENSE)

**[🇨🇳 中文](./README.md)** | **[🇺🇸 English](#english)**

A curated collection of [Cursor](https://cursor.sh/) AI coding rules for modern development stacks
*为中文开发者打造的 Cursor AI 编程规则集合 - [查看中文版](./README.md)*

**132** rule files · **32** tech domains · **190** technical docs · **6,500+** lines

[🚀 Quick Start](#quick-start) · [📂 Browse Rules](#rule-categories) · [💡 Usage Guide](#usage) · [📚 Docs](https://awesome-cursorrules-zh.js.org/) · [🤝 Contributing](#contributing)

</div>

---

## 📋 Table of Contents

- [What is this?](#what-is-this)
- [What is .cursorrules?](#what-is-cursorrules)
- [✨ Features](#features)
- [🚀 Quick Start](#quick-start)
- [📂 Rule Categories](#rule-categories)
- [💡 Usage](#usage)
- [📊 Statistics](#statistics)
- [📚 Documentation](#documentation)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

---

## What is this?

[Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) is a curated collection of Cursor AI coding assistant rules. This project provides **comprehensive translations and localized content** for global developers:

- **🎯 Accurate Translation** — High-quality translations with precise technical terminology
- **📂 Clear Structure** — Organized by technology domain for easy discovery
- **🚀 Ready to Use** — Copy `.cursorrules` file and start coding immediately
- **🌍 Bilingual Support** — Complete English and Chinese documentation
- **⚡ 132 Rules** — Covering frontend, backend, mobile, AI, DevOps, and more

> 🌐 **Online Documentation**: [awesome-cursorrules-zh.js.org](https://awesome-cursorrules-zh.js.org/)

---

## What is .cursorrules?

`.cursorrules` is a project-level configuration file for the [Cursor](https://cursor.sh/) AI editor that defines how AI should assist your coding:

| Feature | Description | Example |
|---------|-------------|---------|
| **Coding Standards** | Define code style and naming conventions | PascalCase components, camelCase functions |
| **Tech Stack** | Specify frameworks, libraries, toolchains | React + TypeScript + Tailwind CSS |
| **Best Practices** | Automatically apply industry standards | Error handling, performance optimization |
| **AI Behavior** | Customize AI response style | Detailed comments, functional programming |

> 💡 **Essence**: A "project handbook" for AI assistants that ensures consistent, high-quality code generation

---

## ✨ Features

### 🏆 Popular Tech Stacks

<table>
<tr>
<td align="center" width="20%">
  <img src="https://img.shields.io/badge/TypeScript-29%20rules-blue?style=flat-square&logo=typescript" alt="TypeScript"><br>
  <sub>Most covered</sub>
</td>
<td align="center" width="20%">
  <img src="https://img.shields.io/badge/React-19%20rules-61DAFB?style=flat-square&logo=react" alt="React"><br>
  <sub>Frontend leader</sub>
</td>
<td align="center" width="20%">
  <img src="https://img.shields.io/badge/Python-11%20rules-3776AB?style=flat-square&logo=python" alt="Python"><br>
  <sub>Backend & AI</sub>
</td>
<td align="center" width="20%">
  <img src="https://img.shields.io/badge/Next.js-8%20rules-black?style=flat-square&logo=next.js" alt="Next.js"><br>
  <sub>Full-stack</sub>
</td>
<td align="center" width="20%">
  <img src="https://img.shields.io/badge/Docker-7%20rules-2496ED?style=flat-square&logo=docker" alt="Docker"><br>
  <sub>DevOps</sub>
</td>
</tr>
</table>

### 📊 Coverage Areas

- **🌐 App Development**: Frontend, Backend, Mobile, Database, Systems
- **🤖 AI & Data**: Machine Learning, Data Science, Data Engineering
- **☁️ Infrastructure**: DevOps, Cloud, Edge Computing, Security
- **🔬 Specialized**: Blockchain, IoT, Quantum Computing, Bio Tech

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# Browse available rules
cd awesome-cursorrules-zh
ls rules/frontend/react/
```

### Usage

```bash
# Copy rule to your project
cp rules/frontend/react/nextjs-typescript/.cursorrules /path/to/your/project/
```

That's it! Open your project in Cursor and the AI will follow the rules automatically.

### Quick Examples

| Tech Stack | Rule | Command |
|------------|------|---------|
| Next.js + TypeScript | `nextjs-typescript` | `cp rules/frontend/react/nextjs-typescript/.cursorrules ./` |
| Vue 3 | `composition-api` | `cp rules/frontend/vue/composition-api/.cursorrules ./` |
| FastAPI | `fastapi-api-example` | `cp rules/backend/python/fastapi-api-example/.cursorrules ./` |
| Flutter | `flutter-app-expert` | `cp rules/mobile/flutter/flutter-app-expert/.cursorrules ./` |

📖 **[Complete Quick Start Guide](https://awesome-cursorrules-zh.js.org/en/getting-started.html)**

---

## 📂 Rule Categories

<details open>
<summary><b>🌐 App Development</b></summary>

| Domain | Directory | Technologies |
|--------|-----------|--------------|
| Frontend | [`rules/frontend/`](./rules/frontend/) | React, Vue, Angular, Svelte, SolidJS, TypeScript |
| Backend | [`rules/backend/`](./rules/backend/) | Node.js, Python, Go, Java, PHP, .NET, Elixir |
| Mobile | [`rules/mobile/`](./rules/mobile/) | Flutter, React Native, SwiftUI, Jetpack Compose |
| Database | [`rules/database/`](./rules/database/) | Cloud-native, Spatiotemporal |
| Systems | [`rules/systems/`](./rules/systems/) | Modern C++, Rust |

</details>

<details>
<summary><b>🤖 AI & Data</b></summary>

| Domain | Directory | Technologies |
|--------|-----------|--------------|
| AI/ML | [`rules/ai/`](./rules/ai/) | Computer Vision, MLOps, Knowledge Graphs, Edge AI |
| Data Science | [`rules/data-science/`](./rules/data-science/) | Pandas, PyTorch, TensorFlow, Scikit-learn |
| Data Engineering | [`rules/data/`](./rules/data/) | Kafka, Spark, Flink, Data Warehouses |

</details>

<details>
<summary><b>☁️ Infrastructure & DevOps</b></summary>

| Domain | Directory | Technologies |
|--------|-----------|--------------|
| DevOps | [`rules/devops/`](./rules/devops/) | Docker, Kubernetes, Terraform, CI/CD |
| Cloud | [`rules/cloud/`](./rules/cloud/) | Middleware, Serverless |
| Edge Computing | [`rules/edge/`](./rules/edge/) | AI Inference, Model Compression |
| Security | [`rules/security/`](./rules/security/) | Zero Trust, Privacy Computing, Homomorphic Encryption |

</details>

<details>
<summary><b>🔬 Specialized Domains</b></summary>

| Domain | Directory | Technologies |
|--------|-----------|--------------|
| Blockchain | [`rules/blockchain/`](./rules/blockchain/) | Solidity, Web3, Smart Contracts, Foundry |
| IoT | [`rules/iot/`](./rules/iot/) | Embedded, Digital Twins |
| Quantum Computing | [`rules/quantum/`](./rules/quantum/) | Quantum Error Correction, Superconducting |
| Bio Tech | [`rules/bio/`](./rules/bio/) | Bioelectronics, Biosensors |
| Hardware | [`rules/hardware/`](./rules/hardware/) | Neuromorphic Chips, Photon Computing |
| Gaming | [`rules/gaming/`](./rules/gaming/) | DragonRuby, Cloud Gaming |

</details>

<details>
<summary><b>🛠️ Tools & General</b></summary>

| Domain | Directory | Technologies |
|--------|-----------|--------------|
| Tools | [`rules/tools/`](./rules/tools/) | Convex, GitHub Quality |
| General | [`rules/general/`](./rules/general/) | Code Guidelines, Style Consistency, Testing |

</details>

See full directory structure in [`rules/`](./rules/)

---

## 💡 Usage

### Single Tech Stack

```bash
cp rules/frontend/react/nextjs-typescript/.cursorrules ./
```

### Multiple Tech Stacks

**Option 1: Merge Rules**

```bash
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**Option 2: Directory-Level Rules** (Recommended for monorepos)

```
project/
├── .cursorrules           # Global rules
├── frontend/
│   └── .cursorrules       # Frontend-specific rules
└── backend/
    └── .cursorrules       # Backend-specific rules
```

### Customize Rules

```bash
# Append project-specific rules
cat >> .cursorrules << 'EOF'

## Project Custom Rules
- API routes use /api/v1 prefix
- All models must include created_at and updated_at fields
- Prefer functional components over class components
EOF
```

📖 **[Complete Best Practices Guide](https://awesome-cursorrules-zh.js.org/en/best-practices.html)**

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| **Rule Files** | 132 `.cursorrules` |
| **Tech Domains** | 32 categories |
| **Tech Documents** | 190 Markdown files |
| **Total Lines** | 6,500+ lines |
| **Translation** | 100% Chinese + English |
| **Coverage** | Frontend, Backend, Mobile, AI, DevOps, Blockchain, IoT, etc. |

### Top Technologies

```
TypeScript  ████████████████████████████████  29 rules
React       ██████████████████████            19 rules
Tailwind    ███████████████                   13 rules
Python      █████████████                     11 rules
Next.js     ██████████                         8 rules
Node.js     █████████                          7 rules
Docker      █████████                          7 rules
```

---

## 📚 Documentation

| Document | Description | Link |
|----------|-------------|------|
| 🚀 Quick Start | 5-minute getting started guide | [Online](https://awesome-cursorrules-zh.js.org/en/getting-started.html) · [GitHub](./docs/en/getting-started.md) |
| 📖 Installation | Detailed setup instructions | [Online](https://awesome-cursorrules-zh.js.org/en/installation-guide.html) · [GitHub](./docs/en/installation-guide.md) |
| 💡 Best Practices | Configuration & usage tips | [Online](https://awesome-cursorrules-zh.js.org/en/best-practices.html) · [GitHub](./docs/en/best-practices.md) |
| 🔧 Troubleshooting | Common issues & solutions | [Online](https://awesome-cursorrules-zh.js.org/en/troubleshooting.html) · [GitHub](./docs/en/troubleshooting.md) |
| 📋 API Reference | Rule format reference | [Online](https://awesome-cursorrules-zh.js.org/en/api-reference.html) · [GitHub](./docs/en/api-reference.md) |
| 📝 Changelog | Version history | [English](./CHANGELOG.md) · [中文](./CHANGELOG.zh-CN.md) |

---

## 🤝 Contributing

Contributions are welcome in all forms:

- 🐛 **Report Issues** — [Submit an Issue](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- 🔧 **Improve Content** — [Submit a Pull Request](https://github.com/LessUp/awesome-cursorrules-zh/pulls)
- 🔄 **Sync Upstream** — Help keep this project in sync with the original
- 📝 **Enhance Documentation** — Improve guides and documentation

See [Contributing Guide](./CONTRIBUTING.md) for details.

---

## 🙏 Acknowledgments

This project is a Chinese localization of [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules). Special thanks to the original author and all contributors.

---

## 📄 License

[MIT License](./LICENSE)

---

<div align="center">

**If this project helps you, please give it a ⭐ Star!**

[🌐 Visit Official Website](https://awesome-cursorrules-zh.js.org/) · [⬆ Back to Top](#awesome-cursor-rules)

</div>
