<script setup lang="ts">
interface CurriculumTrack {
  name: string
  audience: string
  outcome: string
  steps: string[]
}

defineProps<{
  title: string
  intro: string
  tracks: CurriculumTrack[]
}>()
</script>

<template>
  <section class="curriculum-deck">
    <div class="section-heading">
      <h2>{{ title }}</h2>
      <p>{{ intro }}</p>
    </div>

    <div class="curriculum-deck__tracks">
      <article v-for="track in tracks" :key="track.name" class="curriculum-deck__track">
        <header>
          <p class="curriculum-deck__audience">{{ track.audience }}</p>
          <h3>{{ track.name }}</h3>
          <p>{{ track.outcome }}</p>
        </header>

        <ol>
          <li v-for="step in track.steps" :key="step">{{ step }}</li>
        </ol>
      </article>
    </div>
  </section>
</template>
