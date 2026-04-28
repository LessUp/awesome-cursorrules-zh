# Editor Setup

This document guides you through configuring Cursor and other editors for the best experience.

## Cursor Editor Setup

### Installing Cursor

1. Visit [Cursor Website](https://cursor.sh/)
2. Download the version for your system
3. Install and launch

### .cursorrules File Location

Place the `.cursorrules` file in your project root:

```
your-project/
├── .cursorrules      # Cursor AI rule file
├── src/
├── package.json
└── ...
```

### Cursor Settings Recommendations

Cursor's AI model configuration is located in the settings page (Ctrl/Cmd + Shift + J):

**Model Selection:**
- **Claude 3.5/4 Sonnet** - Recommended for code generation and reasoning
- **Claude 3.5/4 Opus** - Complex tasks, stronger reasoning capability
- **GPT-4o** - General choice
- **Gemini 2.0 Flash** - Fast response

**Recommended Settings:**

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "cursor.general.enableSmartCopilot": true,
  "cursor.completion.enable": true
}
```

> **Note**: Cursor now uses the `cursor.ai` namespace. Legacy `cursor.aiProvider` and `cursor.model` settings are deprecated. Please select models directly in the Cursor settings interface.

### Rule File Activation

Cursor automatically reads the `.cursorrules` file in the project root and applies it in the following scenarios:

- AI Chat conversations
- Code Generation
- Code Explanation
- Refactoring Suggestions

## VS Code Configuration

If you use VS Code, you can install the following extensions:

### Recommended Extensions

| Extension | Purpose |
|-----------|---------|
| Prettier | Code formatting |
| markdownlint | Markdown linting |
| ESLint | JavaScript/TypeScript linting |

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

## Project Editor Configuration

This project includes the following editor config files:

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

## Rule File Usage Tips

### 1. Choose the Right Rule

Select the corresponding `.cursorrules` based on your project tech stack:

- React project → `rules/frontend/react/`
- Python project → `rules/backend/python/`
- Full-stack project → Combine multiple rules

### 2. Custom Rules

Add project-specific configuration on top of standard rules:

```markdown
# Base rule (copied from this site)
You are an expert in Next.js and TypeScript development.

## Project-specific Configuration

- Use pnpm instead of npm
- Use src/ directory structure
- Use @/ path alias
```

### 3. Rule Combination

Create a combined rule file:

```markdown
# Full-stack Development Rules

## Frontend Rules
[Paste frontend rules]

## Backend Rules
[Paste backend rules]
```

## Related Resources

- [Cursor Official Docs](https://docs.cursor.sh/)
- [VS Code Official Docs](https://code.visualstudio.com/docs)
- [Using Rules Tutorial](../tutorials/using-rules.md)
