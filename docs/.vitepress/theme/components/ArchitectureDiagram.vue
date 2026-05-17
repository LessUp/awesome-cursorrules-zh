<script setup lang="ts">
/**
 * ArchitectureDiagram - SVG-based system architecture visualization
 * Displays the four-layer system with animated connections
 */
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()

interface Layer {
  name: string
  nameZh: string
  desc: string
  icon: string
}

const layers: Layer[] = [
  { name: 'Asset Layer', nameZh: '资产层', desc: '规则资产与分类索引', icon: 'database' },
  { name: 'Sync Layer', nameZh: '同步层', desc: '构建前同步站点事实', icon: 'sync' },
  { name: 'Narrative Layer', nameZh: '叙事层', desc: '导读、学院、架构、指南', icon: 'book' },
  { name: 'Publishing Layer', nameZh: '发布层', desc: '主题组件与 GitHub Pages', icon: 'rocket' }
]

const svgClasses = computed(() => [
  'arch-diagram',
  { 'arch-diagram--dark': isDark.value }
])
</script>

<template>
  <svg :class="svgClasses" viewBox="0 0 800 420" role="img" aria-label="系统架构图">
    <defs>
      <!-- Gradient for layers -->
      <linearGradient id="layer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="var(--figure-stroke-primary)" />
        <stop offset="100%" stop-color="var(--figure-stroke-accent)" />
      </linearGradient>

      <!-- Arrow marker -->
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="var(--figure-stroke-accent)" />
      </marker>

      <!-- Glow filter -->
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- Background -->
    <rect x="10" y="10" width="780" height="400" rx="20" fill="var(--figure-fill-surface)" stroke="var(--figure-stroke-primary)" stroke-width="1" opacity="0.3"/>

    <!-- Layer rectangles -->
    <g v-for="(layer, i) in layers" :key="layer.name">
      <rect
        :x="50"
        :y="30 + i * 95"
        width="700"
        height="80"
        rx="12"
        class="arch-diagram__layer"
        :class="`arch-diagram__layer--${i}`"
      />

      <!-- Layer icon circle -->
      <circle
        :cx="100"
        :cy="70 + i * 95"
        r="28"
        fill="url(#layer-gradient)"
        filter="url(#glow)"
      />

      <!-- Layer number -->
      <text
        :x="100"
        :y="76 + i * 95"
        text-anchor="middle"
        fill="white"
        font-family="var(--font-display)"
        font-size="20"
        font-weight="700"
      >
        {{ i + 1 }}
      </text>

      <!-- Layer name (English) -->
      <text
        :x="150"
        :y="60 + i * 95"
        class="arch-diagram__label"
      >
        {{ layer.name }}
      </text>

      <!-- Layer name (Chinese) -->
      <text
        :x="150"
        :y="82 + i * 95"
        class="arch-diagram__label-zh"
      >
        {{ layer.nameZh }}
      </text>

      <!-- Layer description -->
      <text
        :x="150"
        :y="100 + i * 95"
        class="arch-diagram__desc"
      >
        {{ layer.desc }}
      </text>
    </g>

    <!-- Connection arrows -->
    <g class="arch-diagram__connections">
      <path d="M400 110 L400 125" class="arch-diagram__arrow" />
      <path d="M400 205 L400 220" class="arch-diagram__arrow" />
      <path d="M400 300 L400 315" class="arch-diagram__arrow" />
    </g>

    <!-- Title -->
    <text x="400" y="400" text-anchor="middle" class="arch-diagram__title">
      Awesome Cursor Rules Academy · 四层系统架构
    </text>
  </svg>
</template>

<style scoped>
.arch-diagram {
  width: 100%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
}

.arch-diagram__layer {
  fill: var(--figure-fill-surface);
  stroke: var(--figure-stroke-primary);
  stroke-width: 2;
  transition: fill var(--duration-normal) var(--ease-out-expo),
              stroke var(--duration-normal) var(--ease-out-expo);
}

.arch-diagram__layer:hover {
  fill: color-mix(in srgb, var(--figure-fill-surface) 80%, var(--figure-stroke-primary));
  stroke-width: 3;
}

.arch-diagram__label {
  fill: var(--figure-text-label);
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
}

.arch-diagram__label-zh {
  fill: var(--figure-text-caption);
  font-family: var(--font-sans);
  font-size: 14px;
}

.arch-diagram__desc {
  fill: var(--figure-text-caption);
  font-family: var(--font-sans);
  font-size: 13px;
}

.arch-diagram__arrow {
  fill: none;
  stroke: var(--figure-stroke-accent);
  stroke-width: 3;
  stroke-linecap: round;
  marker-end: url(#arrowhead);
  filter: drop-shadow(0 0 6px var(--figure-glow-accent));
  animation: flow 1.5s ease-in-out infinite;
}

@keyframes flow {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.arch-diagram__title {
  fill: var(--figure-text-caption);
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Dark mode enhancements */
.arch-diagram--dark .arch-diagram__layer {
  stroke-width: 2.5;
}

.arch-diagram--dark .arch-diagram__arrow {
  filter: drop-shadow(0 0 10px var(--figure-glow-accent));
}
</style>
