# System Overview

The site is no longer just a polished landing page. It is a system architecture whitepaper that explains how repository assets become an evidence-driven publication surface.

<TopologyMap
  eyebrow="Five-Layer System"
  title="A five-layer system turns the repository into a review-grade publication surface"
  summary="Each layer has one explicit job so the corpus, the site shell, and the GitHub Pages output remain aligned."
  :layers="[
    { name: 'Asset Layer', detail: 'rules/ stays canonical and defines the evidence boundary.' },
    { name: 'Snapshot Layer', detail: 'sync-site-facts.mjs produces categoryDistribution, coverageBuckets, and qualitySignals.' },
    { name: 'IA Layer', detail: 'Introduction, architecture, algorithms, performance, references, and evidence form the reading order.' },
    { name: 'Presentation Layer', detail: 'SignalGrid, TopologyMap, PipelineCanvas, and DossierMatrix expose metrics and arguments.' },
    { name: 'Publishing Layer', detail: 'VitePress and GitHub Pages publish the final whitepaper shell and its publish evidence.' }
  ]"
/>

## The five-layer system

### 1. Asset layer

- **Job:** keep the rule corpus canonical.
- **Location:** `rules/`
- **Why it matters:** every metric, evidence page, and claim must be traceable to repository state.

### 2. Snapshot layer

- **Job:** translate repository state into structured data.
- **Location:** `docs/scripts/sync-site-facts.mjs`, `docs/.vitepress/site/facts.ts`
- **Why it matters:** the snapshot layer keeps metrics, diagrams, and dossiers consistent instead of hand-maintained.

### 3. IA layer

- **Job:** decide the shortest review path for senior readers.
- **Location:** `docs/.vitepress/site/atlas.ts`
- **Why it matters:** the site now explains context first, then architecture, then the rule orchestration flow, and only then the evidence corpus.

### 4. Presentation layer

- **Job:** render a coherent visual language for topology, pipeline, evidence, and references.
- **Location:** `docs/.vitepress/theme/`
- **Why it matters:** figure tokens remove the old light/dark SVG fragility and make the diagrams reusable across chapters.

### 5. Publishing layer

- **Job:** publish the final reading experience.
- **Location:** `docs/.vitepress/config.ts`
- **Why it matters:** the publishing layer keeps structure, metadata, and GitHub Pages output aligned without inventing new facts.

## Engineering decisions

### Repository assets outrank page copy

The rule corpus is not supporting material. It is the upstream source that drives metrics, diagrams, and the evidence layer.

### The snapshot layer outranks static metrics

The site now carries `categoryDistribution`, `coverageBuckets`, `qualitySignals`, and `timelineSignals`. That lets the architecture, performance, and references chapters share one factual base.

### Rule orchestration must be explainable

Instead of stopping at a category index, the site documents the rule orchestration logic that turns isolated assets into review paths, composition patterns, and publish evidence.

## Continue reading

1. [Algorithms Overview](../algorithms/overview)
2. [Performance Analysis](../whitepaper/performance)
3. [References](../research/references)
