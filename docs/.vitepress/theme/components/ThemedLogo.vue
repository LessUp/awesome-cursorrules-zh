<script setup lang="ts">
/**
 * ThemedLogo - Theme-aware Logo component
 * Automatically adjusts colors based on light/dark mode for perfect visibility
 */
import { useData } from 'vitepress'
import { computed } from 'vue'

const props = defineProps<{
  width?: number
  height?: number
}>()

const { isDark } = useData()

const width = computed(() => props.width || 100)
const height = computed(() => props.height || 100)

// Dynamic colors based on theme
const colors = computed(() => ({
  gradientStart: isDark.value ? '#7c8aff' : '#5c6ef8',
  gradientEnd: isDark.value ? '#5ce1e6' : '#3dc9d0',
  text: isDark.value ? '#1a1a2e' : '#fafafa',
  mark: isDark.value ? '#ffb347' : '#f5a623'
}))
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    :width="width"
    :height="height"
    role="img"
    aria-label="Awesome Cursor Rules Logo"
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" :stop-color="colors.gradientStart" />
        <stop offset="100%" :stop-color="colors.gradientEnd" />
      </linearGradient>
      <!-- Glow filter for dark mode -->
      <filter v-if="isDark" id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- Background rounded rectangle -->
    <rect
      width="100"
      height="100"
      rx="20"
      fill="url(#logo-gradient)"
      :filter="isDark ? 'url(#logo-glow)' : undefined"
    />

    <!-- Main text "CR" -->
    <text
      x="50"
      y="50"
      font-family="ui-sans-serif, system-ui, sans-serif"
      font-size="45"
      font-weight="700"
      :fill="colors.text"
      text-anchor="middle"
      dominant-baseline="middle"
    >
      CR
    </text>

    <!-- Accent mark dot -->
    <circle cx="85" cy="15" r="8" :fill="colors.mark" />
  </svg>
</template>

<style scoped>
svg {
  transition: filter 0.3s ease;
}

svg:hover {
  filter: brightness(1.1);
}
</style>
