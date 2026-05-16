# System Overview

`Awesome Cursor Rules Academy` is not only a visual refresh. It is a full content and publication pipeline.

<SystemShowcase
  title="Four layers turn repository facts into a whitepaper-grade presentation"
  summary="Rule assets, generated site facts, narrative routes, and theme-aware publishing all work together as one system."
  :nodes="[
    {
      eyebrow: 'Asset Layer',
      title: 'Rule assets and category corpus',
      detail: 'The rule files stay canonical, and the rules index remains the evidence layer.'
    },
    {
      eyebrow: 'Sync Layer',
      title: 'Generated site facts before build',
      detail: 'Rule counts, domain coverage, and top categories are refreshed before dev and build so the shell never drifts from the repository.'
    },
    {
      eyebrow: 'Narrative Layer',
      title: 'Introduction, academy, architecture, guides',
      detail: 'The new IA explains why the project matters before readers move into implementation detail.'
    },
    {
      eyebrow: 'Publishing Layer',
      title: 'Theme components and GitHub Pages',
      detail: 'Theme-aware figures, citation surfaces, and editorial components carry the project outward through GitHub Pages.'
    }
  ]"
/>

## Engineering decisions

### Sync facts before VitePress runs

Following a kimi-cli-like docs workflow, the site now generates build facts before `vitepress dev` and `vitepress build`. That keeps the homepage and configuration grounded in source assets.

### Components exist to clarify the system

The theme now uses components with distinct narrative roles:

- **WhitepaperHero** for thesis and reading direction
- **NarrativeRail** for reading order
- **SystemShowcase** for structural explanation
- **CurriculumDeck** for role-specific paths
- **CitationLedger** for research framing
