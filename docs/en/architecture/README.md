# Architecture

This document describes the overall architecture design of the awesome-cursorrules-zh project.

## Project Overview

awesome-cursorrules-zh is a Cursor AI editor rules collection website, providing curated `.cursorrules` rule files to help developers get better code assistance when using Cursor AI.

## Directory Structure

```
awesome-cursorrules-zh/
├── .github/              # GitHub configuration
│   ├── workflows/        # CI/CD workflows
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── dependabot.yml    # Dependency update config
├── .vitepress/           # VitePress configuration
│   ├── config.mjs        # Site configuration
│   ├── theme/            # Custom theme
│   └── public/           # Static assets
├── docs/                 # Documentation source files
│   ├── architecture/     # Architecture docs
│   ├── setup/            # Installation guides
│   ├── tutorials/        # Tutorials
│   ├── en/               # English docs
│   └── zh/               # Chinese docs
├── rules/                # ⭐ Core rules directory
│   ├── frontend/         # Frontend rules
│   ├── backend/          # Backend rules
│   ├── mobile/           # Mobile rules
│   ├── devops/           # DevOps rules
│   ├── ai/               # AI/ML rules
│   └── ...               # Other 32 tech domains
├── scripts/              # Utility scripts
│   ├── validate-rules.js # Rules validation
│   └── generate-stats.js # Stats generation
├── specs/                # Spec-Driven Development specs
│   ├── product/          # Product requirements
│   ├── rfc/              # Technical design
│   ├── api/              # API definitions
│   ├── db/               # Database specs
│   └── testing/          # Testing specs
├── AGENTS.md             # AI assistant guide
├── README.md             # English project readme
└── README.zh-CN.md       # Chinese project readme
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | >=22.0.0 | Runtime environment |
| VitePress | ^1.6.4 | Static site generator |
| Vue.js | 3.x | Frontend framework (VitePress built-in) |
| markdownlint-cli2 | ^0.22.1 | Markdown format check |

## Core Components

### 1. Rules File System (`/rules/`)

Rules are organized by tech domain, each rule contains:
- `.cursorrules` file: Cursor AI rule definition
- `README.md` file: Rule documentation

**Organization Principles**:
- Categorized by tech domain (frontend, backend, mobile, etc.)
- Subdivided by tech stack (react, vue, python, go, etc.)
- Supports Chinese-English bilingual

### 2. Documentation Site (VitePress)

**Config File**: `.vitepress/config.mjs`

**Features**:
- Bilingual support (Chinese/English)
- Local search
- Custom theme
- Responsive design

### 3. Validation System

**Script**: `scripts/validate-rules.js`

**Checks**:
- File size validation
- Role definition check
- Best practices check
- Tech stack identification

### 4. CI/CD Pipeline

| Workflow | Trigger | Function |
|----------|---------|----------|
| quality-check.yml | push/PR | Quality check |
| security.yml | scheduled/dependency change | Security audit |
| deploy.yml | push to main | Deploy to GitHub Pages |

## Data Flow

```
User request → GitHub Pages → VitePress static site
                              ↓
                         Rules display
                              ↓
                User copies .cursorrules to project
                              ↓
                Cursor AI reads and applies rules
```

## Extension Guide

### Adding New Rules

1. Create subdirectory in corresponding tech domain
2. Write `.cursorrules` file
3. Write `README.md` documentation
4. Run `npm run validate` to validate

### Adding New Domain

1. Create new directory under `rules/`
2. Update `.vitepress/config.mjs` navigation config
3. Update statistics

## Related Documentation

- [VitePress Setup Details](./vitepress-setup.md)
- [Rules Organization](./rules-organization.md)
