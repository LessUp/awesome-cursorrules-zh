<script setup lang="ts">
interface MetricItem {
  value: string
  label: string
  detail?: string
}

defineProps<{
  title?: string
  items: MetricItem[]
}>()
</script>

<template>
  <section class="metric-band">
    <h2 v-if="title" class="metric-band__title">{{ title }}</h2>
    <article v-for="item in items" :key="`${item.label}-${item.value}`" class="metric-band__item">
      <strong class="metric-band__value">{{ item.value }}</strong>
      <span class="metric-band__label">{{ item.label }}</span>
      <p v-if="item.detail" class="metric-band__detail">{{ item.detail }}</p>
    </article>
  </section>
</template>
