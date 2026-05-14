<script setup lang="ts">
interface ArchitectureLayer {
  label: string
  detail: string
}

defineProps<{
  title: string
  summary: string
  layers: ArchitectureLayer[]
}>()
</script>

<template>
  <section class="architecture-snapshot">
    <h2 class="architecture-snapshot__title">{{ title }}</h2>
    <p class="architecture-snapshot__summary">{{ summary }}</p>
    <div class="architecture-snapshot__grid">
      <article v-for="layer in layers" :key="layer.label" class="architecture-snapshot__item">
        <h3>{{ layer.label }}</h3>
        <p>{{ layer.detail }}</p>
      </article>
    </div>
  </section>
</template>
