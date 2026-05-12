# Contributing

Thanks for considering a contribution to `awesome-cursorrules-zh`.

## Before you start

Please align with these principles:

- Keep rule changes practical and verifiable.
- Prefer small, focused pull requests.
- Preserve bilingual consistency when updating docs.
- Follow existing directory and naming conventions.

## Contribution types

You can contribute in several ways:

1. Add new `.cursorrules` files for missing stacks.
2. Improve existing rules with clearer constraints and examples.
3. Expand Chinese source docs, then provide English translations.
4. Fix broken links, structure drift, or site UX issues.

## Rule contribution workflow

### 1) Fork and clone

```bash
git clone https://github.com/YOUR_USERNAME/awesome-cursorrules-zh.git
cd awesome-cursorrules-zh
npm install
```

### 2) Create a branch

```bash
git checkout -b feat/your-change
```

### 3) Add or update rule files

Suggested structure:

```text
rules/
└── <category>/
    └── <rule-name>/
        ├── .cursorrules
        └── README.md
```

### 4) Validate locally

```bash
npm run validate
npm run check
```

### 5) Open a pull request

Include:

- what changed,
- target scenario,
- why this change improves practical usage.

## Rule quality checklist

A high-quality rule usually has:

- clear role definition,
- explicit naming and structure constraints,
- practical examples,
- avoid-list for common anti-patterns,
- concise language without repeated statements.

Recommended size: 500-2000 bytes for focused rules. Larger files are acceptable when complexity is justified.

## Documentation workflow

For this project:

- Chinese docs are the primary source for most pages.
- English docs should stay in sync with Chinese pages.
- Keep mirrored slugs and paths where possible.

If you update docs:

```bash
npm run lint
npm run validate:i18n
```

## Commit convention

Use Conventional Commits:

- `feat`: new feature or new rule
- `fix`: bug fix or correction
- `docs`: documentation changes
- `chore`: maintenance updates
- `translate`: translation updates

Examples:

```text
feat: add fastapi production rule template
fix: correct broken links in rule index
docs: improve troubleshooting guidance
translate: update en getting-started from zh source
```

## Pull request review expectations

Reviewers usually check:

- practical correctness,
- consistency with existing style,
- bilingual completeness,
- no broken links,
- no accidental structure regression.

## Code of conduct

Please keep collaboration respectful, constructive, and inclusive.

- Focus on problems, not people.
- Be specific in feedback.
- Assume good intent.

## Need help?

- [Open an issue](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- [Start a discussion](https://github.com/LessUp/awesome-cursorrules-zh/discussions)

Thanks again for helping improve this rule ecosystem.
