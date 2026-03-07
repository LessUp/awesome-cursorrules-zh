# Awesome Cursor Rules 中文版

<div align="center">

[![项目状态](https://img.shields.io/badge/status-completed-green?style=for-the-badge)](https://github.com/LessUp/awesome-cursorrules-zh)
[![翻译进度](https://img.shields.io/badge/progress-100%25-brightgreen?style=for-the-badge)](https://github.com/LessUp/awesome-cursorrules-zh)
[![GitHub Stars](https://img.shields.io/github/stars/LessUp/awesome-cursorrules-zh?style=for-the-badge&logo=github&label=Stars)](https://github.com/LessUp/awesome-cursorrules-zh/stargazers)
[![Fork](https://img.shields.io/github/forks/LessUp/awesome-cursorrules-zh?style=for-the-badge&logo=github&label=Fork)](https://github.com/LessUp/awesome-cursorrules-zh/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)
[![贡献指南](https://img.shields.io/badge/Contributing-Welcome-brightgreen.svg?style=for-the-badge)](./CONTRIBUTING.md)

**一个由社区驱动、为中文开发者量身打造的 [Cursor](https://cursor.sh/) AI 编程规则集合。**

**所有规则集已完成高质量翻译，涵盖 43 个技术领域、550+ 规则文件。**

[🚀 快速开始](#-快速开始) · [📂 规则集目录](#-规则集目录) · [💡 使用指南](#-使用指南与最佳实践) · [❓ 常见问题](#-常见问题) · [🤝 参与贡献](#-参与贡献)

</div>

---

## 📖 目录

- [这是什么？](#-这是什么)
- [什么是 .cursorrules？](#-什么是-cursorrules)
- [项目亮点](#-项目亮点)
- [快速开始](#-快速开始)
- [规则集目录](#-规则集目录)
- [项目结构](#-项目结构)
- [使用指南与最佳实践](#-使用指南与最佳实践)
- [项目现状与未来计划](#-项目现状与未来计划)
- [常见问题](#-常见问题)
- [参与贡献](#-参与贡献)
- [致谢](#-致谢)
- [许可证](#-许可证)

---

## 🤔 这是什么？

[Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) 是一个优秀的 Cursor AI 编程助手规则集合，但原项目主要面向英文用户。本项目致力于：

1. **精准翻译** — 提供高质量的中文翻译，消除语言障碍。
2. **结构优化** — 按技术领域重新组织目录结构，方便快速查找。
3. **内容增强** — 补充更符合国内技术生态的规则和最佳实践。

## 📌 什么是 .cursorrules？

`.cursorrules` 是 [Cursor](https://cursor.sh/) AI 代码编辑器的项目级配置文件。将该文件放在项目根目录下，Cursor 的 AI 助手会自动读取其中的规则，从而：

- **遵循编码规范** — 按照你指定的代码风格、命名约定、架构模式生成代码。
- **了解技术栈** — 知道项目使用的框架、库和工具链，给出更精准的建议。
- **提升代码质量** — 自动应用最佳实践，减少低质量代码的产出。

> 💡 简单来说，`.cursorrules` 就是你给 AI 助手写的一份"工作手册"——告诉它你的项目该怎么写代码。

## 🌟 项目亮点

- **🎯 专为中文优化** — 所有规则经过精心翻译和本地化，术语准确，符合中文语境。
- **🗂️ 清晰的结构** — 按技术领域分类，覆盖前端、后端、AI、DevOps 等 43 个方向。
- **✅ 开箱即用** — 将 `.cursorrules` 文件复制到项目根目录即可生效。
- **📈 社区驱动** — 欢迎任何人参与贡献，共同打造最好的中文规则库。
- **🛡️ 质量保障** — 自动化校验脚本 + 术语一致性检查 + 严格的 PR 审核流程。
- **📦 规模丰富** — 92 个 `.cursorrules` 规则文件，550+ 技术文档，覆盖主流与前沿领域。

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

我们提供了覆盖 **43 个技术领域** 的规则集，以下按类别分组展示：

### 🖥️ 应用开发

| 领域 | 目录 | 说明 |
|------|------|------|
| **前端开发** | [`frontend/`](./rules/frontend/) | React, Vue, Angular, Svelte, SolidJS, TypeScript, 微前端 等 (214 个文件) |
| **后端开发** | [`backend/`](./rules/backend/) | Node.js, Python, Go, Java, Kotlin, .NET, PHP, Elixir 等 (132 个文件) |
| **移动开发** | [`mobile/`](./rules/mobile/) | Flutter, React Native, SwiftUI, Android Jetpack Compose (30 个文件) |
| **数据库** | [`database/`](./rules/database/) | 云原生数据库、时空数据库 |
| **CMS** | [`cms/`](./rules/cms/) | Drupal 内容管理系统 |
| **系统编程** | [`systems/`](./rules/systems/) | C++ 现代编程规范 |

### 🤖 AI 与数据

| 领域 | 目录 | 说明 |
|------|------|------|
| **AI / 机器学习** | [`ai/`](./rules/ai/) | 计算机视觉、边缘 AI、联邦学习、知识图谱、MLOps、光子神经网络 |
| **数据科学** | [`data-science/`](./rules/data-science/) | Python 数据处理、Pandas、Matplotlib |
| **数据工程** | [`data/`](./rules/data/) | 数据仓库、Kafka/Pulsar、Spark/Flink |

### ⚙️ 基础设施与运维

| 领域 | 目录 | 说明 |
|------|------|------|
| **DevOps** | [`devops/`](./rules/devops/) | Docker, Kubernetes, CI/CD, Terraform, Serverless, 服务网格, 可观测性 等 (40 个文件) |
| **云服务** | [`cloud/`](./rules/cloud/) | 中间件 |
| **边缘计算** | [`edge/`](./rules/edge/) | AI 推理、边缘计算、模型压缩 |
| **分布式计算** | [`compute/`](./rules/compute/) | 分布式系统 |
| **网络** | [`network/`](./rules/network/) | 卫星互联网 |
| **存储** | [`storage/`](./rules/storage/) | DNA 存储 |

### 🔗 专业领域

| 领域 | 目录 | 说明 |
|------|------|------|
| **区块链** | [`blockchain/`](./rules/blockchain/) | Solidity, Web3, 智能合约安全, 高级协议 |
| **安全** | [`security/`](./rules/security/) | 同态加密、隐私计算、安全多方计算、零信任 等 |
| **IoT / 物联网** | [`iot/`](./rules/iot/) | 数字孪生、嵌入式开发、IoT 平台 |
| **游戏开发** | [`gaming/`](./rules/gaming/) | 云游戏 |
| **AR / VR** | [`ar-vr/`](./rules/ar-vr/) | 增强现实 |

### 🔬 前沿科技

| 领域 | 目录 | 说明 |
|------|------|------|
| **量子计算** | [`quantum/`](./rules/quantum/) | 量子纠错、超导量子计算 |
| **机器人** | [`robotics/`](./rules/robotics/) | ROS 机器人操作系统 |
| **硬件** | [`hardware/`](./rules/hardware/) | 碳基芯片、神经形态芯片、光子计算、超导存储 |
| **生物科技** | [`bio/`](./rules/bio/) | 生物电子、生物 CPU、生物传感器融合 |
| **新兴技术** | [`emerging-tech/`](./rules/emerging-tech/) | 生物计算、量子通信、量子计算 |
| **科学计算** | [`science/`](./rules/science/) | 生物信息学 |
| **仿真模拟** | [`simulation/`](./rules/simulation/) | 数字孪生仿真 |

### 🏢 平台与自动化

| 领域 | 目录 | 说明 |
|------|------|------|
| **平台开发** | [`platform/`](./rules/platform/) | 低代码、无代码、元宇宙 |
| **工业自动化** | [`industrial/`](./rules/industrial/) | 工业自动化 |
| **流程自动化** | [`automation/`](./rules/automation/) | RPA 机器人流程自动化 |

### 📋 通用与独立规则集

| 领域 | 目录 | 说明 |
|------|------|------|
| **通用规则** | [`general/`](./rules/general/) | 代码规范指南、Git 约定 |
| **代码规范** | [`code-guidelines-cursorrules-prompt-file/`](./rules/code-guidelines-cursorrules-prompt-file/) | 代码规范提示 |
| **代码风格** | [`code-style-consistency-cursorrules-prompt-file/`](./rules/code-style-consistency-cursorrules-prompt-file/) | 代码风格一致性 |
| **结对面试** | [`code-pair-interviews/`](./rules/code-pair-interviews/) | 编程面试助手 |
| **Convex** | [`convex-cursorrules-prompt-file/`](./rules/convex-cursorrules-prompt-file/) | Convex 后端平台 |
| **DragonRuby** | [`dragonruby-best-practices-cursorrules-prompt-file/`](./rules/dragonruby-best-practices-cursorrules-prompt-file/) | DragonRuby 游戏引擎最佳实践 |
| **Git 提交** | [`git-conventional-commit-messages/`](./rules/git-conventional-commit-messages/) | 约定式提交消息 |
| **测试相关** | [`gherkin-style-testing-cursorrules-prompt-file/`](./rules/gherkin-style-testing-cursorrules-prompt-file/) [`xray-test-case-cursorrules-prompt-file/`](./rules/xray-test-case-cursorrules-prompt-file/) | Gherkin 风格测试、Xray 测试用例 |
| **工程模板** | [`engineering-ticket-template-cursorrules-prompt-file/`](./rules/engineering-ticket-template-cursorrules-prompt-file/) | 工程工单模板 |

> 📋 完整目录请浏览 [`rules/`](./rules/) 文件夹查看所有规则集。

## 🏗️ 项目结构

```
awesome-cursorrules-zh/
├── rules/                  # 所有规则集（按技术领域分类）
│   ├── frontend/           #   前端 (React, Vue, Angular, Svelte ...)
│   ├── backend/            #   后端 (Node.js, Python, Go, Java ...)
│   ├── mobile/             #   移动端 (Flutter, React Native ...)
│   ├── devops/             #   DevOps (Docker, K8s, Terraform ...)
│   ├── ai/                 #   AI / 机器学习
│   ├── security/           #   安全
│   └── ...                 #   更多领域 (共 43 个分类)
├── docs/                   # 项目文档
│   ├── getting-started.md  #   快速开始指南
│   ├── best-practices.md   #   最佳实践
│   ├── installation-guide.md #  安装指南
│   └── troubleshooting.md  #   故障排除
├── scripts/                # 自动化工具
│   └── validate_translations.py  # 翻译质量校验脚本
├── .github/                # GitHub 配置
│   ├── workflows/          #   CI/CD 质量检查
│   ├── ISSUE_TEMPLATE/     #   Issue 模板
│   └── pull_request_template.md
├── CONTRIBUTING.md         # 贡献指南
├── CODE_OF_CONDUCT.md      # 行为准则
├── CHANGELOG.md            # 更新日志
└── README.md               # 本文件
```

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
| **技术领域** | 43 个分类 |
| **规则文件** | 92 个 `.cursorrules` 文件 |
| **总文件数** | 550+ 个技术文档 |
| **更新日志** | [CHANGELOG.md](./CHANGELOG.md) |

项目已进入**持续维护和优化阶段**，未来工作重点：

- **同步上游更新** — 定期与 [原项目](https://github.com/PatrickJS/awesome-cursorrules) 保持同步，引入新规则。
- **质量优化** — 根据社区反馈，持续改进翻译质量和规则的实用性。
- **文档完善** — 优化使用指南和项目文档，提升用户体验。

## ❓ 常见问题

<details>
<summary><b>Q: .cursorrules 文件放在哪里？</b></summary>

将 `.cursorrules` 文件放在**项目根目录**下。Cursor 打开项目后会自动检测并加载该文件。

</details>

<details>
<summary><b>Q: 规则不生效怎么办？</b></summary>

1. 确认 `.cursorrules` 文件在项目根目录（不是仓库根目录）
2. 重启 Cursor 编辑器
3. 检查文件编码为 UTF-8
4. 确保 Cursor 设置中"Use .cursorrules"选项已启用

更多排查方法请参阅 [故障排除指南](./docs/troubleshooting.md)。

</details>

<details>
<summary><b>Q: 可以同时使用多个规则文件吗？</b></summary>

Cursor 按目录层级查找 `.cursorrules` 文件，子目录的规则会覆盖父目录的规则。你可以利用这个机制为不同子项目设置不同规则：

```
your-project/
├── .cursorrules              # 通用规则
├── frontend/
│   └── .cursorrules          # 前端规则（优先于根目录规则）
└── backend/
    └── .cursorrules          # 后端规则（优先于根目录规则）
```

</details>

<details>
<summary><b>Q: 如何选择适合自己项目的规则集？</b></summary>

- **新项目** — 选择对应技术栈的完整规则集，例如 `nextjs-typescript`。
- **现有项目** — 从 `general/code-guidelines` 通用规则开始，逐步引入特定规则。
- **多技术栈** — 可以合并多个规则文件或使用目录特定规则。

详细指导请查阅 [最佳实践](./docs/best-practices.md)。

</details>

<details>
<summary><b>Q: 这些规则只能用于 Cursor 吗？</b></summary>

`.cursorrules` 是 Cursor 编辑器的专有格式。但规则文件本质上是纯文本的编码指南，其中的最佳实践和编码规范**同样适用于**其他 AI 编码助手（如 GitHub Copilot、Windsurf 等），只需按目标工具的格式稍作调整即可。

</details>

<details>
<summary><b>Q: 如何贡献翻译或改进？</b></summary>

1. Fork 本仓库
2. 创建分支：`git checkout -b fix/your-improvement`
3. 进行修改并提交 Pull Request

详情请阅读 [贡献指南](./CONTRIBUTING.md)。

</details>

## 🤝 参与贡献

我们欢迎各种形式的贡献！

- **🐛 报告问题** — 发现翻译不准确或规则已过时？请通过 [Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues) 告诉我们。
- **🔧 改进翻译** — 提交 Pull Request 帮助优化现有内容。
- **🔄 同步上游** — 帮助项目与 [原版](https://github.com/PatrickJS/awesome-cursorrules) 保持同步。
- **📝 完善文档** — 改进使用指南、添加使用示例、优化项目文档。

在开始之前，请阅读 [**贡献指南**](./CONTRIBUTING.md) 和 [**行为准则**](./CODE_OF_CONDUCT.md)。

## 🐛 遇到问题？

请查阅 [**故障排除指南**](./docs/troubleshooting.md)，里面包含常见问题的解决方案和诊断工具。

## 📚 相关文档

| 文档 | 说明 |
|------|------|
| [快速开始指南](./docs/getting-started.md) | 从零开始使用规则集的完整教程 |
| [最佳实践](./docs/best-practices.md) | 规则选择、配置和团队协作的最佳实践 |
| [安装指南](./docs/installation-guide.md) | 详细的环境安装与配置说明 |
| [故障排除](./docs/troubleshooting.md) | 常见问题诊断与解决方案 |
| [贡献指南](./CONTRIBUTING.md) | 参与项目贡献的流程与规范 |
| [更新日志](./CHANGELOG.md) | 项目版本历史与变更记录 |

## � 致谢

感谢 [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) 原项目提供的优秀基础。

感谢所有为本项目贡献翻译和改进的开发者们！

## 📄 许可证

本项目采用 [MIT 许可证](./LICENSE) 授权。

---

<div align="center">

**如果这个项目对你有帮助，请给我们一个 ⭐ Star**

**让更多中文开发者受益于优质的 AI 编程规则！**

[⬆️ 回到顶部](#awesome-cursor-rules-中文版)

</div>
