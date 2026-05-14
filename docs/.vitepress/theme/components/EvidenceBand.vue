<script setup lang="ts">
interface EvidenceItem {
  value: string
  label: string
  detail?: string
}

defineProps<{
  title?: string
  intro?: string
  items: EvidenceItem[]
}>()
</script>

<template>
  <section class="evidence-band">
    <header v-if="title || intro" class="evidence-band__header">
      <h2 v-if="title" class="evidence-band__title">{{ title }}</h2>
      <p v-if="intro" class="evidence-band__intro">{{ intro }}</p>
    </header>
    <article v-for="item in items" :key="`${item.label}-${item.value}`" class="evidence-band__item">
      <strong class="evidence-band__value">{{ item.value }}</strong>
      <span class="evidence-band__label">{{ item.label }}</span>
      <p v-if="item.detail" class="evidence-band__detail">{{ item.detail }}</p>
    </article>
  </section>
</template>
