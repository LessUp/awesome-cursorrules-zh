# Rules Organization Specification

This document defines the organization specification for `.cursorrules` rule files.

## Directory Structure

Rules are organized by tech domain:

```
rules/
├── frontend/         # Frontend development
│   ├── react/        # React ecosystem
│   ├── vue/          # Vue ecosystem
│   ├── angular/      # Angular ecosystem
│   └── ...
├── backend/          # Backend development
│   ├── python/       # Python frameworks
│   ├── nodejs/       # Node.js frameworks
│   ├── go/           # Go frameworks
│   └── ...
├── mobile/           # Mobile development
├── devops/           # DevOps
├── ai/               # AI/ML
├── blockchain/       # Blockchain
├── security/         # Security
└── ...               # Other domains
```

## Naming Convention

### Directory Naming

- Use lowercase letters
- Multiple words connected with hyphens
- Example: `nextjs-typescript`, `springboot-jpa`

### File Naming

Each rule directory contains:
- `.cursorrules` - Rule file (required)
- `README.md` - Documentation (recommended)

## Rule File Format

### Standard Template

```markdown
# [Tech Name] .cursorrules Prompt File

You are an expert in [tech domain].

## Core Principles

- [Principle 1]
- [Principle 2]
- [Principle 3]

## Tech Stack

- [Tech 1]
- [Tech 2]

## Best Practices

1. [Practice 1]
2. [Practice 2]

## Key Conventions

1. [Convention 1]
2. [Convention 2]
```

### Required Elements

| Element | Description | Importance |
|---------|-------------|------------|
| Role definition | "You are...expert" | ⭐⭐⭐ |
| Core principles | Development guidelines | ⭐⭐⭐ |
| Tech stack | Technologies used | ⭐⭐ |
| Best practices | Specific practice suggestions | ⭐⭐⭐ |
| Key conventions | Coding conventions | ⭐⭐ |

### File Size Requirements

- Minimum: 200 bytes
- Recommended: 500-2000 bytes
- Maximum: No limit, but recommended under 10KB

## Quality Check

### Validation Script

Run `npm run validate` to check:

1. **File size**: Whether minimum requirement is met
2. **Role definition**: Whether expert role declaration is included
3. **Best practices**: Whether practice suggestions are included
4. **Tech stack**: Whether tech keywords are specified

### Validation Report

Results saved in `validation-report.json`:

```json
{
  "timestamp": "2024-01-01T00:00:00.000Z",
  "summary": {
    "total": 132,
    "valid": 100,
    "warnings": 32,
    "errors": 0
  },
  "details": [...]
}
```

## Adding New Rules Process

1. **Determine category**: Choose appropriate tech domain directory
2. **Create directory**: Use standard naming
3. **Write rule**: Follow standard template
4. **Write documentation**: Create README.md
5. **Validate**: Run `npm run validate`
6. **Update navigation**: Update VitePress config

## Bilingual Support

Rule files are written in Chinese, but technical terms remain in English:

```markdown
You are an expert in React and Next.js development.

## Tech Stack

- React 18
- Next.js 14
- TypeScript
- Tailwind CSS
```

## Statistics

Stats saved in `stats.json`:

```json
{
  "totalRules": 132,
  "categories": {
    "frontend": 16,
    "backend": 18,
    "mobile": 7,
    ...
  }
}
```

Run `npm run stats` to update.

## Related Documentation

- [VitePress Setup Details](./vitepress-setup.md)
- [Validation Script Source](../../scripts/validate-rules.js)
