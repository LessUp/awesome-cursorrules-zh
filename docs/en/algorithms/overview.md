# Algorithms Overview

This chapter does not explain model internals. It explains how the project turns a flat `.cursorrules` corpus into an explainable, composable, and verifiable publication pipeline.

<PipelineCanvas
  eyebrow="Rule Orchestration"
  title="The rule orchestration pipeline converts assets into publishable evidence"
  summary="The point of the algorithms chapter is to make the site method legible: discover, classify, compose, and publish evidence."
  :stages="[
    { name: 'Discover', detail: 'Traverse rules/ and identify the real asset boundary.' },
    { name: 'Classify', detail: 'Generate categoryDistribution and coverageBuckets for a corpus-level view.' },
    { name: 'Compose', detail: 'Map composition patterns, upgrade paths, and review paths into a stable IA.' },
    { name: 'Publish Evidence', detail: 'Expose the result through the homepage, architecture, performance, and references chapters.' }
  ]"
/>

## The four-stage rule orchestration flow

### 1. Discover

The process starts from `rules/` and recursively identifies each `.cursorrules` file. The first job is clarity: define the asset boundary correctly.

### 2. Classify

The site projects every rule into domain categories and then derives `categoryDistribution`, `coverageBuckets`, and `qualitySignals`. This stage defines the coverage and density story.

### 3. Compose

This is where rule orchestration becomes more than indexing. The project translates rule clusters into composition patterns, review paths, and upgrade paths so readers can move from isolated templates to a coherent system understanding.

### 4. Publish evidence

The final stage does not stop at Markdown output. It maps the orchestration result into the homepage, the architecture chapter, the performance whitepaper, and the references dossier to publish evidence.

## Why this counts as an algorithm chapter

- It has an **input**: repository assets and taxonomy.
- It has **transformations**: classification, bucketing, composition, and narrative mapping.
- It has an **output**: navigation, figures, performance signals, and references.
- It can be **verified**: tests confirm chapter existence, IA wiring, and component registration.

## Relationship to the system overview

The system overview explains boundaries and layers. The rule orchestration chapter explains how those layers turn assets into readable outcomes. Together they form the core technical whitepaper.
