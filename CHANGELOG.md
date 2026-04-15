# 更新日志

所有重要变更都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

---

## [2.0.0] - 2025-01-16

### 新增

- **29 个新规则文件**
  - React 生态：apollo-graphql, mobx, nextjs-14-seo, nextjs-react-ts, nextjs-supabase, nextjs-ui, react-components, react-typescript, styled-components
  - 后端规则：Go, Java, Django, NestJS, express-mongodb
  - 其他：Convex, DragonRuby, Elixir, GitHub 代码质量, 代码规范, TypeScript axios/conventions/vite-tailwind

- **全新文档体系**
  - 重写 `docs/getting-started.md` - 三步快速上手指南
  - 重写 `docs/best-practices.md` - 完整最佳实践手册
  - 重写 `docs/installation-guide.md` - 多平台安装配置
  - 重写 `docs/troubleshooting.md` - 故障排除工具箱
  - 重写 `CONTRIBUTING.md` - 贡献指南和术语表
  - 重写 `README.md` - 精简项目主页

### 修复

- 移除重复目录 `rules/frontend/mobile/`
- 合并重复 Flutter 规则目录
- 修复文档中的无效路径引用
- 补充缺失的 `.cursorrules` 文件

### 变更

- 更新项目统计数据：119 个规则文件、43 个技术领域、568 个文档
- 统一规则文件格式和风格
- 优化目录结构组织

---

## [1.5.0] - 2025-07-03

### 新增

- 完成所有规则集翻译（100%）
- 更新核心文档反映项目进入维护阶段

---

## [1.4.0] - 2025-07-02

### 新增

- 完成全部规则集翻译
- 更新文档反映翻译进度

---

## [1.3.0] - 2025-07-02

### 新增

- Elixir 工程师指南翻译
- 工程工单模板翻译
- Gherkin 风格测试翻译
- Git 约定式提交消息翻译
- GitHub 代码质量翻译
- Xray 测试用例翻译

---

## [1.2.0] - 2025-07-02

### 新增

- 50 份新文档翻译（总进度 95%）
- 翻译进度报告结构重构
- 翻译问题排查指南

### 完成

- 云原生领域 100%
- 移动开发领域 100%

---

## [1.1.0] - 2025-06-25

### 新增

- Django 全规则集翻译
- FastAPI 核心规范翻译
- 数据科学领域：Python 数据处理、Pandas、Matplotlib、PyTorch、TensorFlow
- 机器学习：Scikit-learn 最佳实践

---

## [1.0.0] - 2024-01-01

### 新增

首次正式发布

#### 规则集（29 个）

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
| 主版本 | 重大架构变更 |
| 次版本 | 新功能或重要改进 |
| 修订号 | Bug 修复和小改进 |

---

## 链接

[比较变更]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.5.0...v2.0.0
