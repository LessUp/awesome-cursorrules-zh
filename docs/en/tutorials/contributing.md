# Contributing Guide

Thank you for your interest in the awesome-cursorrules-zh project! This document explains how to contribute to the project.

## Ways to Contribute

| Way | Description |
|-----|-------------|
| Add new rules | Contribute new .cursorrules files |
| Improve existing rules | Optimize rule content |
| Translation | Add or improve translations |
| Documentation improvement | Enhance documentation content |
| Bug fixes | Fix project issues |

## Development Environment Setup

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/awesome-cursorrules-zh.git

# 2. Enter directory
cd awesome-cursorrules-zh

# 3. Install dependencies
npm install

# 4. Create feature branch
git checkout -b feature/your-feature-name
```

## Adding New Rules

### Step 1: Determine Location

Find the appropriate tech domain under the `rules/` directory:

```
rules/
├── frontend/     # Frontend rules
├── backend/      # Backend rules
├── mobile/       # Mobile rules
└── ...           # Other domains
```

### Step 2: Create Rule File

```bash
# Create rule directory
mkdir -p rules/frontend/svelte/sveltekit

# Create rule file
touch rules/frontend/svelte/sveltekit/.cursorrules
```

### Step 3: Write Rule

Use the standard template:

```markdown
# SvelteKit .cursorrules Prompt File

You are an expert in SvelteKit and Svelte 5 development.

## Core Principles

- Use Svelte 5 Runes syntax
- Server-side rendering first
- Type safety first

## Tech Stack

- Svelte 5
- SvelteKit
- TypeScript
- Tailwind CSS

## Best Practices

1. Use `+page.svelte` and `+page.ts` separation
2. Use server functions for data handling
3. Use `$state` and `$derived` for state management

## Key Conventions

1. Component files use PascalCase
2. Route files use kebab-case
3. Type definitions in `$lib/types`
```

### Step 4: Create Documentation

Create `README.md`:

```markdown
# SvelteKit Rule

Cursor AI rule for SvelteKit projects.

## Use Cases

- SvelteKit full-stack applications
- Svelte 5 projects
- TypeScript projects

## Usage

Copy `.cursorrules` file to project root.
```

### Step 5: Validate

```bash
# Run validation
npm run validate

# Run lint
npm run lint
```

## Commit Convention

Use Conventional Commits:

```
feat: Add SvelteKit rule

- Add rules/frontend/svelte/sveltekit/.cursorrules
- Add corresponding README.md documentation
```

### Commit Types

| Type | Description |
|------|-------------|
| `feat` | New feature/rule |
| `fix` | Bug fix |
| `docs` | Documentation update |
| `refactor` | Code refactoring |
| `translate` | Translation update |

## Pull Request Process

1. **Create branch**: Create feature branch from `main`
2. **Commit changes**: Follow commit convention
3. **Run checks**: `npm run check`
4. **Push branch**: Push to your fork
5. **Create PR**: Fill out PR template

### PR Checklist

- [ ] Code passes `npm run check`
- [ ] Follows project conventions
- [ ] Added necessary documentation
- [ ] Commit messages follow convention

## Code Standards

### Rule File Standards

- Must include role definition
- Must include core principles
- Recommended to include best practices
- File size >= 200 bytes

### Documentation Standards

- Use Markdown format
- Follow markdownlint rules
- Chinese-English bilingual support

## Getting Help

- [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- [GitHub Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions)

## Related Documentation

- [Translation Guide](./translating.md)
- [Using Rules](./using-rules.md)
- [Architecture Docs](../architecture/README.md)
