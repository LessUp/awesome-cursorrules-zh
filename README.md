# Awesome Cursor Rules 中文版

<div align="center">

[![项目状态](https://img.shields.io/badge/status-completed-green?style=for-the-badge)](https://github.com/LessUp/awesome-cursorrules-zh)
[![翻译进度](https://img.shields.io/badge/progress-100%25-brightgreen?style=for-the-badge)](./docs/translation-progress.md)
[![GitHub Stars](https://img.shields.io/github/stars/LessUp/awesome-cursorrules-zh?style=for-the-badge&logo=github&label=Stars)](https://github.com/LessUp/awesome-cursorrules-zh/stargazers)
[![Fork](https://img.shields.io/github/forks/LessUp/awesome-cursorrules-zh?style=for-the-badge&logo=github&label=Fork)](https://github.com/LessUp/awesome-cursorrules-zh/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)
[![贡献指南](https://img.shields.io/badge/Contributing-Welcome-brightgreen.svg?style=for-the-badge)](./CONTRIBUTING.md)

**一个由社区驱动、为中文开发者量身打造的 `Awesome Cursor Rules` 高质量翻译和优化项目。目前已完成所有规则集的翻译工作。**

本项目的目标不仅是翻译，更是对原项目进行结构优化和内容增强，使其更符合中文开发者的使用习惯。

[🚀 快速开始](#-快速开始) • [🌟 项目亮点](#-项目亮点) • [🗺️ 路线图](#-项目路线图) • [🤝 参与贡献](#-参与贡献)

</div>

---

## 🤔 这是什么？

`Awesome Cursor Rules` 是一个优秀的 [Cursor](https://cursor.sh/) AI 编程助手规则集合，但原项目主要面向英文用户。本项目致力于：

1.  **精准翻译**: 提供高质量的中文翻译，消除语言障碍。
2.  **结构优化**: 按照 `后端/前端/数据库/AI` 等技术领域优化目录结构，方便查找。
3.  **内容增强**: 补充更符合国内技术生态的规则和最佳实践。

## 🌟 项目亮点

-   **🎯 专为中文优化**: 所有规则都经过精心翻译和本地化，术语准确，符合中文语境。
-   **🗂️ 清晰的结构**: 按技术领域重新组织，一目了然。
-   **✅ 开箱即用**: 只需将 `.cursorrules` 文件复制到项目根目录即可生效。
-   **📈 社区驱动**: 欢迎任何人参与贡献，共同打造最好的中文规则库。
-   **📝 完善的文档**: 提供详尽的《入门指南》、《贡献指南》和《行为准则》。

## 🚀 快速开始

### 1. 克隆本仓库

```bash
git clone https://github.com/LessUp/awesome-cursorrules-zh.git
cd awesome-cursorrules-zh
```

### 2. 浏览并选择规则

我们提供了覆盖多种技术栈的规则集，目录结构如下：

```
rules/
├── backend/           # 后端技术栈 (Node.js, Python, Go, ...)
├── frontend/          # 前端技术栈 (React, Vue, Angular, ...)
├── mobile/            # 移动端开发 (React Native, Flutter, ...)
├── database/          # 数据库相关
├── ai/                # 人工智能与机器学习
└── general/           # 通用规则
```

根据你的项目需求，进入相应目录找到最适合的规则。

### 3. 复制规则到你的项目

将选定的 `.cursorrules` 文件复制到你项目的根目录。

```bash
# 示例：为 Next.js + TypeScript 项目复制规则
cp rules/frontend/react/nextjs-typescript/.cursorrules /path/to/your/project/
```

### 4. 在 Cursor 中享受智能编码

用 Cursor 打开你的项目，它将自动加载 `.cursorrules` 文件。现在，你可以在 AI 辅助下进行高效、规范的编码了！

## 🗺️ 项目维护与未来计划

随着所有规则集的翻译工作顺利完成，项目现已进入持续维护和优化阶段。我们欢迎您参与进来，共同确保规则集的质量与时俱进。

未来的工作重点包括：
- **同步上游更新**：定期与 [原项目](https://github.com/PatrickJS/awesome-cursorrules) 保持同步，引入新的规则。
- **质量优化**：根据社区反馈，持续改进翻译质量和规则的实用性。
- **文档完善**：优化使用指南和项目文档，提升用户体验。

## 📊 项目现状
- **翻译进度**: 100% 完成
- **质量状态**: 高质量翻译，已审核
- **最新版本**: v1.4.0
- **查看详细进度**：[翻译进度报告](./docs/translation-progress.md)

## 🤝 参与贡献
我们热烈欢迎各种形式的贡献！现在项目进入维护阶段，您可以通过以下方式参与：
- **报告问题**：发现翻译不准确或规则已过时，请通过 [Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues) 告诉我们。
- **改进翻译**：提交 Pull Request 帮助我们优化现有内容。
- **同步上游**：帮助项目与 [原版 awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) 保持同步。

在开始之前，请阅读我们的 [**贡献指南 (CONTRIBUTING.md)**](./CONTRIBUTING.md)，它详细说明了如何参与项目维护。

## ✨ 行为准则

为了营造一个开放和友好的社区环境，我们期望所有参与者都能遵守 [**行为准则 (CODE_OF_CONDUCT.md)**](./CODE_OF_CONDUCT.md)。

## 📄 许可证

本项目采用 [MIT 许可证](./LICENSE)授权。

## 🛡️ 质量保障
- 自动化校验脚本确保翻译一致性
- 专业术语词典统一技术词汇
- 严格的PR审核流程

## 💡 使用指南与最佳实践

### 如何选择规则？

- **新项目**：建议选择对应技术栈的**完整规则集**，从一开始就建立高标准。例如，使用 `nextjs-typescript` 而不是 `react-basic`。
- **现有项目**：可以从 `general/code-guidelines` 这类**通用规则**开始，逐步引入更具体的规则，以避免对现有代码库产生过多干扰。

### 如何处理多技术栈项目？

对于包含前后端的全栈项目，你有两种选择：

1.  **合并规则文件**：将前端和后端的规则集合并成一个 `.cursorrules` 文件放在项目根目录。
    ```bash
    # 示例：合并 React 和 FastAPI 的规则
    cat rules/frontend/react/react-best-practices/.cursorrules > /path/to/your/project/.cursorrules
    echo "" >> /path/to/your/project/.cursorrules
    cat rules/backend/python/fastapi-best-practices/.cursorrules >> /path/to/your/project/.cursorrules
    ```
2.  **使用目录特定规则**：在项目根目录放置通用规则，在 `frontend/` 和 `backend/` 等子目录中分别放置特定规则。Cursor 会优先使用更深层级的规则。

### 如何与团队协作？

1.  **版本控制**：将 `.cursorrules` 文件提交到 Git 仓库中，确保团队成员使用统一的编码规范。
    ```bash
    git add .cursorrules
    git commit -m "feat: add cursor ai coding standards"
    ```
2.  **文档说明**：在团队的 `README.md` 中简要说明，提醒新成员安装 Cursor 并遵循规则。

### 如何自定义规则？

直接编辑项目根目录的 `.cursorrules` 文件，在文件末尾添加你的团队或项目特有的规则，例如：
- `使用团队约定的 API 命名法`
- `所有数据库模型必须包含 created_at 和 updated_at 字段`

---

## 🐛 遇到问题？

如果规则不生效或遇到其他问题，请查阅我们的 [**故障排除指南 (docs/troubleshooting.md)**](./docs/troubleshooting.md)，里面包含了常见问题的解决方案和诊断工具。

## 参与贡献

我们采用标准化的翻译工作流程，欢迎所有开发者参与贡献：

### 快速开始
1. **Fork 本仓库** 并创建你的功能分支
2. **选择翻译目标** - 从[高优先级列表](./CONTRIBUTING.md#翻译优先级)中选择未翻译的规则集
3. **遵循翻译标准** - 查看 [贡献指南](./CONTRIBUTING.md) 了解详细的翻译流程和质量要求
4. **提交 Pull Request** - 我们会及时审核并提供反馈

### 贡献方式
- **🌟 翻译新规则集** - 优先翻译高需求技术栈
- **🔧 改进现有翻译** - 提升翻译质量和准确性
- **📚 完善文档** - 改进项目文档和使用指南
- **🐛 报告问题** - 发现问题请及时反馈

### 翻译标准
- 保持技术术语的准确性和一致性
- 确保中文表达自然流畅
- 保留原文的代码示例和格式
- 遵循项目的翻译术语表

---

## 致谢

感谢 [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) 原项目提供的优秀基础。

感谢所有为本项目贡献翻译和改进的开发者们！

## 许可证

本项目采用 [MIT 许可证](./LICENSE) 开源。

---

<div align="center">

**如果这个项目对你有帮助，请给我们一个 ⭐**

**让更多中文开发者受益于优质的 AI 编程规则！**

[⬆️ 回到顶部](#awesome-cursor-rules-中文版-)

</div>
