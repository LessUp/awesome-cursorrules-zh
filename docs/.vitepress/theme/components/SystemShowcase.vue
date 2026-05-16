<script setup lang="ts">
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

    <div class="system-showcase__canvas">
      <div class="system-showcase__rail">
        <article v-for="node in nodes" :key="node.title" class="system-showcase__node">
          <p class="system-showcase__eyebrow">{{ node.eyebrow }}</p>
          <h3>{{ node.title }}</h3>
          <p>{{ node.detail }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
