# Architecture

本文档描述 awesome-cursorrules-zh 项目的整体架构设计。

## 项目概述

awesome-cursorrules-zh 是一个 Cursor AI 编辑器规则集合网站，提供精选的 `.cursorrules` 规则文件，帮助开发者在使用 Cursor AI 时获得更好的代码辅助体验。

## 目录结构

```
awesome-cursorrules-zh/
├── .github/              # GitHub 配置
│   ├── workflows/        # CI/CD 工作流
│   ├── ISSUE_TEMPLATE/   # Issue 模板
│   └── dependabot.yml    # 依赖更新配置
├── .vitepress/           # VitePress 配置
│   ├── config.mjs        # 站点配置
│   ├── theme/            # 自定义主题
│   └── public/           # 静态资源
├── docs/                 # 文档源文件
│   ├── architecture/     # 架构文档
│   ├── setup/            # 安装指南
│   ├── tutorials/        # 使用教程
│   ├── en/               # 英文文档
│   └── zh/               # 中文文档
├── rules/                # ⭐ 规则文件核心目录
│   ├── frontend/         # 前端开发规则
│   ├── backend/          # 后端开发规则
│   ├── mobile/           # 移动开发规则
│   ├── devops/           # DevOps 规则
│   ├── ai/               # AI/ML 规则
│   └── ...               # 其他 32 个技术领域
├── scripts/              # 工具脚本
│   ├── validate-rules.js # 规则验证
│   └── generate-stats.js # 统计生成
├── specs/                # Spec-Driven Development 规范
│   ├── product/          # 产品需求
│   ├── rfc/              # 技术设计
│   ├── api/              # API 定义
│   ├── db/               # 数据库规范
│   └── testing/          # 测试规范
├── AGENTS.md             # AI 助手工作指南
├── README.md             # 英文项目说明
└── README.zh-CN.md       # 中文项目说明
```

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Node.js | >=18.0.0 | 运行时环境 |
| VitePress | ^1.6.4 | 静态站点生成器 |
| Vue.js | 3.x | 前端框架 (VitePress 内置) |
| markdownlint-cli2 | ^0.17.2 | Markdown 格式检查 |

## 核心组件

### 1. 规则文件系统 (`/rules/`)

规则文件按技术领域组织，每个规则包含：
- `.cursorrules` 文件：Cursor AI 规则定义
- `README.md` 文件：规则说明文档

**组织原则**:
- 按技术领域分类 (frontend, backend, mobile, etc.)
- 按技术栈细分 (react, vue, python, go, etc.)
- 支持中英文双语

### 2. 文档站点 (VitePress)

**配置文件**: `.vitepress/config.mjs`

**特性**:
- 双语支持 (中/英)
- 本地搜索
- 自定义主题
- 响应式设计

### 3. 验证系统

**脚本**: `scripts/validate-rules.js`

**检查项**:
- 文件大小验证
- 角色定义检查
- 最佳实践检查
- 技术栈标识检查

### 4. CI/CD 流水线

| 工作流 | 触发条件 | 功能 |
|--------|----------|------|
| quality-check.yml | push/PR | 质量检查 |
| security.yml | 定时/依赖变更 | 安全审计 |
| deploy.yml | push to main | 部署到 GitHub Pages |

## 数据流

```
用户请求 → GitHub Pages → VitePress 静态站点
                              ↓
                         规则文件展示
                              ↓
                    用户复制 .cursorrules 到项目
                              ↓
                    Cursor AI 读取并应用规则
```

## 扩展指南

### 添加新规则

1. 在对应技术领域目录下创建子目录
2. 编写 `.cursorrules` 文件
3. 编写 `README.md` 说明文档
4. 运行 `npm run validate` 验证

### 添加新领域

1. 在 `rules/` 下创建新目录
2. 更新 `.vitepress/config.mjs` 导航配置
3. 更新统计数据

## 相关文档

- [VitePress 配置详解](./vitepress-setup.md)
- [规则组织规范](./rules-organization.md)
