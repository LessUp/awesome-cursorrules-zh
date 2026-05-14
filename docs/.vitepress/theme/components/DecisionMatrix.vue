<script setup lang="ts">
interface DecisionOption {
  title: string
  summary: string
  fit: string
  considerations?: string
}

defineProps<{
  title?: string
  intro?: string
  options: DecisionOption[]
}>()
</script>

<template>
  <section class="decision-matrix">
    <h2 v-if="title" class="decision-matrix__title">{{ title }}</h2>
    <p v-if="intro" class="decision-matrix__intro">{{ intro }}</p>
    <div class="decision-matrix__grid">
      <article v-for="option in options" :key="option.title" class="decision-matrix__item">
        <span class="decision-matrix__fit">{{ option.fit }}</span>
        <h3>{{ option.title }}</h3>
        <p class="decision-matrix__summary">{{ option.summary }}</p>
        <p v-if="option.considerations" class="decision-matrix__considerations">{{ option.considerations }}</p>
      </article>
    </div>
  </section>
</template>
