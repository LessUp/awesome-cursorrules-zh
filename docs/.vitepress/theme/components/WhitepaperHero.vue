<script setup lang="ts">
/**
 * WhitepaperHero - Homepage hero section
 * Displays project mission, key metrics, and navigation actions
 */
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
        <!-- Background Frame -->
        <rect x="20" y="22" width="480" height="316" rx="24" class="signal-figure__frame" />

        <!-- Horizontal Guide Lines -->
        <path d="M70 102H450" class="signal-figure__line signal-figure__line--soft" />
        <path d="M70 180H450" class="signal-figure__line signal-figure__line--soft" />
        <path d="M70 258H450" class="signal-figure__line signal-figure__line--soft" />

        <!-- Connection Lines with Glow -->
        <path d="M138 112C180 134 204 148 226 166" class="signal-figure__line signal-figure__line--primary" />
        <path d="M270 192C314 220 340 232 368 246" class="signal-figure__line signal-figure__line--accent" />

        <!-- Main Points with Glow Effect -->
        <circle cx="116" cy="102" r="22" class="signal-figure__point signal-figure__point--primary" />
        <circle cx="248" cy="180" r="22" class="signal-figure__point signal-figure__point--accent" />
        <circle cx="390" cy="258" r="22" class="signal-figure__point signal-figure__point--cite" />

        <!-- Labels -->
        <g class="signal-figure__label">
          <text x="156" y="92">Thesis</text>
          <text x="286" y="170">System</text>
          <text x="424" y="248">Evidence</text>
        </g>

        <!-- Caption -->
        <g class="signal-figure__caption">
          <text x="72" y="316">Mission → Architecture → Rules → References</text>
        </g>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.whitepaper-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr);
  gap: var(--home-grid-gap);
  align-items: stretch;
  margin-bottom: 56px;
}

.whitepaper-hero__copy,
.whitepaper-hero__figure {
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-lg);
  background: var(--surface-1);
  box-shadow: var(--shadow-sm);
}

.whitepaper-hero__copy {
  padding: clamp(26px, 3vw, 40px);
}

.whitepaper-hero__kicker {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.whitepaper-hero h1 {
  margin: 14px 0 16px;
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 76px);
  line-height: 0.98;
  letter-spacing: -0.05em;
  color: var(--vp-c-text-1);
}

.whitepaper-hero__summary {
  color: var(--vp-c-text-2);
  line-height: 1.82;
  font-size: 16px;
}

.whitepaper-hero__signals {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 28px;
}

.whitepaper-hero__signal {
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-border);
}

.whitepaper-hero__signal strong {
  display: block;
  color: var(--vp-c-text-1);
  font-family: var(--font-display);
  font-size: clamp(22px, 2.8vw, 32px);
  line-height: 1.05;
}

.whitepaper-hero__signal span {
  display: block;
  margin-top: 6px;
  color: var(--vp-c-text-3);
  font-size: 13px;
}

.whitepaper-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  font-family: var(--font-sans);
  font-weight: 700;
  text-decoration: none;
  transition: transform var(--duration-fast) var(--ease-out-expo),
              background var(--duration-fast) var(--ease-out-expo),
              border-color var(--duration-fast) var(--ease-out-expo),
              box-shadow var(--duration-fast) var(--ease-out-expo);
}

.hero-link:hover {
  transform: translateY(-2px);
}

.hero-link--primary {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 36%, var(--vp-c-border));
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 70%, transparent);
  color: var(--vp-c-text-1);
}

.hero-link--primary:hover {
  box-shadow: var(--shadow-glow-brand);
  border-color: var(--vp-c-brand-1);
}

.hero-link--secondary {
  background: transparent;
  color: var(--vp-c-text-2);
}

.hero-link--secondary:hover {
  background: color-mix(in srgb, var(--surface-2) 80%, transparent);
  color: var(--vp-c-text-1);
}

.whitepaper-hero__figure {
  padding: 18px;
}

/* Container Query Support */
@supports (container-type: inline-size) {
  .whitepaper-hero {
    container-type: inline-size;
  }

  @container (max-width: 768px) {
    .whitepaper-hero {
      grid-template-columns: 1fr;
    }

    .whitepaper-hero__signals {
      grid-template-columns: 1fr;
    }
  }
}

/* Media Query Fallback */
@supports not (container-type: inline-size) {
  @media (max-width: 768px) {
    .whitepaper-hero {
      grid-template-columns: 1fr;
    }

    .whitepaper-hero__signals {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 639px) {
  .whitepaper-hero h1 {
    font-size: 42px;
  }
}
</style>
