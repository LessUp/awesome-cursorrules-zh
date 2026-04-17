# Documentation

This directory contains all project documentation following GitHub open source best practices.

## Structure

```
docs/
├── setup/          # Environment setup guides
├── tutorials/      # User and developer tutorials  
├── architecture/   # High-level architecture overview
└── assets/         # Static assets (images, diagrams, etc.)
```

## Documentation Sources

The actual documentation content is maintained in `/zh/` (Chinese) and `/en/` (English) directories for VitePress multi-language support.

| Document | Chinese | English |
|----------|---------|---------|
| Getting Started | [/zh/getting-started.md](../zh/getting-started.md) | [/en/getting-started.md](../en/getting-started.md) |
| Installation Guide | [/zh/installation-guide.md](../zh/installation-guide.md) | [/en/installation-guide.md](../en/installation-guide.md) |
| Best Practices | [/zh/best-practices.md](../zh/best-practices.md) | [/en/best-practices.md](../en/best-practices.md) |
| Troubleshooting | [/zh/troubleshooting.md](../zh/troubleshooting.md) | [/en/troubleshooting.md](../en/troubleshooting.md) |
| API Reference | [/zh/api-reference.md](../zh/api-reference.md) | [/en/api-reference.md](../en/api-reference.md) |

## For VitePress

This project uses **VitePress** to generate the documentation site. The source files are in `/zh/` and `/en/` directories at the project root level.

- Config: `/.vitepress/config.mjs`
- Theme: `/.vitepress/theme/`
- Public assets: `/.vitepress/public/`

To preview docs locally:
```bash
npm run docs:dev
```

To build docs:
```bash
npm run docs:build
```
