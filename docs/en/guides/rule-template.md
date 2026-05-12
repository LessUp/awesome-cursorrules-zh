# Rule Template Guide

This guide helps you design practical `.cursorrules` files that can be adopted quickly by both individuals and teams.

## Design goals

A useful rule template should:

1. Define the assistant role clearly.
2. State non-negotiable constraints early.
3. Provide concrete examples for expected output.
4. Include anti-patterns to avoid repeated mistakes.
5. Stay concise enough for stable execution.

## Minimal template

```markdown
# <Stack Name> .cursorrules

You are an expert in <stack/domain>.

## Core principles
- Principle 1
- Principle 2

## Tech context
- Runtime/framework versions
- Key dependencies

## Coding conventions
- Naming
- File structure
- Error handling

## Output expectations
- What to prioritize
- What to avoid
```

Use this when speed matters and the team already shares conventions.

## Team-ready template

For long-term collaboration, add explicit sections:

```markdown
## Architecture boundaries
- Layer responsibilities
- Module dependency direction

## API contract style
- Request/response shape
- Error model

## Testing baseline
- Unit/integration expectations
- Critical paths to cover

## Security checks
- Input validation
- Secret handling
```

This format is better for monorepos and multi-team projects.

## Strong vs weak instructions

### Weak

- "Write clean code"
- "Use best practices"

### Strong

- "Use `PascalCase` for React component filenames."
- "All handlers must return `{ success, data, error }` structure."
- "Never access database from UI layer directly."

When possible, define behaviors that can be reviewed objectively.

## Example: practical custom section

```markdown
## Project custom conventions
- API routes use `/api/v1` prefix.
- Domain models include `created_at` and `updated_at`.
- New feature modules must include tests for success and failure paths.
```

## Layering strategy for monorepos

Recommended approach:

- Root `.cursorrules`: shared coding language and architecture baseline.
- Package/module `.cursorrules`: domain-specific constraints.

This avoids overloading one giant rule file and reduces cross-domain conflicts.

## Validation checklist

Before rolling out a new template:

1. Apply it to one real feature task.
2. Check naming, structure, and API consistency.
3. Compare output quality against previous baseline.
4. Remove redundant or conflicting lines.
5. Version the template in Git.

## Continuous improvement

Treat rule templates as evolving team assets:

- review monthly or per release cycle,
- update with new stack decisions,
- capture recurring review feedback into explicit constraints.

## Related pages

- [Getting started](/en/getting-started)
- [Best practices](/en/best-practices)
- [Troubleshooting](/en/troubleshooting)
- [Contributing](/en/contributing)
