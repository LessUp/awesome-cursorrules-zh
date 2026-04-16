# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2025-04-16

### 🎉 Highlights

- **Bilingual Documentation**: Complete Chinese and English documentation support
- **Professional Refactor**: Restructured docs with improved navigation and clarity
- **New API Reference**: Added comprehensive rules format reference guide

### 📚 Documentation

#### Added
- Full English documentation set in `docs/en/`
  - README.md - Documentation home
  - getting-started.md - Quick start guide  
  - installation-guide.md - Complete setup instructions
  - best-practices.md - Rules usage best practices
  - troubleshooting.md - Comprehensive troubleshooting guide
  - api-reference.md - Rules file format reference
- Chinese documentation restructured in `docs/zh/`
  - All documents professionally rewritten
  - Improved structure and navigation
  - Added cross-references between documents
- New `docs/assets/` directory for shared resources

#### Changed
- Moved original docs to `docs/zh/` directory
- Enhanced documentation with better formatting and examples
- Added quick navigation and cross-links
- Improved troubleshooting section with diagnostic scripts

### 🔧 Infrastructure

#### Added
- Bilingual navigation in all documentation
- Language switcher badges
- Improved documentation templates

---

## [2.0.0] - 2025-01-16

### ✨ Features

#### New Rules (29 files)

**React Ecosystem**
- `apollo-graphql` - Apollo GraphQL integration
- `mobx` - MobX state management
- `nextjs-14-seo` - Next.js 14 SEO optimization
- `nextjs-react-ts` - Next.js React TypeScript
- `nextjs-supabase` - Next.js with Supabase
- `nextjs-ui` - Next.js UI development
- `react-components` - React components best practices
- `react-typescript` - React with TypeScript
- `styled-components` - Styled components guidelines

**Backend Development**
- `go-backend` - Go backend scalability
- `java-springboot` - Java Spring Boot patterns
- `django-best-practices` - Python Django guidelines
- `nestjs-typescript` - NestJS TypeScript
- `express-mongodb` - Express with MongoDB

**Others**
- `convex` - Convex database rules
- `dragonruby` - DragonRuby best practices
- `elixir-engineer` - Elixir engineering guidelines
- `github-code-quality` - GitHub code quality
- `typescript-axios` - TypeScript Axios integration
- `typescript-conventions` - TypeScript conventions
- `vite-tailwind` - Vite with Tailwind CSS

### 📖 Documentation

#### Added
- Complete rewrite of `docs/getting-started.md` - Three-step quick start guide
- Complete rewrite of `docs/best-practices.md` - Comprehensive best practices manual
- Complete rewrite of `docs/installation-guide.md` - Multi-platform installation guide
- Complete rewrite of `docs/troubleshooting.md` - Troubleshooting toolbox
- Complete rewrite of `CONTRIBUTING.md` - Contribution guidelines and glossary
- Complete rewrite of `README.md` - Streamlined project homepage

### 🐛 Bug Fixes

- Removed duplicate directory `rules/frontend/mobile/`
- Merged duplicate Flutter rules directories
- Fixed invalid path references in documentation
- Added missing `.cursorrules` files

### 🔧 Changed

- Updated project statistics: 119 rule files, 43 tech categories, 568 documents
- Unified rules file format and style
- Optimized directory structure organization

---

## [1.5.0] - 2024-07-03

### ✨ Features

- Completed all rules translation (100%)
- Updated core documentation to reflect maintenance phase

---

## [1.4.0] - 2024-07-02

### ✨ Features

- Completed full rules translation
- Updated documentation to reflect translation progress

---

## [1.3.0] - 2024-07-02

### ✨ Features

- Elixir engineer guidelines translation
- Engineering ticket template translation
- Gherkin style testing translation
- Git conventional commit messages translation
- GitHub code quality translation
- Xray test case translation

---

## [1.2.0] - 2024-07-02

### ✨ Features

- 50 new document translations (95% total progress)
- Restructured translation progress reporting
- Translation troubleshooting guide

### ✅ Completed

- Cloud-native domain: 100%
- Mobile development domain: 100%

---

## [1.1.0] - 2024-06-25

### ✨ Features

- Django full rules set translation
- FastAPI core standards translation
- Data Science domain: Python data processing, Pandas, Matplotlib, PyTorch, TensorFlow
- Machine Learning: Scikit-learn best practices

---

## [1.0.0] - 2024-01-01

### 🎉 Initial Release

First official release.

#### Rule Sets (29 Total)

**React Ecosystem (13)**
- Next.js + TypeScript complete configuration
- React component development best practices
- Chakra UI and Styled Components style guides
- GraphQL Apollo Client integration
- MobX state management
- React Native Expo mobile development

**Vue Ecosystem (2)**
- Vue 3 Composition API development standards
- Nuxt 3 full-stack development guide

**TypeScript Specific (3)**
- TypeScript coding conventions
- Vite + Tailwind CSS build setup
- Axios HTTP client integration

**Backend Development (6)**
- Python FastAPI
- Node.js Express + MongoDB
- TypeScript NestJS
- ASP.NET ABP framework

**Others (5)**
- React Native Expo cross-platform
- iOS UIKit native development
- Solidity Foundry smart contracts
- C++ modern programming standards
- Drupal 11 CMS

#### Infrastructure

- Tech-stack categorized directory structure
- Chinese README and documentation
- GitHub Actions quality checks
- Issue and PR templates
- Code of conduct and contribution guidelines

---

## Version Guide

| Version | Meaning |
|---------|---------|
| Major | Breaking changes, major architecture updates |
| Minor | New features, significant improvements |
| Patch | Bug fixes and small improvements |

## Migration Guides

### Migrating to 2.1.0

Documentation paths have been restructured:

**Old Paths** (still work with redirects):
```
docs/getting-started.md
docs/best-practices.md
docs/installation-guide.md
docs/troubleshooting.md
```

**New Paths**:
```
docs/zh/getting-started.md    # Chinese
docs/en/getting-started.md    # English
```

No action required - old paths are automatically redirected.

---

[Unreleased]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v2.1.0...HEAD
[2.1.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.5.0...v2.0.0
[1.5.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/LessUp/awesome-cursorrules-zh/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/LessUp/awesome-cursorrules-zh/releases/tag/v1.0.0
