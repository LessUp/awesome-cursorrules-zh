# Documentation Home

> 📚 Welcome to Awesome Cursor Rules Documentation

## Quick Navigation

| Document | Description | Reading Time |
|----------|-------------|--------------|
| [Quick Start](./getting-started.md) | 5-minute guide to get started | 5 min |
| [Installation Guide](./installation-guide.md) | Complete setup instructions | 10 min |
| [Best Practices](./best-practices.md) | Rules usage best practices | 15 min |
| [Troubleshooting](./troubleshooting.md) | Common issues and solutions | 10 min |
| [API Reference](./api-reference.md) | Rules file format reference | 8 min |

---

## What are Cursor Rules?

`.cursorrules` is a project-level configuration file for [Cursor AI](https://cursor.sh/) editor, used to define:

- **Coding Standards** — Code style, naming conventions, file organization
- **Tech Stack** — Framework choices, library versions, toolchains
- **Best Practices** — Architecture patterns, performance optimization, security strategies
- **AI Behavior** — Response style, code generation preferences

> 💡 Simple understanding: It's a "project handbook" for AI assistants

---

## Quick Start

### Three Steps to Start

```bash
# 1. Clone the rules repository
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. Choose rules for your project
cd awesome-cursorrules-zh
ls rules/frontend/react/  # View frontend rules

# 3. Copy to your project directory
cp rules/frontend/react/nextjs-typescript/.cursorrules /path/to/your/project/
```

### Recommended Rules Quick Reference

| Tech Stack | Recommended Rule | Path |
|------------|------------------|------|
| Next.js + TypeScript | nextjs-typescript | `rules/frontend/react/nextjs-typescript/` |
| Vue 3 | composition-api | `rules/frontend/vue/composition-api/` |
| React Native | react-native-expo | `rules/mobile/react-native-expo/` |
| FastAPI | fastapi-api-example | `rules/backend/python/fastapi-api-example/` |
| Go Backend | backend-scalability | `rules/backend/go/backend-scalability/` |

---

## Documentation Structure

```
docs/
├── en/                          # English Documentation (Current)
│   ├── README.md               # 📍 Documentation Home
│   ├── getting-started.md      # 🚀 Quick Start
│   ├── installation-guide.md   # ⚙️ Installation Guide
│   ├── best-practices.md       # 💡 Best Practices
│   ├── troubleshooting.md      # 🔧 Troubleshooting
│   └── api-reference.md        # 📖 API Reference
│
└── zh/                          # 中文文档
    └── ...                     # Chinese Documentation
```

---

## Language Switch

This documentation is available in both Chinese and English:

- 🇨🇳 [中文文档](../zh/README.md)
- 🇺🇸 [English Documentation](./README.md) (Current)

---

## Get Help

### Self-Service Troubleshooting

Encountering issues? Check in this order:

1. 🔍 [Troubleshooting Guide](./troubleshooting.md) — Common issues quick reference
2. ❓ Search [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
3. 💬 Start a [GitHub Discussion](https://github.com/LessUp/awesome-cursorrules-zh/discussions)

### Report Issues

Found documentation errors or want to improve content? Submit an issue:

- 🐛 [Report Issue](https://github.com/LessUp/awesome-cursorrules-zh/issues/new/choose)
- 📝 [Documentation Improvement](https://github.com/LessUp/awesome-cursorrules-zh/issues/new?template=documentation.md)

---

## Contributing

Want to help improve this documentation? Please read the [Contributing Guide](../../CONTRIBUTING.md).

---

<div align="center">

**[⬆ Back to Top](#documentation-home)**

</div>
