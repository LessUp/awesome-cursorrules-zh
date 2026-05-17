<script setup lang="ts">
/**
 * CitationLedger - Research references panel
 * Displays academic-style citations with relevance notes
 */
interface CitationEntry {
  kind: string
  title: string
  note: string
  href: string
  label: string
}

defineProps<{
  title: string
  intro: string
  entries: CitationEntry[]
}>()
</script>

<template>
  <section class="citation-ledger">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p>{{ intro }}</p>
    </div>

    <div class="citation-ledger__rows">
      <article v-for="entry in entries" :key="entry.title" class="citation-ledger__row glass-card interactive-card">
        <p class="citation-ledger__kind">{{ entry.kind }}</p>
        <div class="citation-ledger__body">
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.note }}</p>
        </div>
        <a :href="entry.href" target="_blank" rel="noreferrer" class="citation-ledger__link">
          {{ entry.label }}
          <svg viewBox="0 0 24 24" width="16" height="16" class="citation-ledger__icon">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.citation-ledger {
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

.citation-ledger__rows {
  display: grid;
  gap: 12px;
}

.citation-ledger__row {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr) auto;
  gap: 18px;
  align-items: start;
  padding: 22px;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-lg);
}

.citation-ledger__row:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-border));
}

.citation-ledger__kind {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.citation-ledger__body h3 {
  margin: 6px 0 10px;
  font-family: var(--font-display);
  font-size: 22px;
  line-height: 1.22;
  color: var(--vp-c-text-1);
}

.citation-ledger__body p {
  color: var(--vp-c-text-2);
  line-height: 1.82;
}

.citation-ledger__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-brand-soft) 70%, transparent);
  color: var(--vp-c-brand-1);
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: background var(--duration-fast) var(--ease-out-expo);
}

.citation-ledger__link:hover {
  background: color-mix(in srgb, var(--vp-c-brand-soft) 90%, transparent);
}

.citation-ledger__icon {
  flex-shrink: 0;
}

/* Container Query Support */
@supports (container-type: inline-size) {
  .citation-ledger {
    container-type: inline-size;
  }

  @container (max-width: 768px) {
    .citation-ledger__row {
      grid-template-columns: 1fr;
    }

    .citation-ledger__kind {
      margin-bottom: 8px;
    }

    .citation-ledger__link {
      margin-top: 12px;
    }
  }
}

/* Media Query Fallback */
@supports not (container-type: inline-size) {
  @media (max-width: 768px) {
    .citation-ledger__row {
      grid-template-columns: 1fr;
    }

    .citation-ledger__kind {
      margin-bottom: 8px;
    }

    .citation-ledger__link {
      margin-top: 12px;
    }
  }
}
</style>
