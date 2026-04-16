# Quick Start Guide

> 🚀 Get started with Awesome Cursor Rules in 5 minutes

## Table of Contents

- [Prerequisites](#prerequisites)
- [Three-Step Quick Start](#three-step-quick-start)
- [Choose Your Rules](#choose-your-rules)
- [Advanced Configuration](#advanced-configuration)
- [Next Steps](#next-steps)

---

## Prerequisites

Make sure you have the following tools installed:

| Tool | Version Requirement | Download Link |
|------|---------------------|---------------|
| Cursor AI Editor | Latest Version | [cursor.sh](https://cursor.sh/) |
| Git | Any Version | [git-scm.com](https://git-scm.com/) |

---

## Three-Step Quick Start

### Step 1: Get the Rules

```bash
# Clone the repository locally
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# Enter the directory
cd awesome-cursorrules-zh
```

### Step 2: Choose and Apply Rules

Select appropriate rules based on your tech stack:

**🌐 Frontend Projects**

```bash
# Next.js + TypeScript
cp rules/frontend/react/nextjs-typescript/.cursorrules /path/to/your/project/

# Vue 3 Composition API
cp rules/frontend/vue/composition-api/.cursorrules /path/to/your/project/

# React Query
cp rules/frontend/react/react-query/.cursorrules /path/to/your/project/
```

**⚙️ Backend Projects**

```bash
# Python FastAPI
cp rules/backend/python/fastapi-api-example/.cursorrules /path/to/your/project/

# Node.js + ES Modules
cp rules/backend/nodejs/es-module-guide/.cursorrules /path/to/your/project/

# Go Backend
cp rules/backend/go/backend-scalability/.cursorrules /path/to/your/project/
```

**📱 Mobile Projects**

```bash
# Flutter
cp rules/mobile/flutter/flutter-app-expert/.cursorrules /path/to/your/project/

# React Native
cp rules/mobile/react-native-expo/.cursorrules /path/to/your/project/
```

### Step 3: Use in Cursor

1. Open your project with Cursor
2. Confirm `.cursorrules` file is in the **project root**
3. Start coding and enjoy AI assistance

> 💡 **Tip**: It's recommended to restart Cursor for the first use to ensure rules take effect

---

## Choose Your Rules

### Quick Index by Tech Stack

The complete rule directory is located at `rules/`:

```
rules/
├── ai/                   # AI/ML Rules
├── backend/              # Backend Development Rules
│   ├── go/
│   ├── java/
│   ├── nodejs/
│   ├── php/
│   └── python/
├── blockchain/           # Blockchain Rules
├── cloud/                # Cloud Services Rules
├── data/                 # Data Engineering Rules
├── data-science/         # Data Science Rules
├── database/             # Database Rules
├── devops/               # DevOps Rules
├── edge/                 # Edge Computing Rules
├── frontend/             # Frontend Development Rules
│   ├── angular/
│   ├── react/
│   ├── svelte/
│   └── vue/
├── mobile/               # Mobile Development Rules
│   ├── android/
│   ├── flutter/
│   ├── ios/
│   └── react-native-expo/
├── security/             # Security Rules
└── systems/              # Systems Programming Rules
```

### Popular Rules Recommendations

| Tech Stack | Recommended Rule | Use Case |
|------------|------------------|----------|
| **Next.js** | `nextjs-typescript` | Full-stack React Applications |
| **Vue 3** | `composition-api` | Modern Vue Projects |
| **React Native** | `react-native-expo` | Cross-platform Mobile Apps |
| **Flutter** | `flutter-app-expert` | Native Mobile Applications |
| **FastAPI** | `fastapi-api-example` | Python API Development |
| **Django** | `django-best-practices` | Python Web Applications |
| **NestJS** | `nestjs-typescript` | Node.js Enterprise Apps |
| **Go** | `backend-scalability` | High-performance Backend Services |

---

## Advanced Configuration

### Merge Multiple Rule Sets

For frontend-backend separated projects, you can merge multiple rules:

```bash
# Create merged rules file
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules

# Add separator
echo "" >> .cursorrules
echo "# ===== Backend Rules =====" >> .cursorrules
echo "" >> .cursorrules

# Append backend rules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

### Directory-Level Rules Configuration

Set different rules for different modules:

```
my-project/
├── .cursorrules                 # Project-level general rules
├── frontend/
│   └── .cursorrules             # Frontend rules (Next.js)
├── backend/
│   └── .cursorrules             # Backend rules (FastAPI)
└── shared/
    └── .cursorrules             # Shared module rules
```

> 📌 **Rule Priority**: Subdirectory rules override parent directory rules

### Custom Rules

Add project-specific rules at the end of `.cursorrules`:

```bash
# Append custom rules
cat >> .cursorrules << 'EOF'

## Project Custom Rules

### Naming Conventions
- Components: PascalCase (e.g., UserProfile.tsx)
- Utilities: camelCase (e.g., formatDate.ts)
- Constants: UPPER_SNAKE_CASE (e.g., API_BASE_URL)

### API Conventions
- Route prefix: /api/v1
- Response format: { success, data, error }

### Database Conventions
- Primary key: id
- Timestamps: created_at, updated_at
- Soft delete: deleted_at
EOF
```

---

## Next Steps

Continue learning based on your needs:

| If you want to... | Read |
|-------------------|------|
| Learn configuration techniques in depth | [Best Practices Guide](./best-practices.md) |
| Understand detailed installation steps | [Installation Guide](./installation-guide.md) |
| Solve usage issues | [Troubleshooting](./troubleshooting.md) |
| View rule syntax | [API Reference](./api-reference.md) |
| Contribute to the project | [Contributing Guide](../../CONTRIBUTING.md) |

---

## Quick Command Reference

```bash
# View all available rules
ls rules/

# Check rule file content
cat .cursorrules | head -30

# Verify file encoding (should be UTF-8)
file .cursorrules

# Backup current rules
cp .cursorrules .cursorrules.backup
```

---

<div align="center">

> 💡 **Tip**: In most cases, simply copying a `.cursorrules` file to your project root is all you need!

**[⬆ Back to Top](#quick-start-guide)** | **[📚 Back to Documentation Home](./README.md)**

</div>
