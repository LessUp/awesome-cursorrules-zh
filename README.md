# Awesome Cursor Rules 中文版

<div align="center">

[![项目状态](https://img.shields.io/badge/status-completed-green?style=for-the-badge)](https://github.com/LessUp/awesome-cursorrules-zh)
[![翻译进度](https://img.shields.io/badge/progress-100%25-brightgreen?style=for-the-badge)](./docs/translation-progress.md)
[![GitHub Stars](https://img.shields.io/github/stars/LessUp/awesome-cursorrules-zh?style=for-the-badge&logo=github&label=Stars)](https://github.com/LessUp/awesome-cursorrules-zh/stargazers)
[![Fork](https://img.shields.io/github/forks/LessUp/awesome-cursorrules-zh?style=for-the-badge&logo=github&label=Fork)](https://github.com/LessUp/awesome-cursorrules-zh/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)
[![贡献指南](https://img.shields.io/badge/Contributing-Welcome-brightgreen.svg?style=for-the-badge)](./CONTRIBUTING.md)

**一个由社区驱动、为中文开发者量身打造的 [Cursor](https://cursor.sh/) AI 编程规则集合。**

**所有规则集已完成高质量翻译，涵盖 40+ 技术领域、450+ 规则文件。**

[🚀 快速开始](#-快速开始) · [📂 规则集目录](#-规则集目录) · [💡 使用指南](#-使用指南与最佳实践) · [🤝 参与贡献](#-参与贡献)

</div>

---

## 🤔 这是什么？

[Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) 是一个优秀的 Cursor AI 编程助手规则集合，但原项目主要面向英文用户。本项目致力于：

1. **精准翻译** — 提供高质量的中文翻译，消除语言障碍。
2. **结构优化** — 按技术领域重新组织目录结构，方便快速查找。
3. **内容增强** — 补充更符合国内技术生态的规则和最佳实践。

## 🌟 项目亮点

- **🎯 专为中文优化** — 所有规则经过精心翻译和本地化，术语准确，符合中文语境。
- **🗂️ 清晰的结构** — 按技术领域分类，覆盖前端、后端、AI、DevOps 等 40+ 方向。
- **✅ 开箱即用** — 将 `.cursorrules` 文件复制到项目根目录即可生效。
- **📈 社区驱动** — 欢迎任何人参与贡献，共同打造最好的中文规则库。
- **🛡️ 质量保障** — 自动化校验脚本 + 术语一致性检查 + 严格的 PR 审核流程。

## 🚀 快速开始

### 1. 克隆本仓库

```bash
git clone https://github.com/LessUp/awesome-cursorrules-zh.git
cd awesome-cursorrules-zh
```

### 2. 浏览并选择规则

根据你的项目技术栈，进入 [`rules/`](./rules/) 目录找到最适合的规则集。

```bash
# 示例：查看 React 相关规则
ls rules/frontend/react/
```

### 3. 复制规则到你的项目

```bash
# 示例：为 Next.js + TypeScript 项目复制规则
cp rules/frontend/react/nextjs-typescript/.cursorrules /path/to/your/project/
```

### 4. 在 Cursor 中享受智能编码

用 Cursor 打开你的项目，它将自动加载 `.cursorrules` 文件，即刻享受 AI 辅助的高效编码体验！

## 📂 规则集目录

我们提供了覆盖 **40+ 技术领域** 的规则集：

| 领域 | 目录 | 说明 |
|------|------|------|
| **前端开发** | [`frontend/`](./rules/frontend/) | React, Vue, Angular, Svelte, Next.js, Nuxt 等 200+ 规则 |
| **后端开发** | [`backend/`](./rules/backend/) | Node.js, Python, Go, Java, .NET, Rust 等 120+ 规则 |
| **移动开发** | [`mobile/`](./rules/mobile/) | React Native, Flutter, iOS, Android 等 |
| **DevOps** | [`devops/`](./rules/devops/) | Docker, Kubernetes, CI/CD, Terraform 等 |
| **AI / 机器学习** | [`ai/`](./rules/ai/) | PyTorch, TensorFlow, LLM, 数据科学 等 |
| **数据科学** | [`data-science/`](./rules/data-science/) | Pandas, Matplotlib, Scikit-learn 等 |
| **数据库** | [`database/`](./rules/database/) | SQL, NoSQL, ORM 等 |
| **区块链** | [`blockchain/`](./rules/blockchain/) | Solidity, Web3, 智能合约 等 |
| **安全** | [`security/`](./rules/security/) | 安全编码、漏洞检测 等 |
| **IoT / 边缘计算** | [`iot/`](./rules/iot/) [`edge/`](./rules/edge/) | 物联网、边缘计算 等 |
| **通用规则** | [`general/`](./rules/general/) | 代码规范、风格指南、Git 约定 等 |

> 📋 完整目录请浏览 [`rules/`](./rules/) 文件夹，还包括 `cloud/`、`gaming/`、`quantum/`、`robotics/`、`hardware/` 等更多领域。

## 💡 使用指南与最佳实践

### 如何选择规则？

- **新项目** — 选择对应技术栈的**完整规则集**，从一开始就建立高标准。例如，使用 `nextjs-typescript` 而不是 `react-basic`。
- **现有项目** — 从 `general/code-guidelines` 这类**通用规则**开始，逐步引入更具体的规则。

### 如何处理多技术栈项目？

**方法 1：合并规则文件**

```bash
# 将 React 和 FastAPI 的规则合并为一个文件
cat rules/frontend/react/react-best-practices/.cursorrules > /path/to/your/project/.cursorrules
echo "" >> /path/to/your/project/.cursorrules
cat rules/backend/python/fastapi-best-practices/.cursorrules >> /path/to/your/project/.cursorrules
```

**方法 2：使用目录特定规则**

在项目根目录放置通用规则，在子目录中放置特定规则。Cursor 会优先使用更深层级的规则。

```
your-project/
├── .cursorrules              # 通用规则
├── frontend/
│   └── .cursorrules          # 前端特定规则
└── backend/
    └── .cursorrules          # 后端特定规则
```

### 如何与团队协作？

1. **版本控制** — 将 `.cursorrules` 提交到 Git，确保团队使用统一规范。
2. **文档说明** — 在项目 README 中注明规则来源，方便新成员了解。

### 如何自定义规则？

直接编辑 `.cursorrules` 文件，在末尾添加团队或项目特有的规则：

```
- 使用团队约定的 API 命名法
- 所有数据库模型必须包含 created_at 和 updated_at 字段
```

> 📖 更多详细用法请查阅 [快速开始指南](./docs/getting-started.md) 和 [最佳实践](./docs/best-practices.md)。

## 📊 项目现状与未来计划

| 指标 | 状态 |
|------|------|
| **翻译进度** | ✅ 100% 完成 |
| **质量状态** | ✅ 高质量翻译，已审核 |
| **最新版本** | v1.5.0 |
| **详细报告** | [翻译进度报告](./docs/translation-progress.md) |

项目已进入**持续维护和优化阶段**，未来工作重点：

- **同步上游更新** — 定期与 [原项目](https://github.com/PatrickJS/awesome-cursorrules) 保持同步，引入新规则。
- **质量优化** — 根据社区反馈，持续改进翻译质量和规则的实用性。
- **文档完善** — 优化使用指南和项目文档，提升用户体验。

## 🤝 参与贡献

我们欢迎各种形式的贡献！

- **🐛 报告问题** — 发现翻译不准确或规则已过时？请通过 [Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues) 告诉我们。
- **🔧 改进翻译** — 提交 Pull Request 帮助优化现有内容。
- **🔄 同步上游** — 帮助项目与 [原版](https://github.com/PatrickJS/awesome-cursorrules) 保持同步。

在开始之前，请阅读 [**贡献指南**](./CONTRIBUTING.md) 和 [**行为准则**](./CODE_OF_CONDUCT.md)。

## 🐛 遇到问题？

请查阅 [**故障排除指南**](./docs/troubleshooting.md)，里面包含常见问题的解决方案和诊断工具。

## 🙏 致谢

感谢 [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) 原项目提供的优秀基础。

感谢所有为本项目贡献翻译和改进的开发者们！

## 📄 许可证

本项目采用 [MIT 许可证](./LICENSE) 授权。

---

<div align="center">

**如果这个项目对你有帮助，请给我们一个 ⭐**

**让更多中文开发者受益于优质的 AI 编程规则！**

[⬆️ 回到顶部](#awesome-cursor-rules-中文版)

</div>
