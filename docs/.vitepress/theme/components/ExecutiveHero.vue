<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  summary: string
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
}>()
</script>

<template>
  <section class="executive-hero">
    <p class="executive-hero__kicker">{{ kicker }}</p>
    <h1>{{ title }}</h1>
    <p class="executive-hero__summary">{{ summary }}</p>
    <div class="executive-hero__actions">
      <a class="hero-button hero-button--brand" :href="primaryHref">{{ primaryLabel }}</a>
      <a class="hero-button hero-button--secondary" :href="secondaryHref">{{ secondaryLabel }}</a>
    </div>
  </section>
</template>
