# Performance Whitepaper

Performance is no longer treated as raw build time alone. For a research-grade publication surface, the meaningful questions are whether the generation pipeline is stable, the reading path is efficient, the figures are reliable, and the shell remains maintainable.

<SignalGrid
  eyebrow="Performance Signals"
  title="Expand performance beyond build time into maintainability and evidence reliability"
  intro="This chapter frames performance across four dimensions: generation, navigation, figure reliability, and maintainability."
  :items="[
    { label: 'Rule assets', value: '132+', detail: 'Corpus scale drives the complexity of the publication system.' },
    { label: 'Domains', value: '32+', detail: 'Breadth requires a more disciplined IA and snapshot layer.' },
    { label: 'Phases', value: '3', detail: 'Curation, orchestration, and publication define the generation pipeline.' }
  ]"
/>

## Generation pipeline

The generation pipeline has three stages:

1. **Asset discovery** across `rules/`
2. **Snapshot generation** for `categoryDistribution`, `coverageBuckets`, `qualitySignals`, and `timelineSignals`
3. **Publication rendering** through VitePress

The main benefit is alignment: the site shell stays grounded in repository facts instead of drifting into static copy.

## Maintainability

Maintainability is one of the core performance metrics in this redesign.

- **Single data base:** metrics come from one snapshot layer
- **Single visual language:** the whitepaper components share the same figure tokens
- **Single reading path:** introduction, architecture, algorithms, performance, references, and evidence remain predictable

That matters more in the long run than shaving a few seconds from a one-off build.

## Figure reliability

Figure performance here means:

- light and dark mode stay readable
- labels, lines, and surfaces come from consistent tokens
- SVG diagrams remain visible instead of relying on brittle theme hacks

## Why this chapter belongs in the whitepaper

Senior readers want to know whether the generation pipeline is trustworthy, whether the shell will remain maintainable, and whether the figures and navigation scale as the corpus grows. Those are whitepaper questions, not implementation trivia.

## Continue reading

1. [System Overview](../architecture/system-overview)
2. [Algorithms Overview](../algorithms/overview)
3. [References](../research/references)
