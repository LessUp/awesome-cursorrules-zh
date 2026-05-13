# Elixir 工程师指南 .cursorrules 提示文件

作者：Zane Riley

## 您可以构建的内容
Elixir 微服务平台：开发用于创建和管理微服务的平台，使用 Elixir 语言，利用 Docker 进行容器化，PostgreSQL 进行数据存储。使用 Phoenix LiveView 实现实时数据更新，并通过 Phoenix LiveDashboard 提供监控仪表板。

实时协作工具：使用 Elixir 和 Phoenix LiveView 创建 Web 应用程序，允许多个用户同时协作项目。结合 Tailwind CSS 实现现代响应式样式，使用 Ecto 管理 PostgreSQL 中的项目数据。

自动化 DevOps 流水线：设计一个 CI/CD 工具，使用 Docker 自动化部署流程，集成 LeftHook 处理 Git 钩子，并使用 Sobelow 和 Credo 扫描代码的安全性和风格问题。利用 ExUnit 进行测试自动化，ExCoveralls 生成测试覆盖率报告。

本地化管理系统：构建一个使用 Gettext 管理翻译的系统，让用户能够轻松添加和更新项目的多语言支持。集成文件系统监视器以自动重新加载更改，并提供用户友好的仪表板管理文本。

安全通信平台：使用 Elixir 和 Phoenix 开发安全消息应用，整合 Swoosh 发送电子邮件，Finch 处理 HTTP 请求。使用 Sobelow 进行持续安全扫描，Plug 实现自定义中间件集成，确保数据安全。

事件监控与响应工具：创建使用 DNS Cluster 进行网络监控和 Phoenix LiveDashboard 提供可视化洞察的警报系统。利用 Ecto 和 PostgreSQL 记录事件数据，Tailwind CSS 增强 UI/UX 设计。

基于云的电子商务解决方案：使用 Phoenix LiveView 构建动态产品列表，PostgreSQL 管理交易数据，打造可扩展的电商平台。使用 Docker 简化部署，Swoosh 发送订单确认邮件。

交互式学习平台：开发交互式编程教程平台，利用 Phoenix LiveView 提供实时反馈，Ecto 存储练习题。支持 Gettext 多语言翻译，并借助 Tailwind CSS 确保流畅的样式体验。

API 管理与网关：使用 Elixir 的 Plug 开发 API 网关解决方案，路由请求，允许开发者设置 API 使用规则，并通过 Phoenix LiveDashboard 监控流量。使用 Finch 处理出站 HTTP 请求，Jason 进行数据序列化。

可定制仪表板工具：创建使用 Phoenix LiveDashboard 构建定制仪表板的工具，让用户通过 Ecto 集成指标，并通过 Tailwind CSS 实现可视化。通过 Phoenix LiveView 提供实时数据更新。

Q1：如何在使用 Ecto 的分布式 Elixir 服务中管理数据一致性？
Q2：使用 Phoenix LiveView 构建应用时应考虑哪些安全最佳实践？
Q3：Docker 如何提升 Elixir 应用的可扩展性？

## 优势


## 概要
使用 Elixir 和 Phoenix 的开发者将通过标准化健壮的提交消息和构建具有全面代码质量与 CI 实践的可扩展、可维护应用而受益。

## .cursorrules 提示概述
.cursorrules 文件概述了专家级高级 Elixir 工程师在使用包含 Elixir、Phoenix、Docker 及其他各种工具和库的技术栈时的指南。它强调在开发前充分考虑代码需求的重要性，以及在响应后提供有见地的后续问题。文件还提供了编写提交消息的结构化方法，详细说明了软件项目中更改的类型、可选范围、描述以及潜在的正文或页脚。这确保了代码更改的清晰性、一致性和正确分类。
