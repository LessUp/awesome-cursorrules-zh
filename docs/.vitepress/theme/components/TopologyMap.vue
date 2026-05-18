<script setup lang="ts">
const props = defineProps<{
  eyebrow?: string
  title?: string
  summary?: string
  layers?: Array<{
    name: string
    detail: string
  }>
}>()

const layers = props.layers ?? [
  { name: 'Asset Layer', detail: 'rules/ is the canonical source of truth.' },
  { name: 'Snapshot Layer', detail: 'sync-site-facts.mjs creates a repository knowledge snapshot.' },
  { name: 'IA Layer', detail: 'atlas.ts converts the snapshot into a review-first reading order.' },
  { name: 'Presentation Layer', detail: 'Theme components turn metrics and references into explainable figures.' },
  { name: 'Publishing Layer', detail: 'VitePress publishes the final whitepaper surface to GitHub Pages.' },
]
</script>

<template>
  <section class="topology-map figure-panel">
    <header class="section-heading topology-map__header">
      <p class="topology-map__eyebrow">{{ eyebrow ?? 'System Topology' }}</p>
      <h2>{{ title ?? 'From repository assets to a review-grade publication surface' }}</h2>
      <p v-if="summary">{{ summary }}</p>
    </header>

    <div class="topology-map__panel glass-panel">
      <svg class="topology-map__figure" viewBox="0 0 800 560" role="img" aria-label="System topology map">
        <defs>
          <linearGradient id="topology-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--figure-stroke-primary)" />
            <stop offset="100%" stop-color="var(--figure-stroke-accent)" />
          </linearGradient>
        </defs>

        <rect x="24" y="24" width="752" height="512" rx="28" class="signal-figure__frame" />

        <g v-for="(layer, index) in layers" :key="layer.name">
          <rect
            x="88"
            :y="52 + index * 94"
            width="624"
            height="68"
            rx="18"
            class="topology-map__layer"
          />
          <circle
            cx="122"
            :cy="86 + index * 94"
            r="18"
            fill="url(#topology-gradient)"
            class="topology-map__point"
          />
          <text x="122" :y="92 + index * 94" text-anchor="middle" class="topology-map__index">
            {{ index + 1 }}
          </text>
          <text x="156" :y="82 + index * 94" class="topology-map__label">
            {{ layer.name }}
          </text>
          <text x="156" :y="104 + index * 94" class="topology-map__detail">
            {{ layer.detail }}
          </text>
          <path
            v-if="index < layers.length - 1"
            :d="`M400 ${120 + index * 94} L400 ${146 + index * 94}`"
            class="topology-map__link"
          />
        </g>
      </svg>
    </div>
  </section>
</template>
