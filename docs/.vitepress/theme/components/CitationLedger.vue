<script setup lang="ts">
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
      <article v-for="entry in entries" :key="entry.title" class="citation-ledger__row">
        <p class="citation-ledger__kind">{{ entry.kind }}</p>
        <div class="citation-ledger__body">
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.note }}</p>
        </div>
        <a :href="entry.href" target="_blank" rel="noreferrer">{{ entry.label }}</a>
      </article>
    </div>
  </section>
</template>
