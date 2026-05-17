<script setup lang="ts">
/**
 * CurriculumDeck - Role-based learning paths
 * Displays different tracks for different user roles
 */
interface CurriculumTrack {
  name: string
  audience: string
  outcome: string
  steps: string[]
}

defineProps<{
  title: string
  intro: string
  tracks: CurriculumTrack[]
}>()
</script>

<template>
  <section class="curriculum-deck">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p>{{ intro }}</p>
    </div>

    <div class="curriculum-deck__tracks">
      <article v-for="track in tracks" :key="track.name" class="curriculum-deck__track glass-card interactive-card">
        <header>
          <p class="curriculum-deck__audience">{{ track.audience }}</p>
          <h3>{{ track.name }}</h3>
          <p>{{ track.outcome }}</p>
        </header>

        <ol>
          <li v-for="step in track.steps" :key="step">{{ step }}</li>
        </ol>
      </article>
    </div>
  </section>
</template>

<style scoped>
.curriculum-deck {
  margin-top: 42px;
}

.section-heading {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 38px);
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
}

.section-heading p {
  color: var(--vp-c-text-2);
  line-height: 1.82;
}

.curriculum-deck__tracks {
  display: grid;
  gap: 16px;
}

.curriculum-deck__track {
  display: grid;
  grid-template-columns: minmax(240px, 0.45fr) minmax(0, 1fr);
  gap: 20px;
  padding: 24px;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-lg);
}

.curriculum-deck__track:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-border));
}

.curriculum-deck__audience {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.curriculum-deck__track header h3 {
  margin: 6px 0 10px;
  font-family: var(--font-display);
  font-size: 22px;
  line-height: 1.22;
  color: var(--vp-c-text-1);
}

.curriculum-deck__track header p {
  color: var(--vp-c-text-2);
  line-height: 1.82;
}

.curriculum-deck__track ol {
  margin: 0;
  padding-left: 18px;
  color: var(--vp-c-text-2);
  line-height: 1.82;
}

.curriculum-deck__track li + li {
  margin-top: 10px;
}

.curriculum-deck__track li::marker {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

/* Container Query Support */
@supports (container-type: inline-size) {
  .curriculum-deck {
    container-type: inline-size;
  }

  @container (max-width: 768px) {
    .curriculum-deck__track {
      grid-template-columns: 1fr;
    }
  }
}

/* Media Query Fallback */
@supports not (container-type: inline-size) {
  @media (max-width: 768px) {
    .curriculum-deck__track {
      grid-template-columns: 1fr;
    }
  }
}
</style>
