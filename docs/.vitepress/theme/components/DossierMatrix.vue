<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  intro?: string
  entries: Array<{
    subject: string
    source: string
    adopted: string
    advance: string
  }>
}>()
</script>

<template>
  <section class="dossier-matrix">
    <header class="section-heading dossier-matrix__header">
      <p class="dossier-matrix__eyebrow">{{ eyebrow ?? 'Reference Dossier' }}</p>
      <h2>{{ title }}</h2>
      <p v-if="intro">{{ intro }}</p>
    </header>

    <div class="dossier-matrix__grid">
      <article
        v-for="entry in entries"
        :key="entry.subject"
        class="dossier-matrix__card glass-panel"
      >
        <div class="dossier-matrix__subject">
          <p>{{ entry.subject }}</p>
          <h3>{{ entry.source }}</h3>
        </div>
        <div class="dossier-matrix__body">
          <div>
            <span>Absorbed</span>
            <p>{{ entry.adopted }}</p>
          </div>
          <div>
            <span>Advanced</span>
            <p>{{ entry.advance }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
