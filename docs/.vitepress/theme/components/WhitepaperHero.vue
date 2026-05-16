<script setup lang="ts">
interface Indicator {
  label: string
  value: string
}

defineProps<{
  kicker: string
  title: string
  summary: string
  indicators: Indicator[]
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
}>()
</script>

<template>
  <section class="whitepaper-hero">
    <div class="whitepaper-hero__copy">
      <p class="whitepaper-hero__kicker">{{ kicker }}</p>
      <h1>{{ title }}</h1>
      <p class="whitepaper-hero__summary">{{ summary }}</p>

      <div class="whitepaper-hero__signals">
        <div v-for="indicator in indicators" :key="indicator.label" class="whitepaper-hero__signal">
          <strong>{{ indicator.value }}</strong>
          <span>{{ indicator.label }}</span>
        </div>
      </div>

      <div class="whitepaper-hero__actions">
        <a class="hero-link hero-link--primary" :href="primaryHref">{{ primaryLabel }}</a>
        <a class="hero-link hero-link--secondary" :href="secondaryHref">{{ secondaryLabel }}</a>
      </div>
    </div>

    <div class="whitepaper-hero__figure figure-panel">
      <svg class="signal-figure" viewBox="0 0 520 360" role="img" aria-label="Reading architecture overview">
        <rect x="20" y="22" width="480" height="316" rx="24" class="signal-figure__frame" />
        <path d="M70 102H450" class="signal-figure__line signal-figure__line--soft" />
        <path d="M70 180H450" class="signal-figure__line signal-figure__line--soft" />
        <path d="M70 258H450" class="signal-figure__line signal-figure__line--soft" />

        <circle cx="116" cy="102" r="22" class="signal-figure__point signal-figure__point--primary" />
        <circle cx="248" cy="180" r="22" class="signal-figure__point signal-figure__point--accent" />
        <circle cx="390" cy="258" r="22" class="signal-figure__point signal-figure__point--cite" />

        <path d="M138 112C180 134 204 148 226 166" class="signal-figure__line signal-figure__line--primary" />
        <path d="M270 192C314 220 340 232 368 246" class="signal-figure__line signal-figure__line--accent" />

        <g class="signal-figure__label">
          <text x="156" y="92">Thesis</text>
          <text x="286" y="170">System</text>
          <text x="424" y="248">Evidence</text>
        </g>

        <g class="signal-figure__caption">
          <text x="72" y="316">Mission → Architecture → Rules → References</text>
        </g>
      </svg>
    </div>
  </section>
</template>
