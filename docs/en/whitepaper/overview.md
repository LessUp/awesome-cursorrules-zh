# Project Overview

This page expands the homepage into a concise narrative: why the project matters,
how the system is organized, and how to start without getting lost in the catalog.

## Why adopt this structure

The long-term value is not "132+ `.cursorrules` files" by itself.
It is the ability to turn repeated engineering judgment into a shared system that teams can review and reuse.

## How the site is organized

| Layer | Main area | Purpose |
| --- | --- | --- |
| Whitepaper | `docs/en/whitepaper/*` | Explain the investment case and reading order |
| Architecture | `docs/en/architecture/*` | Explain structure, boundaries, and information flow |
| Playbook | `docs/en/playbook/*` | Translate the shell into phased action |
| Evidence | `rules/` and `docs/en/rules/*` | Provide rule samples, composition guidance, and proof |

The English surface stays shorter than Chinese, but it follows the same IA so readers can move between them without relearning the structure.

## How to begin

1. Read the [Decision Brief](./decision-brief) to validate the value case.
2. Continue to the [Site Blueprint](../architecture/blueprint) and [Information Graph](../architecture/information-graph).
3. Use the [Adoption Path](../playbook/adoption-path) and [Role Paths](../playbook/role-paths) to decide rollout steps.
4. Enter the [Rules Evidence Library](../rules/) only after that framing is clear.

<SectionCallout
  title="Overview takeaway"
  body="The homepage should orient tech leads first; the evidence library is most useful after value and structure are already understood."
  href="../playbook/adoption-path"
  label="Continue to adoption"
/>
