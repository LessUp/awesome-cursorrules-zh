# Using Rules Tutorial

This tutorial details how to use rule files from awesome-cursorrules-zh.

## What is .cursorrules?

`.cursorrules` is a rule file for Cursor AI editor that defines the behavior and coding standards of the AI assistant. With rule files, you can:

- Define coding style and best practices
- Specify tech stack and framework standards
- Set project-specific conventions
- Improve AI-assisted programming quality

## Rule File Structure

### Standard Format

```markdown
# [Tech Name] .cursorrules Prompt File

You are an expert in [tech domain].

## Core Principles

- Principle 1: Clear and concise
- Principle 2: Modular design
- Principle 3: Security first

## Tech Stack

- Tech A
- Tech B

## Best Practices

1. Specific practice suggestions
2. Code examples

## Key Conventions

1. Coding conventions
2. Naming standards
```

## Usage Steps

### 1. Choose the Right Rule

Select the corresponding rule based on your project tech stack:

| Project Type | Recommended Rule Directory |
|--------------|---------------------------|
| React frontend | `rules/frontend/react/` |
| Vue frontend | `rules/frontend/vue/` |
| Python backend | `rules/backend/python/` |
| Node.js backend | `rules/backend/nodejs/` |
| Mobile app | `rules/mobile/` |
| DevOps | `rules/devops/` |

### 2. Get Rule File

**Method 1: Browse Website**

1. Visit [awesome-cursorrules-zh.js.org](https://awesome-cursorrules-zh.js.org/)
2. Find suitable rule
3. Copy content to your project

**Method 2: Git Clone**

```bash
git clone https://github.com/LessUp/awesome-cursorrules-zh.git
# Copy needed rule files
```

**Method 3: Direct Download**

```bash
# Download a single rule
curl -o .cursorrules https://raw.githubusercontent.com/LessUp/awesome-cursorrules-zh/main/rules/frontend/react/nextjs-typescript/.cursorrules
```

### 3. Place Rule File

Place `.cursorrules` file in project root:

```
your-project/
├── .cursorrules          # Rule file
├── src/
├── package.json
└── ...
```

### 4. Verify Activation

1. Open project with Cursor
2. Use AI Chat or code generation feature
3. Observe if AI follows rules in the file

## Advanced Usage

### Combining Multiple Rules

Create a combined rule file:

```markdown
# Full-stack Development Rules

## Frontend Rules (Next.js + React)

You are an expert in Next.js and React development.

## Backend Rules (Node.js + Express)

You are an expert in Node.js and Express development.

## Full-stack Conventions

- TypeScript on both frontend and backend
- RESTful API design
- Unified error handling
```

### Custom Rules

Add project-specific configuration on top of base rules:

```markdown
# Custom configuration based on standard rules

You are a Next.js expert. (Base rule)

## Project-specific Configuration

- Use pnpm instead of npm
- Use src/app directory structure
- Use @/ path alias
- Enable App Router
- Use Tailwind CSS
```

### Team Collaboration

In team projects:

1. Add `.cursorrules` to version control
2. Team members use unified rules
3. Regularly review and update rules

## FAQ

### Q: Rule file not working?

**A: Check the following:**
- Is the file in project root
- Is the filename correct (`.cursorrules`, not `.cursorrules.txt`)
- Has Cursor reloaded the project

### Q: How to verify rule activation?

**A: Ask in AI Chat:**
```
Please tell me the coding conventions for the current project
```
AI should answer based on `.cursorrules` content.

### Q: Rule file too large?

**A: Simplify rule content:**
- Keep only core principles
- Remove duplicate content
- Use links to reference detailed documentation

## Best Practices

1. **Keep concise**: Rule file within 1-2KB
2. **Update regularly**: Update rules as project evolves
3. **Team consensus**: Ensure team members understand rules
4. **Version control**: Include rules in Git management
5. **Test validation**: Verify rules achieve expected results

## Related Resources

- [Contributing Guide](./contributing.md) - Add new rules
- [Translation Guide](./translating.md) - Help with translation
- [Best Practices](../../zh/best-practices.md) - More suggestions
