# GitHub Copilot Instructions

## 项目概述

Cursor AI 编辑器规则集合中文版 - 提供精选的 `.cursorrules` 规则文件。

## 技术栈

- Node.js 22+
- VitePress 1.6+
- markdownlint-cli2

## 代码规范

### 提交格式

使用约定式提交：`feat`/`fix`/`docs`/`chore`/`translate`

### 文件结构

- `rules/` - 规则文件（核心资产）
- `zh/` 和 `en/` - 站点正文
- `public/` - 静态资源
- `.vitepress/` - 站点配置

### 开发命令

```bash
npm run docs:dev      # 开发
npm run docs:build    # 构建
npm run check         # 质量检查
```

## 注意事项

- 文档优先中文，保留专有名词英文
- 规则文件必须通过 `npm run validate`
- 提交前运行 `npm run check`
