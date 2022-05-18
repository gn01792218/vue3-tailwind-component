<template>
<div class="m-3">
  <h1 class="text-slot-400 text-2xl mb-5">{{title}}</h1>
  <slot></slot>
</div>
  
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>