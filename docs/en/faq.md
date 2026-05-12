# FAQ

## About `.cursorrules`

### What is a `.cursorrules` file?

A `.cursorrules` file is a project-level instruction file used by Cursor AI. It defines coding conventions, architecture constraints, and practical preferences so the assistant can generate output that better matches your project.

### Where should I put `.cursorrules`?

Place the file in the project root.

```text
your-project/
├── .cursorrules
├── src/
└── ...
```

Cursor reads it automatically when the project is opened.

### Can I use multiple rules together?

Yes. A common approach is:

1. Start with a primary stack rule.
2. Add one or two supporting rules (for example, testing or security).
3. Add project-specific constraints at the end.

Keep the merged file focused. Too many overlapping constraints can reduce output consistency.

### How do I choose the right rule quickly?

Use this order:

1. Confirm your primary stack.
2. Select one base rule from the matching category.
3. Add domain constraints only when needed (DevOps, data, security, etc.).
4. Validate with one real coding task before rolling out to the team.

## Troubleshooting usage

### Rules seem ignored. What should I check first?

Check these in order:

1. File name is exactly `.cursorrules`.
2. File is in the project root.
3. File encoding is UTF-8.
4. Cursor has been restarted after changes.

### How can I verify rules are loaded?

Ask Cursor to explain your project conventions. If the answer reflects your rule content, it is usually loaded correctly.

You can also run a small test task, such as creating a component or API endpoint, and compare naming, structure, and patterns with your expected style.

### Does a long rule file hurt performance?

Usually not in a dramatic way, but large or repetitive files can reduce clarity.

Recommended:

- Keep sections concise and explicit.
- Avoid duplicate constraints.
- Prefer concrete examples over abstract wording.

### How do I avoid conflicting behavior?

If rules fight each other, split by module:

- Root rule: global conventions.
- Subdirectory rule: local architecture and domain details.

This pattern is usually more stable than one giant merged file.

## Team and contribution

### Should `.cursorrules` be committed to Git?

Yes. Treat it as part of your engineering contract.

- Commit with code changes when constraints evolve.
- Review rule updates in pull requests.
- Keep a short rationale in commit messages.

### How do we onboard new contributors with rules?

A practical sequence:

1. Read project rule file.
2. Complete one guided coding task.
3. Run lint/test pipeline.
4. Review output against team conventions.

### How can I contribute new rules here?

1. Fork the repository.
2. Add or update rules under `rules/`.
3. Run `npm run validate` and `npm run check`.
4. Open a pull request with context and expected use cases.

See the full process in [Contributing](/en/contributing).

## Project and ecosystem

### How is this project related to the original awesome-cursorrules?

This repository is a localized and expanded edition with:

- Chinese-first content and bilingual docs,
- additional practical guidance,
- structured navigation for real adoption workflows.

### Where can I track updates?

- [GitHub repository](https://github.com/LessUp/awesome-cursorrules-zh)
- [Changelog](/en/changelog)
- [GitHub releases](https://github.com/LessUp/awesome-cursorrules-zh/releases)

### Where can I ask for help?

- [Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- [Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions)
