<script setup lang="ts">
/**
 * SystemShowcase - Four-layer system architecture display
 * Shows the complete content and publishing pipeline
 */
interface SystemNode {
  eyebrow: string
  title: string
  detail: string
}

defineProps<{
  title: string
  summary: string
  nodes: SystemNode[]
}>()
</script>

<template>
  <section class="system-showcase">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p>{{ summary }}</p>
    </div>

    <div class="system-showcase__canvas glass-card">
      <div class="system-showcase__rail">
        <article v-for="(node, index) in nodes" :key="node.title" class="system-showcase__node interactive-card">
          <p class="system-showcase__eyebrow">{{ node.eyebrow }}</p>
          <h3>{{ node.title }}</h3>
          <p>{{ node.detail }}</p>
          <div class="system-showcase__connector" v-if="index < nodes.length - 1">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.system-showcase {
  margin-top: 42px;
}

.section-heading {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 38px);
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
}

.section-heading p {
  color: var(--vp-c-text-2);
  line-height: 1.82;
}

.system-showcase__canvas {
  padding: 24px;
  border-radius: var(--radius-lg);
}

.system-showcase__rail {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.system-showcase__node {
  position: relative;
  min-height: 220px;
  padding: 20px 18px;
  border: 1px solid color-mix(in srgb, var(--vp-c-border) 76%, transparent);
  border-radius: var(--radius-md);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--surface-2) 72%, transparent),
    color-mix(in srgb, var(--surface-3) 44%, transparent)
  );
}

.system-showcase__node:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-border));
}

.system-showcase__eyebrow {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.system-showcase__node h3 {
  margin: 6px 0 10px;
  font-family: var(--font-display);
  font-size: 22px;
  line-height: 1.22;
  color: var(--vp-c-text-1);
}

.system-showcase__node p {
  color: var(--vp-c-text-2);
  line-height: 1.82;
  font-size: 14px;
}

.system-showcase__connector {
  position: absolute;
  right: -19px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--figure-stroke-accent);
  opacity: 0;
  transition: opacity var(--duration-fast) var(--ease-out-expo);
}

.system-showcase__node:hover .system-showcase__connector {
  opacity: 1;
}

/* Container Query Support */
@supports (container-type: inline-size) {
  .system-showcase {
    container-type: inline-size;
  }

  @container (max-width: 768px) {
    .system-showcase__rail {
      grid-template-columns: 1fr;
    }

    .system-showcase__connector {
      display: none;
    }
  }
}

/* Media Query Fallback */
@supports not (container-type: inline-size) {
  @media (max-width: 768px) {
    .system-showcase__rail {
      grid-template-columns: 1fr;
    }

    .system-showcase__connector {
      display: none;
    }
  }
}
</style>
