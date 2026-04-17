# Architecture

High-level architecture overview of the project.

## Project Structure

```
awesome-cursorrules-zh/
├── specs/              # Spec-Driven Development specifications
│   ├── product/        # Product feature definitions
│   ├── rfc/            # Technical design documents
│   ├── api/            # API specifications
│   ├── db/             # Database specifications
│   └── testing/        # Testing specifications
├── rules/              # Cursor AI coding rules (.cursorrules files)
│   ├── frontend/       # Frontend development rules
│   ├── backend/        # Backend development rules
│   ├── mobile/         # Mobile development rules
│   ├── ai/             # AI/ML rules
│   └── ...             # Other categories
├── zh/                 # Chinese documentation source
├── en/                 # English documentation source
├── docs/               # Documentation organization
├── .vitepress/         # VitePress configuration
├── AGENTS.md           # AI agent workflow instructions
├── README.md           # English README (primary)
└── README.zh-CN.md     # Chinese README
```

## Technology Stack

- **Documentation**: VitePress (Vue-based static site generator)
- **Build Tool**: npm/vite
- **Languages**: Markdown with bilingual support (Chinese + English)

## Spec-Driven Development

This project follows Spec-Driven Development (SDD) principles. See `AGENTS.md` for AI agent workflow instructions and `/specs/` directory for specifications.
