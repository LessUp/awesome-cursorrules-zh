# Adoption Path

This page turns the shell into a lightweight rollout sequence.
The goal is not to copy every rule at once, but to prove value and then formalize what works.

## Why sequence matters

Teams usually fail when they start by copying a large catalog without deciding why the rules matter, where they belong, or who maintains them.

## Three phases

### Phase 1: validate the value case

- Use the [Decision Brief](../whitepaper/decision-brief) to align on the goal.
- Pick one pilot repository instead of trying to transform everything at once.
- Define what success means: better consistency, faster onboarding, or clearer review boundaries.

### Phase 2: define the system boundary

- Use the [Site Blueprint](../architecture/blueprint) to separate rules, docs, and publishing concerns.
- Treat the rules area as an evidence layer, not the only interface.
- Choose a small baseline combination before layering domain-specific rules.

### Phase 3: build a governance loop

- Review rule changes through Git and pull requests.
- Move repeated instructions into project-specific rules.
- Use [Role Paths](./role-paths) to spread ownership beyond a single editor.

## Suggested first month

| Week | Action | Output |
| --- | --- | --- |
| 1 | Read the [Project Overview](../whitepaper/overview) and [Site Blueprint](../architecture/blueprint) | Shared value and boundary notes |
| 2 | Test one baseline rule combination in a real workflow | First useful / noisy signals |
| 3 | Write repeated guidance back into rules and review it in PRs | A local baseline |
| 4 | Assign maintenance responsibilities through [Role Paths](./role-paths) | A lightweight governance model |

<SectionCallout
  title="Adoption principle"
  body="Pilot narrowly, keep the shell understandable, and only expand rule combinations after the first loop proves useful."
  href="./role-paths"
  label="Continue to role paths"
/>
