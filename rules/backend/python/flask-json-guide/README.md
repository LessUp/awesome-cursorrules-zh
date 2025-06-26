# Python Flask JSON 指南 .cursorrules 提示文件

作者：Drawscape

## 你可以构建什么
Drawscape Factorio 可视化应用：创建一个 Web 应用，允许用户上传来自 FUE5 MOD 的 JSON 文件，并使用自定义主题、配色方案和图层生成其 Factorio 设置的 SVG 可视化。
Factorio 布局协作平台：开发一个平台，让 Factorio 玩家可以共享和协作工厂布局。用户可以导入 FUE5 MOD 数据，生成 SVG 视觉效果，并实时注释或修改布局。
Factorio 交互式 SVG 编辑器：设计一个工具，不仅可以可视化，还允许用户交互式地编辑 Factorio SVG 布局，通过用户友好的界面更改资产、传送带、墙壁等元素。
Factorio 设置自动报告生成器：构建一个自动化系统，该系统接收来自 FUE5 MOD 的 JSON 输入，使用 Drawscape Factorio 进行可视化，并创建包含视觉和文本数据分析的工厂设置详细报告。
Factorio 主题定制门户：提供一项服务，允许用户为其 Factorio 可视化定制主题和配色方案，并使用 Drawscape Factorio 模块将其应用于布局。
Factorio 可视化 API 服务：开发一个 API，提供端点供用户提交 FUE5 MOD JSON 数据并接收 Factorio 设置的定制 SVG 可视化，轻松集成到现有系统中。
Factorio 玩家教育资源：创建教程和文档等教育材料，介绍如何使用 Drawscape Factorio 模块来可视化和优化 Factorio 设置，帮助玩家有效学习使用该工具。
Factorio 社区展示：启动一个网站，Factorio 玩家可以在此公开分享他们最佳的工厂布局，这些布局使用 Drawscape Factorio 模块进行可视化和增强，以促进社区参与和灵感。
用于 IDE 的 Drawscape Factorio 插件：为流行的 IDE 开发一个插件，集成 Drawscape Factorio 模块，让开发人员在编码时可以轻松地可视化 FUE5 MOD JSON 数据。
自定义 Factorio 可视化主题市场：创建一个市场，设计师可以在其中销售用于 Drawscape Factorio 模块的自定义主题和配色方案，使用户能够进一步个性化其可视化。

## 优点


## 概要
在 Factorio 中从事自动化和可视化工作的开发人员可以使用此提示创建一个 Flask API，该 API 使用 Drawscape Factorio 将来自 FUE5 MOD 的 JSON 数据转换为 SVG。

## .cursorrules 提示概述
该 .cursorrules 文件提供了使用自定义 Drawscape Factorio Python 模块的说明。它包括如何导入模块、从 FUE5 MOD 加载 JSON 文件、解析 JSON 数据，然后使用解析后的数据生成具有特定设置（如主题名称、配色方案和可见图层）的 Factorio 主题 SVG 文件的示例。此外，它还提供了一个 `environment.yml` 文件，列出了运行项目所需的依赖项和 Python 版本，包括 Flask、svgwrite 和 numpy 等库。 