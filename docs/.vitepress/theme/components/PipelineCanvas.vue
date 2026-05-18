<script setup lang="ts">
const props = defineProps<{
  eyebrow?: string
  title?: string
  summary?: string
  stages?: Array<{
    name: string
    detail: string
  }>
}>()

const stages = props.stages ?? [
  { name: 'Discover', detail: 'Scan `rules/` recursively and normalize the asset set.' },
  { name: 'Classify', detail: 'Project the corpus into domains, buckets, and long-tail signals.' },
  { name: 'Compose', detail: 'Translate rule clusters into usage paths and composition patterns.' },
  { name: 'Publish', detail: 'Render diagrams, metrics, and dossiers as an evidence surface.' },
]
</script>

<template>
  <section class="pipeline-canvas figure-panel">
    <header class="section-heading pipeline-canvas__header">
      <p class="pipeline-canvas__eyebrow">{{ eyebrow ?? 'Orchestration Pipeline' }}</p>
      <h2>{{ title ?? 'How the rules corpus becomes an explainable engineering system' }}</h2>
      <p v-if="summary">{{ summary }}</p>
    </header>

    <div class="pipeline-canvas__panel glass-panel">
      <div class="pipeline-canvas__rail">
        <article
          v-for="(stage, index) in stages"
          :key="stage.name"
          class="pipeline-canvas__stage"
        >
          <span class="pipeline-canvas__badge">{{ index + 1 }}</span>
          <div>
            <h3>{{ stage.name }}</h3>
            <p>{{ stage.detail }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
