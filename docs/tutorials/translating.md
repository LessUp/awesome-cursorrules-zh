# 翻译指南

本指南介绍如何为 awesome-cursorrules-zh 项目贡献翻译。

## 翻译范围

| 类型 | 位置 | 说明 |
|------|------|------|
| 文档翻译 | `docs/en/`, `docs/zh/` | 双语文档 |
| 规则说明 | 各规则目录的 README.md | 规则文档 |
| UI 翻译 | `.vitepress/config.mjs` | 网站导航 |

## 翻译规范

### 术语对照表

| 英文 | 中文 | 说明 |
|------|------|------|
| .cursorrules | .cursorrules | 保持原文 |
| Cursor AI | Cursor AI | 保持原文 |
| prompt | 提示词 | |
| best practices | 最佳实践 | |
| code review | 代码审查 | |
| frontend | 前端 | |
| backend | 后端 | |
| devops | DevOps | 保持原文 |
| commit | 提交 | |
| pull request | 拉取请求 / PR | |
| issue | 问题 / Issue | |

### 技术术语

以下术语保持英文原文：

- 框架名：React, Vue, Angular, Svelte, Next.js, Nuxt, etc.
- 语言名：TypeScript, JavaScript, Python, Go, Rust, etc.
- 工具名：Vite, Webpack, Docker, Kubernetes, etc.
- 概念名：Component, Hook, Router, Store, etc.

### 翻译风格

**保持一致性**：
- 同一术语全文统一翻译
- 参考已有翻译文档

**保持简洁**：
- 避免冗长表达
- 保持技术文档的专业性

**保留代码示例**：
- 代码块不翻译
- 注释可翻译

## 文档翻译流程

### 1. 找到对应文档

```
docs/
├── en/                    # 英文文档
│   ├── getting-started.md
│   └── ...
└── zh/                    # 中文文档
    ├── getting-started.md
    └── ...
```

### 2. 翻译内容

```markdown
# Getting Started (英文)

Welcome to awesome-cursorrules-zh!

---

# 快速开始 (中文)

欢迎使用 awesome-cursorrules-zh！
```

### 3. 验证格式

```bash
# 检查 Markdown 格式
npm run lint
```

## VitePress 配置翻译

在 `.vitepress/config.mjs` 中更新导航翻译：

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

## 规则文件翻译说明

**注意**：`.cursorrules` 规则文件本身使用中文编写，不需要翻译。

但规则目录下的 `README.md` 文档需要双语支持：

```
rules/frontend/react/nextjs-typescript/
├── .cursorrules    # 中文规则（主）
└── README.md       # 中文说明
```

## 翻译检查清单

- [ ] 术语使用一致
- [ ] 技术术语保持英文
- [ ] 代码示例未翻译
- [ ] Markdown 格式正确
- [ ] 链接有效
- [ ] 无遗漏段落

## 贡献翻译

1. Fork 项目
2. 创建翻译分支：`git checkout -b translate/your-translation`
3. 提交翻译
4. 创建 Pull Request

### PR 标题格式

```
translate: 翻译 [文档名称] 为 [语言]
```

示例：
```
translate: 翻译 getting-started.md 为中文
translate: 更新 troubleshooting 英文版
```

## 相关资源

- [贡献指南](./contributing.md)
- [使用规则](./using-rules.md)
- [术语表](https://github.com/LessUp/awesome-cursorrules-zh/wiki/Glossary)
