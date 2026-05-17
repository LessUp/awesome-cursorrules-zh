<script setup lang="ts">
/**
 * ReferenceCard - Academic reference display card
 * Shows a single reference with metadata and relevance
 */
interface Reference {
  id: string
  kind: 'paper' | 'article' | 'book' | 'standard' | 'opensource'
  title: string
  authors?: string[]
  year?: number
  venue?: string
  url: string
  doi?: string
  summary: string
  relevance: string
}

defineProps<{
  reference: Reference
  compact?: boolean
}>()

const kindLabels: Record<string, string> = {
  paper: '学术论文',
  article: '文章',
  book: '书籍',
  standard: '标准',
  opensource: '开源项目'
}

const kindIcons: Record<string, string> = {
  paper: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  article: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1h2a2 2 0 012 2v9a2 2 0 01-2 2zM17 8v10',
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  standard: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.05-.378-3.016z',
  opensource: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
}
</script>

<template>
  <article :class="['reference-card', { 'reference-card--compact': compact }]">
    <div class="reference-card__header">
      <span class="reference-card__kind">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path :d="kindIcons[reference.kind]" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ kindLabels[reference.kind] }}
      </span>
      <span v-if="reference.year" class="reference-card__year">{{ reference.year }}</span>
    </div>

    <h3 class="reference-card__title">
      <a :href="reference.url" target="_blank" rel="noreferrer">{{ reference.title }}</a>
    </h3>

    <p v-if="reference.authors && !compact" class="reference-card__authors">
      {{ reference.authors.join(', ') }}
      <span v-if="reference.venue">· {{ reference.venue }}</span>
    </p>

    <p class="reference-card__summary">{{ reference.summary }}</p>

    <p v-if="!compact" class="reference-card__relevance">
      <strong>关联：</strong>{{ reference.relevance }}
    </p>

    <a v-if="reference.doi && !compact" :href="`https://doi.org/${reference.doi}`" target="_blank" rel="noreferrer" class="reference-card__doi">
      DOI: {{ reference.doi }}
    </a>
  </article>
</template>

<style scoped>
.reference-card {
  padding: 20px;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-md);
  background: var(--surface-1);
  transition: border-color var(--duration-fast) var(--ease-out-expo),
              box-shadow var(--duration-fast) var(--ease-out-expo);
}

.reference-card:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-border));
  box-shadow: var(--shadow-sm);
}

.reference-card--compact {
  padding: 16px;
}

.reference-card__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.reference-card__kind {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-brand-soft) 70%, transparent);
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 600;
}

.reference-card__year {
  color: var(--vp-c-text-3);
  font-size: 13px;
  font-family: var(--font-mono);
}

.reference-card__title {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: 18px;
  line-height: 1.3;
}

.reference-card__title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out-expo);
}

.reference-card__title a:hover {
  color: var(--vp-c-brand-1);
}

.reference-card__authors {
  margin: 0 0 12px;
  color: var(--vp-c-text-3);
  font-size: 13px;
}

.reference-card__summary {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}

.reference-card__relevance {
  margin: 12px 0 0;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.6;
}

.reference-card__relevance strong {
  color: var(--vp-c-brand-1);
}

.reference-card__doi {
  display: inline-flex;
  margin-top: 12px;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-family: var(--font-mono);
  text-decoration: none;
}

.reference-card__doi:hover {
  color: var(--vp-c-brand-1);
}
</style>
