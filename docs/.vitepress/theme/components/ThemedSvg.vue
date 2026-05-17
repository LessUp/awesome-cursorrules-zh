<script setup lang="ts">
/**
 * ThemedSvg - Theme-aware SVG wrapper component
 * Automatically adjusts SVG appearance for light/dark mode
 */
import { useData } from 'vitepress'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
  viewBox?: string
  ariaLabel?: string
}>()

const { isDark } = useData()

const svgClasses = computed(() => [
  'themed-svg',
  props.class,
  { 'themed-svg--dark': isDark.value }
])
</script>

<template>
  <svg
    :class="svgClasses"
    :viewBox="viewBox"
    role="img"
    :aria-label="ariaLabel"
  >
    <slot />
  </svg>
</template>

<style scoped>
.themed-svg {
  color: var(--figure-text-label);
  transition: filter var(--duration-normal) var(--ease-out-expo);
}

.themed-svg--dark {
  filter: brightness(1.05) contrast(1.02);
}
</style>
