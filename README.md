<div align="center">

# Awesome Cursor Rules 中文版

[![Project Status](https://img.shields.io/badge/status-active-success?style=flat-square)](https://github.com/LessUp/awesome-cursorrules-zh)
[![Translation Progress](https://img.shields.io/badge/progress-100%25-brightgreen?style=flat-square)](https://github.com/LessUp/awesome-cursorrules-zh)
[![GitHub Stars](https://img.shields.io/github/stars/LessUp/awesome-cursorrules-zh?style=flat-square&logo=github&label=Stars)](https://github.com/LessUp/awesome-cursorrules-zh/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/LessUp/awesome-cursorrules-zh?style=flat-square&logo=github&label=Forks)](https://github.com/LessUp/awesome-cursorrules-zh/network)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](./LICENSE)

**[🇨🇳 中文](#中文)** | **[🇺🇸 English](#english)**

为中文开发者打造的 [Cursor](https://cursor.sh/) AI 编程规则集合  
*A curated collection of Cursor AI coding rules for Chinese developers*

**119** 个规则文件 · **43** 个技术领域 · **568** 个技术文档

[快速开始](#快速开始) · [规则目录](#规则目录) · [使用指南](#使用指南) · [贡献](#贡献)

</div>

---

## 中文

### 📖 这是什么？

[Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) 是优秀的 Cursor AI 编程助手规则集合。本项目是其**中文本地化版本**，专为中文开发者优化：

- **🎯 精准翻译** — 高质量中文翻译，技术术语准确
- **📂 结构清晰** — 按技术领域分类，便于快速查找
- **🚀 开箱即用** — 复制 `.cursorrules` 文件即可开始使用
- **🌍 双语支持** — 完整的中英文文档

### 🔧 什么是 .cursorrules？

`.cursorrules` 是 Cursor AI 编辑器的项目级配置文件：

| 功能 | 说明 | 示例 |
|------|------|------|
| 编码规范 | 定义代码风格、命名约定 | PascalCase 组件、camelCase 函数 |
| 技术栈 | 指定框架、库、工具链 | React + TypeScript + Tailwind |
| 最佳实践 | 自动应用行业标准 | 错误处理、性能优化、安全策略 |
| AI 行为 | 定制 AI 回复和代码生成风格 | 详细注释、函数式编程 |

> 💡 **本质**：给 AI 助手的"项目工作手册"

---

### 🚀 快速开始

#### 三步上手

```bash
# 1. 获取规则集
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. 选择规则
cd awesome-cursorrules-zh
ls rules/frontend/react/  # 查看前端规则

# 3. 应用到项目
cp rules/frontend/react/nextjs-typescript/.cursorrules /你的项目路径/
```

#### 热门规则推荐

| 技术栈 | 规则 | 路径 |
|--------|------|------|
| Next.js + TypeScript | `nextjs-typescript` | `rules/frontend/react/nextjs-typescript/` |
| Vue 3 | `composition-api` | `rules/frontend/vue/composition-api/` |
| FastAPI | `fastapi-api-example` | `rules/backend/python/fastapi-api-example/` |
| Flutter | `flutter-app-expert` | `rules/mobile/flutter/flutter-app-expert/` |
| Go 后端 | `backend-scalability` | `rules/backend/go/backend-scalability/` |

📖 [完整快速开始指南](./docs/zh/getting-started.md)

---

### 📂 规则目录

<details>
<summary><b>🌐 应用开发</b></summary>

| 领域 | 目录 | 内容 |
|------|------|------|
| 前端 | [`frontend/`](./rules/frontend/) | React, Vue, Angular, Svelte, TypeScript |
| 后端 | [`backend/`](./rules/backend/) | Node.js, Python, Go, Java, PHP, .NET |
| 移动端 | [`mobile/`](./rules/mobile/) | Flutter, React Native, SwiftUI, Android |
| 数据库 | [`database/`](./rules/database/) | 云原生、时空数据库 |
| 系统编程 | [`systems/`](./rules/systems/) | C++ 现代规范 |

</details>

<details>
<summary><b>🤖 AI 与数据</b></summary>

| 领域 | 目录 | 内容 |
|------|------|------|
| AI/ML | [`ai/`](./rules/ai/) | 计算机视觉、MLOps、知识图谱 |
| 数据科学 | [`data-science/`](./rules/data-science/) | Pandas, PyTorch, TensorFlow |
| 数据工程 | [`data/`](./rules/data/) | Kafka, Spark, 数据仓库 |

</details>

<details>
<summary><b>☁️ 基础设施</b></summary>

| 领域 | 目录 | 内容 |
|------|------|------|
| DevOps | [`devops/`](./rules/devops/) | Docker, K8s, Terraform, CI/CD |
| 云服务 | [`cloud/`](./rules/cloud/) | 中间件 |
| 边缘计算 | [`edge/`](./rules/edge/) | AI 推理、模型压缩 |
| 安全 | [`security/`](./rules/security/) | 零信任、隐私计算 |

</details>

<details>
<summary><b>🔬 专业领域</b></summary>

| 领域 | 目录 | 内容 |
|------|------|------|
| 区块链 | [`blockchain/`](./rules/blockchain/) | Solidity, Web3, 智能合约 |
| IoT | [`iot/`](./rules/iot/) | 嵌入式、数字孪生 |
| 量子计算 | [`quantum/`](./rules/quantum/) | 量子纠错、超导计算 |
| 生物科技 | [`bio/`](./rules/bio/) | 生物电子、生物传感器 |

</details>

完整目录见 [`rules/`](./rules/) 文件夹

---

### 💡 使用指南

#### 单技术栈项目

```bash
cp rules/frontend/react/nextjs-typescript/.cursorrules ./
```

#### 多技术栈项目

**方案一：合并规则**

```bash
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**方案二：目录级规则**（推荐）

```
project/
├── .cursorrules           # 通用规则
├── frontend/
│   └── .cursorrules       # 前端规则
└── backend/
    └── .cursorrules       # 后端规则
```

#### 自定义规则

```bash
cat >> .cursorrules << 'EOF'

## 项目自定义规则
- API 路由使用 /api/v1 前缀
- 所有模型必须包含 created_at 和 updated_at
EOF
```

📖 [完整最佳实践指南](./docs/zh/best-practices.md)

---

### 📊 项目统计

| 指标 | 数值 |
|------|------|
| 规则文件 | 119 个 `.cursorrules` |
| 技术领域 | 43 个分类 |
| 技术文档 | 568 个文件 |
| 翻译进度 | 100% 完成 |
| 文档语言 | 中文 + 英文 |

---

### 📚 文档

| 文档 | 说明 | 链接 |
|------|------|------|
| 快速开始 | 5 分钟上手指南 | [中文](./docs/zh/getting-started.md) · [English](./docs/en/getting-started.md) |
| 安装指南 | 详细安装配置 | [中文](./docs/zh/installation-guide.md) · [English](./docs/en/installation-guide.md) |
| 最佳实践 | 配置和使用建议 | [中文](./docs/zh/best-practices.md) · [English](./docs/en/best-practices.md) |
| 故障排除 | 问题诊断解决 | [中文](./docs/zh/troubleshooting.md) · [English](./docs/en/troubleshooting.md) |
| API 参考 | 规则格式参考 | [中文](./docs/zh/api-reference.md) · [English](./docs/en/api-reference.md) |
| 更新日志 | 版本历史 | [中文](./CHANGELOG.zh-CN.md) · [English](./CHANGELOG.md) |

---

### 🤝 贡献

欢迎所有形式的贡献：

- 🐛 **报告问题** — [提交 Issue](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- 🔧 **改进内容** — [提交 Pull Request](https://github.com/LessUp/awesome-cursorrules-zh/pulls)
- 🔄 **同步上游** — 帮助与原项目保持同步
- 📝 **完善文档** — 优化使用指南

详见 [贡献指南](./CONTRIBUTING.md)

---

### 📄 许可证

[MIT License](./LICENSE)

---

## English

### 📖 What is this?

[Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) is a curated collection of Cursor AI coding assistant rules. This project is the **Chinese localized version**, optimized for Chinese developers:

- **🎯 Accurate Translation** - High-quality Chinese translations with accurate technical terminology
- **📂 Clear Structure** - Organized by technology domain for easy discovery
- **🚀 Ready to Use** - Copy `.cursorrules` file and start coding
- **🌍 Bilingual Support** - Complete Chinese and English documentation

### 🔧 What is .cursorrules?

`.cursorrules` is a project-level configuration file for the Cursor AI editor:

| Feature | Description | Example |
|---------|-------------|---------|
| Coding Standards | Define code style and naming conventions | PascalCase components, camelCase functions |
| Tech Stack | Specify frameworks, libraries, toolchains | React + TypeScript + Tailwind |
| Best Practices | Automatically apply industry standards | Error handling, performance, security |
| AI Behavior | Customize AI response and code generation style | Detailed comments, functional programming |

> 💡 **Essence**: A "project handbook" for AI assistants

---

### 🚀 Quick Start

#### Three Steps to Start

```bash
# 1. Get the rules
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. Choose rules
cd awesome-cursorrules-zh
ls rules/frontend/react/  # View frontend rules

# 3. Apply to project
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

📖 [Complete Quick Start Guide](./docs/en/getting-started.md)

---

### 📂 Rule Categories

- **🌐 App Development**: [Frontend](./rules/frontend/), [Backend](./rules/backend/), [Mobile](./rules/mobile/)
- **🤖 AI & Data**: [AI/ML](./rules/ai/), [Data Science](./rules/data-science/), [Data Engineering](./rules/data/)
- **☁️ Infrastructure**: [DevOps](./rules/devops/), [Cloud](./rules/cloud/), [Security](./rules/security/)
- **🔬 Specialized**: [Blockchain](./rules/blockchain/), [IoT](./rules/iot/), [Quantum](./rules/quantum/)

See full directory in [`rules/`](./rules/)

---

### 💡 Usage

```bash
# Single tech stack
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# Multiple tech stacks - merge rules
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

📖 [Complete Best Practices Guide](./docs/en/best-practices.md)

---

### 📚 Documentation

| Document | Link |
|----------|------|
| Quick Start | [🇨🇳 中文](./docs/zh/getting-started.md) · [🇺🇸 English](./docs/en/getting-started.md) |
| Installation | [🇨🇳 中文](./docs/zh/installation-guide.md) · [🇺🇸 English](./docs/en/installation-guide.md) |
| Best Practices | [🇨🇳 中文](./docs/zh/best-practices.md) · [🇺🇸 English](./docs/en/best-practices.md) |
| Troubleshooting | [🇨🇳 中文](./docs/zh/troubleshooting.md) · [🇺🇸 English](./docs/en/troubleshooting.md) |
| API Reference | [🇨🇳 中文](./docs/zh/api-reference.md) · [🇺🇸 English](./docs/en/api-reference.md) |
| Changelog | [🇨🇳 中文](./CHANGELOG.zh-CN.md) · [🇺🇸 English](./CHANGELOG.md) |

---

### 🤝 Contributing

Contributions are welcome:

- 🐛 [Report Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- 🔧 [Submit Pull Requests](https://github.com/LessUp/awesome-cursorrules-zh/pulls)
- 📝 [Improve Documentation](./CONTRIBUTING.md)

---

### 📄 License

[MIT License](./LICENSE)

---

<div align="center">

**If this project helps you, please give it a ⭐ Star!**

[⬆ Back to Top](#awesome-cursor-rules-中文版)

</div>
