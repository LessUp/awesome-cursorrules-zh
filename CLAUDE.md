# CLAUDE.md - Claude Code 项目配置

> 本文件为 Claude Code CLI 提供项目特定配置和指导。

## 项目概述

**awesome-cursorrules-zh** 是一个 Cursor AI 编辑器规则集合网站，提供精选的 `.cursorrules` 规则文件，帮助开发者在使用 Cursor AI 时获得更好的代码辅助体验。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Node.js | >=18.0.0 | 运行时 |
| VitePress | ^1.6.4 | 静态站点生成 |
| Vue.js | 3.x | 前端框架 |
| markdownlint-cli2 | ^0.17.2 | Markdown 检查 |

## 常用命令

```bash
# 开发
npm run docs:dev          # 启动开发服务器

# 构建
npm run docs:build        # 构建静态站点
npm run docs:preview      # 预览构建结果

# 质量检查
npm run lint              # Markdown 格式检查
npm run lint:fix          # 自动修复格式问题
npm run validate          # 验证规则文件
npm run stats             # 生成统计数据
npm run check             # lint + validate
npm run ci                # check + build
```

## 目录结构

```
awesome-cursorrules-zh/
├── .vitepress/           # VitePress 配置
├── docs/                 # 文档源文件
│   ├── architecture/     # 架构文档
│   ├── setup/            # 安装指南
│   ├── tutorials/        # 使用教程
│   ├── en/               # 英文文档
│   └── zh/               # 中文文档
├── rules/                # 规则文件 (核心)
├── scripts/              # 工具脚本
├── specs/                # SDD 规范文档
├── AGENTS.md             # AI 助手工作指南
└── CLAUDE.md             # 本文件
```

## 开发工作流

### 添加新规则

1. 在 `rules/` 对应领域下创建目录
2. 编写 `.cursorrules` 文件
3. 编写 `README.md` 说明
4. 运行 `npm run validate` 验证
5. 更新统计数据

### 文档更新

1. 更新 `docs/zh/` 中文文档
2. 更新 `docs/en/` 英文文档
3. 运行 `npm run lint` 检查格式

### 提交规范

使用约定式提交：

```
feat: 添加新规则
fix: 修复问题
docs: 文档更新
refactor: 重构
translate: 翻译更新
```

## 规则文件规范

### 标准模板

```markdown
# [技术名称] .cursorrules 提示文件

你是 [技术领域] 方面的专家。

## 核心原则

- 原则1
- 原则2
- 原则3

## 技术栈

- 技术1
- 技术2

## 最佳实践

1. 实践1
2. 实践2

## 关键约定

1. 约定1
2. 约定2
```

### 质量要求

- 文件大小 >= 200 字节
- 必须包含角色定义
- 推荐包含最佳实践
- 使用中文编写

## 双语支持

- 文档：`docs/zh/` 和 `docs/en/`
- 规则文件：中文为主
- 技术术语：保持英文原文

## CI/CD

| 工作流 | 触发 | 功能 |
|--------|------|------|
| quality-check.yml | push/PR | 质量检查 |
| security.yml | 定时 | 安全审计 |
| deploy.yml | push main | 部署 |

## 注意事项

1. **规则验证**：所有规则文件必须通过 `npm run validate`
2. **Markdown 格式**：遵循 `.markdownlint.json` 配置
3. **提交规范**：使用约定式提交
4. **双语更新**：文档更新需同步中英文

## 相关文档

- [AGENTS.md](./AGENTS.md) - 详细的 AI 助手工作指南
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 贡献指南
- [specs/](./specs/) - Spec-Driven Development 规范
