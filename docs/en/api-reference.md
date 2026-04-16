# API Reference

> 📖 `.cursorrules` File Format Specification and Reference

## Table of Contents

- [File Format](#file-format)
- [Rule Structure](#rule-structure)
- [Common Directives](#common-directives)
- [Template Variables](#template-variables)
- [Example Rule Library](#example-rule-library)
- [Best Practices](#best-practices)

---

## File Format

### Basic Specifications

| Attribute | Requirement |
|-----------|-------------|
| Filename | `.cursorrules` (dot prefix) |
| Encoding | UTF-8 |
| Format | Markdown plain text |
| Location | Project root or subdirectory |
| Size | Recommended < 50KB |

### File Locations

```
project/
├── .cursorrules              # Project-level rules (recommended)
├── src/
│   └── .cursorrules          # Module-level rules (optional)
└── docs/
    └── .cursorrules          # Documentation-level rules (optional)
```

> 💡 **Priority**: Subdirectory rules > Parent directory rules

---

## Rule Structure

### Recommended Structure Template

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
- Pitfalls to avoid
```

### Standard Sections

| Section | Description | Optional |
|---------|-------------|----------|
| Overview | Project background and design principles | Recommended |
| Coding Standards | General programming standards | Required |
| Framework Standards | Framework-specific rules | By tech stack |
| Best Practices | Recommended practices | Recommended |
| Security Standards | Security-related requirements | Optional |

---

## Common Directives

### Coding Style Directives

```markdown
## Coding Style

- Use 2 spaces for indentation
- Maximum line length 100 characters
- Use single quotes instead of double quotes
- Semicolons at statement end are optional
```

### Naming Convention Directives

```markdown
## Naming Conventions

### Variable Naming
- Use camelCase (e.g., userName)
- Booleans use is/has prefix (e.g., isActive)
- Constants use UPPER_SNAKE_CASE (e.g., MAX_COUNT)

### Function Naming
- Start with verb (e.g., getUserData)
- Async functions use async prefix or Promise suffix
- Event handlers use handle prefix (e.g., handleClick)

### File Naming
- Components: PascalCase (e.g., UserProfile.tsx)
- Utilities: camelCase (e.g., formatDate.ts)
- Config files: kebab-case (e.g., api-config.ts)
```

### Code Organization Directives

```markdown
## Code Organization

### File Structure
- Components go in components/ directory
- Utilities go in utils/ directory
- Type definitions go in types/ directory

### Import Order
1. Third-party libraries
2. Project internal modules
3. Relative path imports
4. Style files

### Export Standards
- Default exports only for main components
- Named exports for utility functions
- Index files for unified exports
```

### Error Handling Directives

```markdown
## Error Handling

- Use try/catch for asynchronous operations
- Error logs use unified logger
- Don't expose internal error details to users
- Add retry mechanisms for critical operations
```

### TypeScript Directives

```markdown
## TypeScript Standards

- All functions must declare return types
- Don't use any type
- Interfaces use I prefix (e.g., IUser)
- Types use T prefix (e.g., TUserData)
- Enums use E prefix (e.g., EStatus)
```

### React-Specific Directives

```markdown
## React Standards

### Component Standards
- Use function components instead of class components
- Props use interface definition
- Use React.FC or explicit return type
- Component logic extracted to custom hooks

### Hooks Standards
- Only call hooks at the top level of function components
- Custom hooks start with use
- Dependency arrays are complete and accurate

### State Management
- Prefer React Context
- Complex state use useReducer
- Avoid overusing useEffect
```

---

## Template Variables

### Common Pattern Variables

| Variable Pattern | Description | Example |
|------------------|-------------|---------|
| `{ComponentName}` | Component name placeholder | Button, UserCard |
| `{hookName}` | Hook name placeholder | useAuth, useForm |
| `{feature}` | Feature module name | auth, dashboard |
| `{TYPE}` | Type name placeholder | User, ApiResponse |

### Conditional Directive Templates

```markdown
## Conditional Rules

### Component Development
- If a component receives more than 5 props, consider splitting or composition
- If a function exceeds 20 lines, consider splitting
- If a file exceeds 300 lines, consider modularizing

### Performance Optimization
- List rendering must include key attributes
- Large data components use virtual scrolling
- Frequent updates use useMemo/useCallback
```

---

## Example Rule Library

### General Standards Example

```markdown
# General Programming Standards

## Core Principles
- Code clarity over cleverness
- Readability over brevity
- Consistency over personal preference

## Coding Standards
- Use meaningful names
- Functions have single responsibility
- Avoid deep nesting

## Comment Standards
- Complex logic must be commented
- Public APIs must be documented
- Comments explain why, not what
```

### React + TypeScript Example

```markdown
# React + TypeScript Standards

## Component Development
- Props interface named ComponentName + Props
- Use destructuring for props
- Default parameters in destructuring

## Type Definitions
interface IButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

## Style Standards
- Use CSS Modules or styled-components
- Class names use BEM methodology
- Avoid inline styles
```

### API Development Example

```markdown
# API Development Standards

## Routing Standards
- RESTful design
- Use nouns instead of verbs
- Version prefix: /api/v1

## Response Format
{
  "success": boolean,
  "data": any,
  "error": {
    "code": string,
    "message": string
  }
}

## Error Handling
- Correct HTTP status codes
- User-friendly error messages
- Detailed logging
```

---

## Best Practices

### Rule Writing Principles

1. **Be Specific**
   - ❌ "Use good naming"
   - ✅ "Components use PascalCase"

2. **Be Concise**
   - ❌ Long-winded explanations
   - ✅ Short, clear instructions

3. **Be Verifiable**
   - ❌ "Performance should be good"
   - ✅ "Component render time < 100ms"

4. **Clear Priorities**
   - Important rules first
   - Use heading levels to distinguish priority

### Rule Testing Methods

```bash
# 1. Verify syntax
# Check Markdown format
cat .cursorrules | head -50

# 2. Verify encoding
file .cursorrules

# 3. Functionality test
# Create a test file in Cursor
# Type code and observe AI suggestions
```

### Rule Optimization Checklist

- [ ] Rule count < 50 items
- [ ] Each rule < 200 characters
- [ ] Use consistent terminology
- [ ] Avoid conflicting rules
- [ ] Include code examples
- [ ] Group by topic

---

## Advanced Features

### Conditional Rules

Add conditions based on project characteristics:

```markdown
## Conditional Rules

### If Developing New Features
- Write unit tests
- Update documentation
- Add type definitions

### If Fixing Bugs
- Add regression tests
- Document the fix reason
- Check related functionality
```

### Layered Rules

```markdown
## Architecture Layer Standards

### Data Layer
- Repository pattern
- Unified data interfaces

### Business Layer
- Service encapsulates business logic
- Transaction management

### Presentation Layer
- Controller handles requests
- Data validation
```

---

<div align="center">

**[⬆ Back to Top](#api-reference)** | **[📚 Back to Documentation Home](./README.md)**

</div>
