<script setup lang="ts">
/**
 * ThemedSvg - Enhanced theme-aware SVG wrapper component
 * Automatically adjusts SVG appearance for light/dark mode with multiple strategies
 */
import { useData } from 'vitepress'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
  viewBox?: string
  ariaLabel?: string
  /** Invert colors in dark mode */
  invertOnDark?: boolean
  /** Brightness adjustment (1.0 = no change) */
  adjustBrightness?: number
  /** Contrast adjustment (1.0 = no change) */
  adjustContrast?: number
  /** Saturation adjustment (1.0 = no change) */
  adjustSaturation?: number
}>()

const { isDark } = useData()

const svgClasses = computed(() => [
  'themed-svg',
  props.class,
  { 'themed-svg--dark': isDark.value }
])

const filterStyle = computed(() => {
  if (!isDark.value) return 'none'

  const filters: string[] = []

  // Invert colors for dark mode
  if (props.invertOnDark) {
    filters.push('invert(1)')
  }

  // Brightness adjustment
  const brightness = props.adjustBrightness ?? 1.05
  if (brightness !== 1) {
    filters.push(`brightness(${brightness})`)
  }

  // Contrast adjustment
  const contrast = props.adjustContrast ?? 1.02
  if (contrast !== 1) {
    filters.push(`contrast(${contrast})`)
  }

  // Saturation adjustment
  if (props.adjustSaturation && props.adjustSaturation !== 1) {
    filters.push(`saturate(${props.adjustSaturation})`)
  }

  return filters.length > 0 ? filters.join(' ') : 'none'
})
</script>

<template>
  <svg
    :class="svgClasses"
    :viewBox="viewBox"
    :style="{ filter: filterStyle }"
    role="img"
    :aria-label="ariaLabel"
  >
    <slot />
  </svg>
</template>

<style scoped>
.themed-svg {
  color: var(--figure-text-label);
  transition:
    filter var(--duration-normal, 0.25s) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
    opacity var(--duration-normal, 0.25s) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
}

.themed-svg--dark {
  /* Enhanced dark mode visibility */
  opacity: 1;
}

/* Ensure SVG inherits color for currentColor usage */
.themed-svg :deep(*) {
  transition:
    fill var(--duration-fast, 0.15s) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
    stroke var(--duration-fast, 0.15s) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
}
</style>
