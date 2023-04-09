<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full h-full flex text-white items-center justify-center">
    <h1 :style="{ fontSize: '70px' }">
      {{ title }} 👋
    </h1>
  </div>
</template>
