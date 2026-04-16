# 更新日志

本项目所有重要变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [未发布]

## [2.1.0] - 2025-04-16

### 🎉 亮点

- **双语文档支持**：完整的中文和英文文档
- **专业重构**：重构文档结构，提升导航和清晰度
- **新增 API 参考**：添加全面的规则格式参考指南

### 📚 文档

#### 新增
- 完整的英文文档集 `docs/en/`
  - README.md - 文档首页
  - getting-started.md - 快速开始指南
  - installation-guide.md - 完整安装指南
  - best-practices.md - 规则使用最佳实践
  - troubleshooting.md - 全面故障排除指南
  - api-reference.md - 规则文件格式参考
- 中文文档重构至 `docs/zh/`
  - 所有文档专业重写
  - 改进结构和导航
  - 添加文档间交叉引用
- 新增 `docs/assets/` 目录用于共享资源

#### 变更
- 原始文档移至 `docs/zh/` 目录
- 增强文档格式和示例
- 添加快速导航和交叉链接
- 改进故障排除章节，增加诊断脚本

### 🔧 基础设施

#### 新增
- 所有文档支持双语导航
- 语言切换徽章
- 改进的文档模板

---

## [2.0.0] - 2025-01-16

### ✨ 新特性

#### 新增规则（29 个文件）

**React 生态**
- `apollo-graphql` - Apollo GraphQL 集成
- `mobx` - MobX 状态管理
- `nextjs-14-seo` - Next.js 14 SEO 优化
- `nextjs-react-ts` - Next.js React TypeScript
- `nextjs-supabase` - Next.js + Supabase
- `nextjs-ui` - Next.js UI 开发
- `react-components` - React 组件最佳实践
- `react-typescript` - React + TypeScript
- `styled-components` - Styled Components 指南

**后端开发**
- `go-backend` - Go 后端扩展性
- `java-springboot` - Java Spring Boot 模式
- `django-best-practices` - Python Django 指南
- `nestjs-typescript` - NestJS TypeScript
- `express-mongodb` - Express + MongoDB

**其他**
- `convex` - Convex 数据库规则
- `dragonruby` - DragonRuby 最佳实践
- `elixir-engineer` - Elixir 工程指南
- `github-code-quality` - GitHub 代码质量
- `typescript-axios` - TypeScript Axios 集成
- `typescript-conventions` - TypeScript 约定
- `vite-tailwind` - Vite + Tailwind CSS

### 📖 文档

#### 新增
- 重写 `docs/getting-started.md` - 三步快速上手指南
- 重写 `docs/best-practices.md` - 完整最佳实践手册
- 重写 `docs/installation-guide.md` - 多平台安装配置指南
- 重写 `docs/troubleshooting.md` - 故障排除工具箱
- 重写 `CONTRIBUTING.md` - 贡献指南和术语表
- 重写 `README.md` - 精简项目主页

### 🐛 修复

- 移除重复目录 `rules/frontend/mobile/`
- 合并重复 Flutter 规则目录
- 修复文档中的无效路径引用
- 补充缺失的 `.cursorrules` 文件

### 🔧 变更

- 更新项目统计数据：119 个规则文件、43 个技术领域、568 个文档
- 统一规则文件格式和风格
- 优化目录结构组织

---

## [1.5.0] - 2024-07-03

### ✨ 新特性

- 完成所有规则集翻译（100%）
- 更新核心文档反映项目进入维护阶段

---

## [1.4.0] - 2024-07-02

### ✨ 新特性

- 完成全部规则集翻译
- 更新文档反映翻译进度

---

## [1.3.0] - 2024-07-02

### ✨ 新特性

- Elixir 工程师指南翻译
- 工程工单模板翻译
- Gherkin 风格测试翻译
- Git 约定式提交消息翻译
- GitHub 代码质量翻译
- Xray 测试用例翻译

---

## [1.2.0] - 2024-07-02

### ✨ 新特性

- 50 份新文档翻译（总进度 95%）
- 翻译进度报告结构重构
- 翻译问题排查指南

### ✅ 完成

- 云原生领域：100%
- 移动开发领域：100%

---

## [1.1.0] - 2024-06-25

### ✨ 新特性

- Django 全规则集翻译
- FastAPI 核心规范翻译
- 数据科学领域：Python 数据处理、Pandas、Matplotlib、PyTorch、TensorFlow
- 机器学习：Scikit-learn 最佳实践

---

## [1.0.0] - 2024-01-01

### 🎉 首次发布

首次正式发布。

#### 规则集（总计 29 个）

**React 生态（13 个）**
- Next.js + TypeScript 完整配置
- React 组件开发最佳实践
- Chakra UI 和 Styled Components 样式指南
- GraphQL Apollo Client 集成
- MobX 状态管理
- React Native Expo 移动开发

**Vue 生态（2 个）**
- Vue 3 Composition API 开发规范
- Nuxt 3 全栈开发指南

**TypeScript 专项（3 个）**
- TypeScript 编码约定
- Vite + Tailwind CSS 构建
- Axios HTTP 客户端集成

**后端开发（6 个）**
- Python FastAPI
- Node.js Express + MongoDB
- TypeScript NestJS
- ASP.NET ABP 框架

**其他（5 个）**
- React Native Expo 跨平台
- iOS UIKit 原生开发
- Solidity Foundry 智能合约
- C++ 现代编程规范
- Drupal 11 CMS

#### 基础设施

- 按技术栈分类的目录结构
- 中文 README 和文档
- GitHub Actions 质量检查
- Issue 和 PR 模板
- 行为准则和贡献指南

---

## 版本说明

| 版本号 | 含义 |
|--------|------|
| 主版本 | 破坏性变更、主要架构更新 |
| 次版本 | 新功能、重要改进 |
| 修订号 | Bug 修复、小幅改进 |

## 迁移指南

### 迁移到 2.1.0

文档路径已重新组织：

**旧路径**（仍可通过重定向访问）：
```
docs/getting-started.md
docs/best-practices.md
docs/installation-guide.md
docs/troubleshooting.md
```

**新路径**：
```
docs/zh/getting-started.md    # 中文
docs/en/getting-started.md    # 英文
```

无需操作 - 旧路径自动重定向。

---

[未发布]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v2.1.0...HEAD
[2.1.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.5.0...v2.0.0
[1.5.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/LessUp/awesome-cursorrules-zh/releases/tag/v1.0.0
