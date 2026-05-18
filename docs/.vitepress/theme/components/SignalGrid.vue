<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  intro?: string
  items: Array<{
    label: string
    value: string
    detail: string
  }>
}>()
</script>

<template>
  <section class="signal-grid">
    <header class="section-heading signal-grid__header">
      <p class="signal-grid__eyebrow">{{ eyebrow ?? 'Whitepaper Signals' }}</p>
      <h2>{{ title }}</h2>
      <p v-if="intro">{{ intro }}</p>
    </header>

    <div class="signal-grid__board">
      <article
        v-for="item in items"
        :key="item.label"
        class="signal-grid__card glass-panel"
      >
        <p class="signal-grid__label">{{ item.label }}</p>
        <strong class="signal-grid__value">{{ item.value }}</strong>
        <p class="signal-grid__detail">{{ item.detail }}</p>
      </article>
    </div>
  </section>
</template>
