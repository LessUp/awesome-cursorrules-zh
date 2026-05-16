<script setup lang="ts">
interface NarrativeStage {
  index: string
  title: string
  body: string
  href: string
  label: string
}

defineProps<{
  title: string
  intro: string
  stages: NarrativeStage[]
}>()
</script>

<template>
  <section class="narrative-rail">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p>{{ intro }}</p>
    </div>

    <div class="narrative-rail__list">
      <article v-for="stage in stages" :key="stage.index" class="narrative-rail__stage">
        <div class="narrative-rail__index">{{ stage.index }}</div>
        <div class="narrative-rail__content">
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.body }}</p>
          <a :href="stage.href">{{ stage.label }}</a>
        </div>
      </article>
    </div>
  </section>
</template>
