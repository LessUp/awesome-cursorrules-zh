<script setup lang="ts">
/**
 * NarrativeRail - Reading sequence navigation
 * Displays the recommended reading order with stages
 */
interface NarrativeStage {
  index: string
  title: string
  body: string
  href: string
  label: string
}

defineProps<{
  title: string
  intro: string
  stages: NarrativeStage[]
}>()
</script>

<template>
  <section class="narrative-rail">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p>{{ intro }}</p>
    </div>

    <div class="narrative-rail__list">
      <article v-for="stage in stages" :key="stage.index" class="narrative-rail__stage interactive-card">
        <div class="narrative-rail__index">
          <span>{{ stage.index }}</span>
        </div>
        <div class="narrative-rail__content">
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.body }}</p>
          <a :href="stage.href">{{ stage.label }} →</a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.narrative-rail {
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

.narrative-rail__list {
  display: grid;
  gap: 14px;
}

.narrative-rail__stage {
  display: grid;
  grid-template-columns: 94px minmax(0, 1fr);
  gap: 18px;
  padding: 22px;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-lg);
  background: var(--surface-1);
  box-shadow: var(--shadow-sm);
}

.narrative-rail__stage:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-border));
}

.narrative-rail__index {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
}

.narrative-rail__content h3 {
  margin: 6px 0 10px;
  font-family: var(--font-display);
  font-size: 22px;
  line-height: 1.22;
  color: var(--vp-c-text-1);
}

.narrative-rail__content p {
  color: var(--vp-c-text-2);
  line-height: 1.82;
}

.narrative-rail__content a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--vp-c-brand-1);
  font-weight: 700;
  text-decoration: none;
  transition: gap var(--duration-fast) var(--ease-out-expo);
}

.narrative-rail__content a:hover {
  gap: 8px;
}

/* Container Query Support */
@supports (container-type: inline-size) {
  .narrative-rail {
    container-type: inline-size;
  }

  @container (max-width: 640px) {
    .narrative-rail__stage {
      grid-template-columns: 1fr;
    }

    .narrative-rail__index {
      width: 56px;
      height: 56px;
      font-size: 22px;
    }
  }
}

/* Media Query Fallback */
@supports not (container-type: inline-size) {
  @media (max-width: 640px) {
    .narrative-rail__stage {
      grid-template-columns: 1fr;
    }

    .narrative-rail__index {
      width: 56px;
      height: 56px;
      font-size: 22px;
    }
  }
}
</style>
