# Awesome Cursor Rules 中文版

<div align="center">

[![项目状态](https://img.shields.io/badge/status-active-success?style=for-the-badge)](https://github.com/LessUp/awesome-cursorrules-zh)
[![翻译进度](https://img.shields.io/badge/进度-100%25-brightgreen?style=for-the-badge)](https://github.com/LessUp/awesome-cursorrules-zh)
[![GitHub Stars](https://img.shields.io/github/stars/LessUp/awesome-cursorrules-zh?style=for-the-badge&logo=github&label=Stars)](https://github.com/LessUp/awesome-cursorrules-zh/stargazers)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

**为中文开发者打造的 [Cursor](https://cursor.sh/) AI 编程规则集合**

119 个规则文件 · 43 个技术领域 · 568 个技术文档

[快速开始](#-快速开始) · [规则目录](#-规则集目录) · [使用指南](#-使用指南) · [常见问题](#-常见问题)

</div>

---

## 这是什么？

[Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) 是一个优秀的 Cursor AI 编程助手规则集合。本项目是其中文本地化版本：

- **精准翻译** — 高质量中文翻译，术语准确
- **结构清晰** — 按技术领域分类，便于查找
- **开箱即用** — 复制 `.cursorrules` 文件即可使用

### 什么是 .cursorrules？

`.cursorrules` 是 Cursor AI 编辑器的项目配置文件，用于：

| 功能 | 说明 |
|------|------|
| 编码规范 | 定义代码风格、命名约定 |
| 技术栈 | 指定框架、库、工具链 |
| 最佳实践 | 自动应用行业标准 |

> 💡 本质上是给 AI 助手的"工作手册"。

---

## 🚀 快速开始

### 三步上手

```bash
# 1. 获取规则集
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. 选择规则
cd awesome-cursorrules-zh
ls rules/frontend/react/  # 查看前端规则

# 3. 应用到项目
cp rules/frontend/react/nextjs-typescript/.cursorrules /你的项目路径/
```

### 热门规则集

| 技术栈 | 规则路径 |
|--------|----------|
| Next.js + TypeScript | `rules/frontend/react/nextjs-typescript/` |
| Vue 3 | `rules/frontend/vue/composition-api/` |
| FastAPI | `rules/backend/python/fastapi-api-example/` |
| Flutter | `rules/mobile/flutter/flutter-app-expert/` |
| Go 后端 | `rules/backend/go/backend-scalability/` |

> 📖 详细教程见 [快速开始指南](./docs/getting-started.md)

---

## 📂 规则集目录

### 应用开发

| 领域 | 目录 | 内容 |
|------|------|------|
| 前端 | [`frontend/`](./rules/frontend/) | React, Vue, Angular, Svelte, TypeScript |
| 后端 | [`backend/`](./rules/backend/) | Node.js, Python, Go, Java, PHP, .NET |
| 移动端 | [`mobile/`](./rules/mobile/) | Flutter, React Native, SwiftUI, Android |
| 数据库 | [`database/`](./rules/database/) | 云原生、时空数据库 |
| 系统编程 | [`systems/`](./rules/systems/) | C++ 现代规范 |

### AI 与数据

| 领域 | 目录 | 内容 |
|------|------|------|
| AI/ML | [`ai/`](./rules/ai/) | 计算机视觉、MLOps、知识图谱 |
| 数据科学 | [`data-science/`](./rules/data-science/) | Pandas, PyTorch, TensorFlow |
| 数据工程 | [`data/`](./rules/data/) | Kafka, Spark, 数据仓库 |

### 基础设施

| 领域 | 目录 | 内容 |
|------|------|------|
| DevOps | [`devops/`](./rules/devops/) | Docker, K8s, Terraform, CI/CD |
| 云服务 | [`cloud/`](./rules/cloud/) | 中间件 |
| 边缘计算 | [`edge/`](./rules/edge/) | AI 推理、模型压缩 |
| 安全 | [`security/`](./rules/security/) | 零信任、隐私计算 |

### 专业领域

| 领域 | 目录 | 内容 |
|------|------|------|
| 区块链 | [`blockchain/`](./rules/blockchain/) | Solidity, Web3, 智能合约 |
| IoT | [`iot/`](./rules/iot/) | 嵌入式、数字孪生 |
| 量子计算 | [`quantum/`](./rules/quantum/) | 量子纠错、超导计算 |
| 生物科技 | [`bio/`](./rules/bio/) | 生物电子、生物传感器 |

### 通用规则

| 类型 | 目录 |
|------|------|
| 代码规范 | [`general/`](./rules/general/) |
| Git 约定 | [`git-conventional-commit-messages/`](./rules/git-conventional-commit-messages/) |
| 测试 | [`gherkin-style-testing-cursorrules-prompt-file/`](./rules/gherkin-style-testing-cursorrules-prompt-file/) |

> 📋 完整目录见 [`rules/`](./rules/) 文件夹

---

## 💡 使用指南

### 单技术栈项目

```bash
cp rules/frontend/react/nextjs-typescript/.cursorrules ./
```

### 多技术栈项目

**方法一：合并规则**

```bash
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**方法二：目录级规则**

```
project/
├── .cursorrules           # 通用规则
├── frontend/
│   └── .cursorrules       # 前端规则
└── backend/
    └── .cursorrules       # 后端规则
```

### 自定义规则

```bash
cat >> .cursorrules << 'EOF'

## 项目自定义规则
- API 路由使用 /api/v1 前缀
- 所有模型必须包含 created_at 和 updated_at
EOF
```

> 📖 更多内容见 [最佳实践](./docs/best-practices.md)

---

## 📊 项目统计

| 指标 | 数值 |
|------|------|
| 规则文件 | 119 个 `.cursorrules` |
| 技术领域 | 43 个分类 |
| 技术文档 | 568 个文件 |
| 翻译进度 | 100% 完成 |

---

## ❓ 常见问题

<details>
<summary><b>Q: 规则文件放在哪里？</b></summary>

放在**项目根目录**。Cursor 打开项目后会自动加载。

</details>

<details>
<summary><b>Q: 规则不生效怎么办？</b></summary>

1. 确认文件在项目根目录
2. 重启 Cursor 编辑器
3. 检查文件编码为 UTF-8
4. 启用设置中的 "Use .cursorrules"

</details>

<details>
<summary><b>Q: 可以同时用多个规则文件吗？</b></summary>

可以。子目录的规则会覆盖父目录规则，利用这个机制可为不同模块设置不同规则。

</details>

<details>
<summary><b>Q: 规则可用于其他 AI 工具吗？</b></summary>

可以。规则本质是纯文本编码指南，适用于 GitHub Copilot、Windsurf 等工具，只需调整格式。

</details>

> 📖 更多问题见 [故障排除](./docs/troubleshooting.md)

---

## 🤝 参与贡献

欢迎所有形式的贡献：

- 🐛 **报告问题** — [提交 Issue](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- 🔧 **改进内容** — 提交 Pull Request
- 🔄 **同步上游** — 帮助与原项目保持同步
- 📝 **完善文档** — 优化使用指南

详见 [贡献指南](./CONTRIBUTING.md)

---

## 📚 文档导航

| 文档 | 说明 |
|------|------|
| [快速开始](./docs/getting-started.md) | 5 分钟上手教程 |
| [最佳实践](./docs/best-practices.md) | 配置和使用建议 |
| [安装指南](./docs/installation-guide.md) | 详细安装配置 |
| [故障排除](./docs/troubleshooting.md) | 问题诊断解决 |
| [更新日志](./CHANGELOG.md) | 版本历史记录 |

---

## 致谢

- 感谢 [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) 提供的优秀基础
- 感谢所有贡献者的努力

---

## 许可证

[MIT License](./LICENSE)

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐ Star**

[⬆️ 返回顶部](#awesome-cursor-rules-中文版)

</div>
