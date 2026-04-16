# Best Practices Guide

> 💡 Maximize the value of Cursor AI Rules

## Table of Contents

- [Rule Selection Strategy](#rule-selection-strategy)
- [Project Configuration](#project-configuration)
- [Team Collaboration](#team-collaboration)
- [Rule Writing Guidelines](#rule-writing-guidelines)
- [Performance Optimization](#performance-optimization)
- [Common Pitfalls](#common-pitfalls)

---

## Rule Selection Strategy

### New vs Existing Projects

| Project Type | Recommended Strategy | Notes |
|--------------|----------------------|-------|
| **New Projects** | Choose comprehensive rule set | Establish standards from the start, e.g., `nextjs-typescript` |
| **Existing Projects** | Gradual introduction | Start with `general/code-guidelines`, add incrementally |
| **Team Projects** | Choose familiar tech stack | Based on team skills for maintainability |
| **Learning Projects** | Educational rule sets | Choose rules with detailed comments |

### Tech Stack Matching

**Frontend Frameworks**

```
React   → rules/frontend/react/nextjs-typescript/
Vue     → rules/frontend/vue/composition-api/
Angular → rules/frontend/angular/angular-typescript/
Svelte  → rules/frontend/svelte/sveltekit-tailwind-typescript-guide/
```

**Backend Languages**

```
Python   → rules/backend/python/fastapi-api-example/
Node.js  → rules/backend/nodejs/nestjs-typescript/
Go       → rules/backend/go/backend-scalability/
Java     → rules/backend/java/springboot-jpa/
PHP      → rules/backend/php/laravel-php-83/
```

**Mobile Development**

```
Flutter       → rules/mobile/flutter/flutter-app-expert/
React Native  → rules/mobile/react-native-expo/
SwiftUI       → rules/mobile/swiftui-guidelines/
Android       → rules/mobile/android/modern-android/
```

---

## Project Configuration

### Single Tech Stack Projects

For single tech stack projects, copy the corresponding rules:

```bash
# Next.js project example
cp rules/frontend/react/nextjs-typescript/.cursorrules ./
```

### Multi-Tech Stack Projects

**Option 1: Merge Rule Files**

```bash
# Create merged rules
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
echo "# ===== Backend Rules =====" >> .cursorrules
echo "" >> .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**Option 2: Directory-Level Rules (Recommended)**

```bash
# Project root - general rules
cp rules/general/code-guidelines/.cursorrules ./

# frontend/ directory - frontend rules
cp rules/frontend/react/nextjs-typescript/.cursorrules frontend/

# backend/ directory - backend rules
cp rules/backend/python/fastapi-api-example/.cursorrules backend/
```

> 💡 **Advantage**: Each module is managed independently, avoiding rule conflicts

### Verification

```bash
# Check file exists
ls -la .cursorrules

# View file content
cat .cursorrules

# Verify file encoding
file .cursorrules  # Should show: UTF-8 Unicode text

# Check file size (recommended < 50KB)
ls -lh .cursorrules
```

---

## Team Collaboration

### Version Control

**You must add `.cursorrules` to Git management**:

```bash
# Add rules file
git add .cursorrules

# Commit
git commit -m "chore: add team coding rules configuration

- Add Cursor AI coding rules for project consistency
- Based on nextjs-typescript and fastapi best practices"

git push
```

> ⚠️ **Important**: Do not add `.cursorrules` to `.gitignore`

### Team Documentation Template

Add Cursor configuration instructions to your project README:

```markdown
## Development Environment Setup

This project uses Cursor AI coding rules to maintain code consistency.

### Required Steps

1. Install [Cursor Editor](https://cursor.sh/)
2. Ensure `.cursorrules` file exists in the project root
3. Enable "Use .cursorrules" in Cursor settings

### Rules Overview

- **Frontend**: Next.js + TypeScript + Tailwind CSS
- **Backend**: Python FastAPI
- **Rules Source**: [awesome-cursorrules-zh](https://github.com/LessUp/awesome-cursorrules-zh)

### Custom Rules

To add project-specific rules, append them to the end of `.cursorrules`, 
do not modify existing rule content.
```

### Team Rules Template Library

Create a team template directory for members to choose from:

```bash
# Create template directory
mkdir -p .cursorrules-templates

# Save common rule templates
cp rules/frontend/react/nextjs-typescript/.cursorrules .cursorrules-templates/frontend.cursorrules
cp rules/backend/python/fastapi-api-example/.cursorrules .cursorrules-templates/backend.cursorrules
cp rules/general/code-guidelines/.cursorrules .cursorrules-templates/general.cursorrules

# Add template documentation
cat > .cursorrules-templates/README.md << 'EOF'
# Team Rules Templates

## Usage

Choose the appropriate template based on project type:

- `frontend.cursorrules` - Frontend projects
- `backend.cursorrules` - Backend projects
- `general.cursorrules` - General guidelines

## Apply Template

```bash
cp .cursorrules-templates/frontend.cursorrules ./.cursorrules
```
EOF
```

---

## Rule Writing Guidelines

### Rule Structure

A good `.cursorrules` file should include:

```markdown
# Project Coding Standards

## Overview
Project brief, tech stack description, core principles

## Coding Standards
- Naming conventions
- Code style
- File organization

## Framework Standards
- Framework-specific rules
- Component/module standards

## Best Practices
- Recommended practices
- Things to avoid
```

### Standard Sections

| Section | Description | Optional |
|---------|-------------|----------|
| Overview | Project background and design principles | Recommended |
| Coding Standards | General programming standards | Required |
| Framework Standards | Framework-specific rules | By tech stack |
| Best Practices | Recommended practices | Recommended |
| Security Standards | Security-related requirements | Optional |

### Rule Writing Best Practices

| Practice | Description | Example |
|----------|-------------|---------|
| **Specific** | Avoid vague descriptions | ❌ "Use good naming" → ✅ "Components use PascalCase" |
| **Examples** | Provide examples for complex rules | "Error handling example: try { ... } catch (e) { logger.error(e) }" |
| **Organized** | Group by functionality | Coding standards / Architecture standards / Testing standards |
| **Concise** | Keep only necessary rules | Single rule within 200 characters |
| **Prioritized** | Important rules first | Architecture > Coding > Style |

### Custom Rules Template

```markdown
## [Project Name] Custom Rules

### Project Standards
- API routes use /api/v1 prefix
- Response format: { success: boolean, data: any, error?: string }
- All models must include created_at and updated_at

### Naming Conventions
- Components: PascalCase (UserProfile.tsx)
- Utilities: camelCase (formatDate.ts)
- Constants: UPPER_SNAKE_CASE (API_BASE_URL)
- Database tables: snake_case (user_profiles)

### Code Style
- Use single quotes instead of double quotes
- Indent with 2 spaces
- Maximum line length 100 characters

### Security Requirements
- All user input must be validated
- Sensitive operations require permission checks
- Do not log passwords/Tokens
```

---

## Performance Optimization

### Rules File Optimization

```bash
# Check file size (recommended < 50KB)
ls -lh .cursorrules

# Check line count (recommended < 500 lines)
wc -l .cursorrules
```

### Cursor Configuration Optimization

```json
{
  "cursor.ai.model": "claude-3.5-sonnet",
  "cursor.ai.maxTokens": 4096,
  "cursor.ai.temperature": 0.2,
  "cursor.ai.enableCodeActions": true
}
```

### Performance Checklist

- [ ] Rules file is concise with no redundancy
- [ ] Avoid repeating the same rules
- [ ] Regularly clean up unused rules
- [ ] Rules have clear priorities

---

## Common Pitfalls

### ❌ Common Mistakes

| Mistake | Consequence | Solution |
|---------|-------------|----------|
| Mixing incompatible rules | Confused AI suggestions | Choose rules matching your tech stack |
| Overly complex rules | Slower responses | Keep rules concise and focused |
| Ignoring project characteristics | Suggestions not applicable | Add project-specific rules |
| Frequent rule changes | Inconsistent results | Lock rule version when stable |
| Applying without testing | Not as expected | Test on sample files first |

### ✅ Recommended Practices

| Practice | Description |
|----------|-------------|
| **Gradual Adoption** | Start with basic rules, then add specific ones gradually |
| **Regular Review** | Evaluate rule effectiveness monthly and adjust |
| **Team Sync** | Ensure team members use the same version |
| **Version Lock** | Include rules file in version control |
| **Documentation** | Record rule changes and reasons |

---

## Gradual Adoption Roadmap

### Week 1: Basic Rules

```
✓ Copy general rules
✓ Familiarize with AI suggestion patterns
✓ Team members install Cursor
```

### Week 2: Framework Rules

```
✓ Add framework-specific rules
✓ Adjust coding style
✓ Gather team feedback
```

### Week 3: Custom Rules

```
✓ Add project-specific rules
✓ Refine team conventions
✓ Resolve rule conflicts
```

### Week 4: Optimization

```
✓ Evaluate rule effectiveness
✓ Remove redundant rules
✓ Lock rule version
```

---

<div align="center">

**[⬆ Back to Top](#best-practices-guide)** | **[📚 Back to Documentation Home](./README.md)**

</div>
