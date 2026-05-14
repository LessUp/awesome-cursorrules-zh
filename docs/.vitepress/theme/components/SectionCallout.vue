<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: 'info' | 'success' | 'warning'
    title: string
    body: string
    href?: string
    label?: string
  }>(),
  {
    tone: 'info',
  },
)
</script>

<template>
  <aside :class="['section-callout', `section-callout--${tone}`]">
    <h2 class="section-callout__title">{{ title }}</h2>
    <p class="section-callout__body">{{ body }}</p>
    <div v-if="href && label" class="section-callout__actions">
      <a class="section-callout__link" :href="href">{{ label }}</a>
    </div>
  </aside>
</template>
