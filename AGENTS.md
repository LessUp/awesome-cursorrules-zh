# AGENTS.md - AI Agent Workflow Instructions

## Project Philosophy: Spec-Driven Development (SDD)

This project strictly follows the **Spec-Driven Development (SDD)** paradigm. All code implementations must be based on the specification documents in the `/specs` directory as the **Single Source of Truth**.

## Directory Context

### Specifications (`/specs/`)
| Directory | Purpose |
|-----------|---------|
| `/specs/product/` | Product feature definitions & acceptance criteria (PRDs) |
| `/specs/rfc/` | Technical design documents & architecture proposals |
| `/specs/api/` | API interface definitions (OpenAPI, GraphQL schemas, etc.) |
| `/specs/db/` | Database schema specifications |
| `/specs/testing/` | BDD test case specifications (Gherkin .feature files) |

### Documentation (`/docs/`)
| Directory | Purpose |
|-----------|---------|
| `/docs/setup/` | Environment setup guides |
| `/docs/tutorials/` | User & developer tutorials |
| `/docs/architecture/` | High-level architecture overview |
| `/docs/assets/` | Static assets (images, diagrams, etc.) |

### Rules (`/rules/`)
Cursor AI coding rules organized by technology domain. Each subdirectory contains `.cursorrules` files for specific tech stacks.

## AI Agent Workflow Instructions

When you (AI) are asked to develop a new feature, modify existing functionality, or fix a bug, **you MUST strictly follow the workflow below. Do NOT skip any steps**:

### Step 1: Review Specifications

- First, read all relevant documents in `/specs` directory including product docs, RFCs, and API definitions
- If the user's request conflicts with existing specs, **STOP coding immediately** and point out the conflict
- Ask the user whether they want to update the spec first before proceeding

### Step 2: Spec-First Update

- If this is a new feature, or requires changes to existing interfaces/database structures, **MUST first propose modifying or creating corresponding Spec documents** (e.g., `openapi.yaml` or RFC documents)
- Wait for user confirmation on spec changes before entering the code writing phase
- **Never modify code before specs are confirmed**

### Step 3: Implementation

- When writing code, **100% comply** with the definitions in the specs (including variable naming, API paths, data types, status codes, etc.)
- **Do NOT add features not defined in specs** (No Gold-Plating)
- Follow existing code conventions and patterns in the project

### Step 4: Test against Specs

- Write unit tests and integration tests based on the acceptance criteria in `/specs`
- Ensure test cases cover all boundary conditions described in the specs
- Verify all API behaviors match the API specifications

## Code Generation Rules

- Any externally exposed API changes **MUST** be synchronized with `/specs/api/openapi.yaml` or relevant spec files
- Database schema changes **MUST** be reflected in `/specs/db/` specifications
- When uncertain about technical details, consult `/specs/rfc/` architecture documents. **Do NOT fabricate design patterns**
- All changes should include appropriate documentation updates

## VitePress Documentation

This project uses **VitePress** for documentation. Key points:
- Source files are in `/zh/` (Chinese) and `/en/` (English)
- Configuration is in `/.vitepress/`
- Run `npm run docs:dev` to preview documentation locally
- Run `npm run docs:build` to build the static site

## Rule Files (`/rules/`)

The `/rules/` directory contains `.cursorrules` files organized by technology domain:
- Each rule directory may contain a `.cursorrules` file
- Rules are categorized by: frontend, backend, mobile, ai, devops, cloud, security, blockchain, iot, quantum, data, data-science, systems, etc.
- When adding new rules, follow the existing directory structure and naming conventions

## Contributing

- Follow the contribution guidelines in `CONTRIBUTING.md`
- Use conventional commit messages (feat, fix, docs, translate, refactor, style, test, chore)
- Ensure translations maintain consistency between Chinese and English versions
