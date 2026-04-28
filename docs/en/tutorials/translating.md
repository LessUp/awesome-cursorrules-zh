# Translation Guide

This guide introduces how to contribute translations to the awesome-cursorrules-zh project.

## Translation Scope

| Type | Location | Description |
|------|----------|-------------|
| Documentation | `docs/en/`, `docs/zh/` | Bilingual docs |
| Rule documentation | README.md in each rule directory | Rule docs |
| UI translation | `.vitepress/config.mjs` | Site navigation |

## Translation Standards

### Terminology Glossary

| English | Chinese | Notes |
|---------|---------|-------|
| .cursorrules | .cursorrules | Keep original |
| Cursor AI | Cursor AI | Keep original |
| prompt | 提示词 | |
| best practices | 最佳实践 | |
| code review | 代码审查 | |
| frontend | 前端 | |
| backend | 后端 | |
| devops | DevOps | Keep original |
| commit | 提交 | |
| pull request | 拉取请求 / PR | |
| issue | 问题 / Issue | |

### Technical Terms

The following terms should remain in English:

- Framework names: React, Vue, Angular, Svelte, Next.js, Nuxt, etc.
- Language names: TypeScript, JavaScript, Python, Go, Rust, etc.
- Tool names: Vite, Webpack, Docker, Kubernetes, etc.
- Concept names: Component, Hook, Router, Store, etc.

### Translation Style

**Maintain consistency**:
- Same terminology translated consistently throughout
- Reference existing translated documents

**Keep concise**:
- Avoid wordy expressions
- Maintain technical document professionalism

**Preserve code examples**:
- Code blocks should not be translated
- Comments can be translated

## Documentation Translation Process

### 1. Find Corresponding Document

```
docs/
├── en/                    # English docs
│   ├── getting-started.md
│   └── ...
└── zh/                    # Chinese docs
    ├── getting-started.md
    └── ...
```

### 2. Translate Content

```markdown
# Getting Started (English)

Welcome to awesome-cursorrules-zh!

---

# 快速开始 (Chinese)

欢迎使用 awesome-cursorrules-zh！
```

### 3. Validate Format

```bash
# Check Markdown format
npm run lint
```

## VitePress Configuration Translation

Update navigation translations in `.vitepress/config.mjs`:

```javascript
locales: {
  root: {
    label: '简体中文',
    lang: 'zh-CN',
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '规则', link: '/rules/' },
        { text: '文档', link: '/docs/' }
      ]
    }
  },
  en: {
    label: 'English',
    lang: 'en-US',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Rules', link: '/en/rules/' },
        { text: 'Docs', link: '/en/docs/' }
      ]
    }
  }
}
```

## Rule File Translation Note

**Note**: `.cursorrules` rule files are written in Chinese and do not need translation.

However, `README.md` documents in rule directories need bilingual support:

```
rules/frontend/react/nextjs-typescript/
├── .cursorrules    # Chinese rule (primary)
└── README.md       # Chinese documentation
```

## Translation Checklist

- [ ] Consistent terminology usage
- [ ] Technical terms remain in English
- [ ] Code examples not translated
- [ ] Correct Markdown format
- [ ] Valid links
- [ ] No missing paragraphs

## Contributing Translations

1. Fork the project
2. Create translation branch: `git checkout -b translate/your-translation`
3. Submit translation
4. Create Pull Request

### PR Title Format

```
translate: Translate [document name] to [language]
```

Example:
```
translate: Translate getting-started.md to Chinese
translate: Update troubleshooting English version
```

## Related Resources

- [Contributing Guide](./contributing.md)
- [Using Rules](./using-rules.md)
- [Glossary](https://github.com/LessUp/awesome-cursorrules-zh/wiki/Glossary)
