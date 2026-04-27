# 编辑器配置

本文档指导您配置 Cursor 和其他编辑器以获得最佳体验。

## Cursor 编辑器配置

### 安装 Cursor

1. 访问 [Cursor 官网](https://cursor.sh/)
2. 下载适合您系统的版本
3. 安装并启动

### .cursorrules 文件位置

将 `.cursorrules` 文件放在项目根目录：

```
your-project/
├── .cursorrules      # Cursor AI 规则文件
├── src/
├── package.json
└── ...
```

### Cursor 设置建议

在 Cursor 设置中配置：

```json
{
  "cursor.aiProvider": "openai",
  "cursor.model": "gpt-4",
  "cursor.temperature": 0.7,
  "editor.fontSize": 14,
  "editor.tabSize": 2
}
```

### 规则文件生效

Cursor 会自动读取项目根目录的 `.cursorrules` 文件，并在以下场景应用：

- AI Chat 对话
- Code Generation
- Code Explanation
- Refactoring Suggestions

## VS Code 配置

如果您使用 VS Code，可以安装以下扩展：

### 推荐扩展

| 扩展 | 用途 |
|------|------|
| Prettier | 代码格式化 |
| markdownlint | Markdown 检查 |
| ESLint | JavaScript/TypeScript 检查 |

### settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "markdown.validate.enabled": true
}
```

## 项目编辑器配置

本项目已包含以下编辑器配置文件：

### .editorconfig

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

### .vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "markdown.validate.enabled": true
}
```

### .vscode/extensions.json

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "DavidAnson.vscode-markdownlint"
  ]
}
```

## 规则文件使用技巧

### 1. 选择合适的规则

根据项目技术栈选择对应的 `.cursorrules`：

- React 项目 → `rules/frontend/react/`
- Python 项目 → `rules/backend/python/`
- 全栈项目 → 组合多个规则

### 2. 自定义规则

在标准规则基础上添加项目特定配置：

```markdown
# 基础规则（从本站复制）
你是 Next.js 和 TypeScript 开发方面的专家。

## 项目特定配置

- 使用 pnpm 而非 npm
- 使用 src/ 目录结构
- 使用 @/ 路径别名
```

### 3. 规则组合

创建组合规则文件：

```markdown
# 全栈开发规则

## 前端规则
[粘贴 frontend 规则]

## 后端规则
[粘贴 backend 规则]
```

## 相关资源

- [Cursor 官方文档](https://docs.cursor.sh/)
- [VS Code 官方文档](https://code.visualstudio.com/docs)
- [使用教程](../tutorials/using-rules.md)
