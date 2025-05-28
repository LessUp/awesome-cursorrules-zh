# UIKit 指南 .cursorrules 提示文件

作者：MoonAndEye

## 你可以构建什么
iOS 应用程序部署 - 原生 iOS 应用程序的 App Store 分发包。提供遵循 Apple 提交指南的生产就绪 IPA 包。实现公开发布所需的配置文件、权限和合规措施。

## 概要
使用 SnapKit 实现自动布局，不使用 Storyboard/XIB 以编程方式创建 UI，使用工厂/构建器模式管理 UI 组件，实现标准化 ViewModel，并使用基于闭包的事件处理机制。

## .cursorrules 提示概述
.cursorrules 文件为使用 Swift 和 UIKit 开发 iOS 应用程序提供了全面的指南。它强调通过遵循最新文档和功能来编写可维护和清洁的代码。指导原则专注于使用 SnapKit 实现响应式布局，避免 Storyboards/XIBs，并以编程方式创建所有 UI 组件。它促进使用视图组合和自定义视图子类以实现可重用性。

文件中概述的原则包括：
1. 自动布局：使用 SnapKit 进行响应式布局，支持动态类型和安全区域。
2. 编程式 UI：直接在代码中实现 UI 组件，避免 Storyboards/XIBs。
3. MVC/MVVM 原则：UI 组件不应直接访问模型或 DTO。使用 ViewController、工厂或构建器模式。
4. 事件处理：使用闭包传递事件，并确保闭包将 'self' 作为参数传递以进行外部对象识别。

通过遵循这些指导原则，开发人员可以创建高效、可扩展和可维护的 iOS 应用程序，遵循最佳实践和 Apple 的 MVC 原则。
