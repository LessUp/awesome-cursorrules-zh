# 项目上下文管理的 Cursor 规则

作者：[@kryptobaseddev](https://github.com/kryptobaseddev)

## 概述

此仓库包含一个全面的 `.cursorrules` 文件，旨在增强与 Cursor AI Agent 协作时的项目管理和开发工作流程。这些规则专门设计用于维护一致的项目上下文并将开发任务分解为可管理、可跟踪的单元。

## 核心概念

### ProjectDocs 结构

```
ProjectDocs/
├── Build_Notes/
│   ├── active/          # 当前构建笔记
│   ├── completed/       # 已完成构建笔记
│   └── archived/        # 已归档构建笔记
└── contexts/
    ├── projectContext.md    # 主项目上下文
    ├── appFlow.md          # 应用流程文档
    ├── authFlow.md         # 认证流程文档
    └── ...                 # 其他上下文文件
```

### 主要功能

- **构建笔记管理**：跟踪开发进度的系统化方法
- **上下文感知**：维护项目上下文以减少 AI 幻觉
- **任务组织**：将复杂任务分解为可管理的单元
- **进度跟踪**：监控任务完成的清晰系统
- **文档标准**：一致的格式和组织

## 技术标准

### 代码质量和风格
- 最大文件大小 150 行；如果超过则重构为更小的模块
- 函数式、声明式编程方法（避免 OOP 和类）
- 使用辅助动词的语义变量命名（例如，`isLoading`、`hasError`）
- 目录和文件使用小写加破折号
- DRY（不要重复自己）原则
- 定期代码审查和重构会议

### 技术栈和框架约定
- Next.js 15+ 使用 App Router 和 React 服务器组件 (RSC)
- 在客户端组件中使用 Zustand 进行状态管理
- 使用 `npx shadcn@latest add` 管理 Shadcn UI
- 移动优先方法和响应式设计
- 强调服务器端逻辑
- 渐进式 Web 应用 (PWA) 结构

### 项目结构
```
├── app/
│   ├── (auth)/           # 认证相关路由/页面
│   ├── (dashboard)/      # 仪表板路由/页面
│   ├── api/              # API 路由
│   └── layout.tsx        # 根布局
├── components/
│   ├── shared/           # 共享 UI 组件
│   ├── features/         # 功能特定组件
│   └── ui/               # Shadcn UI 组件
├── lib/
│   ├── supabase/         # Supabase 客户端和工具
│   ├── constants/        # 全局常量
│   ├── hooks/            # 自定义 React hooks
│   ├── middleware/       # 自定义中间件
│   └── utils/           # 共享工具函数
└── ...
```

## 优势

- 通过一致的上下文减少 AI 幻觉
- 改善项目组织和文档
- 增强团队协作和知识共享
- 维护开发重点和进度跟踪
- 提供清晰的项目历史和决策文档

## 许可证

MIT 许可证 - 可自由用于您的项目并进行修改。

---

创建者：[@kryptobaseddev](https://github.com/kryptobaseddev)
