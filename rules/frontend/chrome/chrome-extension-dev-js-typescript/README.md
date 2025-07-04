# Chrome 扩展开发 JS/TypeScript .cursorrules 提示文件

**作者**: penkzhou

## 可构建内容

*   **交互式学习 Chrome 扩展**：开发提供浏览器内交互式编程课程和测验的扩展，利用 TypeScript 进行练习类型检查，使用 Radix UI 实现美观友好的界面。
*   **隐私优先广告拦截器**：创建使用最新 manifest 版本(v3)并遵循严格内容安全策略的高效广告拦截工具，使用 JavaScript 动态隐藏广告，Tailwind 设计 UI 组件。
*   **网站性能分析工具**：开发分析并报告网站性能的扩展，利用 Chrome 性能 API，使用 Shadcn UI 展示数据仪表板，基于 CSS 和 JS 最佳实践提供优化建议。
*   **带标签系统的书签管理器**：构建允许用户通过强大标签系统管理书签的扩展，使用 chrome.storage 进行状态管理，采用 Flexbox 布局和 CSS Grid 实现简洁响应式 UI。
*   **安全密码管理器**：创建基于 TypeScript 的密码管理扩展，使用 chrome.storage API 实现安全存储机制，通过精心设计的弹出界面访问密码。
*   **跨浏览器标签同步器**：开发利用 WebExtensions API 同步不同浏览器间打开标签的扩展，采用事件驱动架构检测标签变化，使用 chrome.storage 保持持久状态。
*   **可定制新闻聚合器**：构建从用户选择源聚合新闻的扩展，实现可配置选项页面输入偏好，利用 Tailwind 保持 UI 一致性和响应性。
*   **专注模式生产力工具**：创建通过阻止干扰网站和使用 chrome.alarms 发送定时提醒帮助用户保持专注的扩展，实现可选权限允许用户自定义阻止站点列表。
*   **语言翻译助手**：开发提供页面翻译和语言学习辅助的扩展，利用 Web API 进行翻译，使用 shadcn UI 以直观工具提示或侧边栏形式展示翻译结果。
*   **用户活动追踪器**：构建追踪记录用户网站活动以分析时间分配的扩展，确保数据安全存储并通过匿名化追踪数据实现隐私保护功能。
*   **自动化表单填充工具**：创建基于 TypeScript 的自动检测在线表单并使用保存信息填充的扩展，采用安全存储系统，包含管理存储数据的弹出窗口。
*   **带上下文通知的待办清单**：开发将待办清单集成到浏览器中的扩展，根据打开的标签或时间等上下文发送通知，利用 chrome.alarms 和 chrome.notifications。
*   **图片下载整理器**：创建允许用户从网页下载图片到指定文件夹的扩展，使用 Radix UI 设计分类下载队列的简单拖放界面。
*   **面向开发者的 SEO 分析工具**：构建提供网页实时 SEO 洞察的扩展，利用浏览器 API 访问页面元数据，使用 Tailwind 呈现风格统一的综合报告。
*   **语法拼写检查器**：开发高亮网页文本输入中语法拼写错误的扩展，通过后台脚本使用可靠语言处理 API 分析并提供修正建议。

## 概述

开发者将受益于使用现代 JavaScript 实践和 TypeScript 构建结构良好、安全高效的 Chrome 扩展，确保跨浏览器兼容性和最优性能。

## .cursorrules 提示概述

.cursorrules 文件为使用 JavaScript、TypeScript、HTML 和 CSS 开发 Chrome 扩展提供指南。涵盖代码风格和结构，提倡简洁的函数式编程与描述性命名约定。鼓励使用 TypeScript 确保类型安全。文件概述了扩展架构的最佳实践，包括关注点分离、状态管理和消息传递。强调安全性，提供权限、内容安全策略和数据验证指南。包含 UI 和样式建议、性能优化技巧及浏览器 API 使用策略。还涉及跨浏览器兼容性、测试调试实践和上下文感知开发注意事项。文件强调遵循 Chrome 扩展文档中的最佳实践的重要性。
