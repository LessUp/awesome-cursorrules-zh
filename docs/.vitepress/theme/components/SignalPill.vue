<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="signal-pill">{{ label }}</span>
</template>
