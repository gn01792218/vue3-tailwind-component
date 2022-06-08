<template>
  <div class="card1 w-[300px] relative overflow-hidden">
    <div class="card-img w-full transition-transform duration-500">
      <img class="w-full" src="https://picsum.photos/id/684/600/400" alt="demopicture">
    </div>
    <div class="card-content w-full h-full absolute flex flex-col items-center justify-center top-0 left-0 text-white transition-all duration-500 opacity-0">
      <h1 class="uppercase text-lg">{{card.caption}}</h1>
      <span class="capitalize">{{card.description}}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Card } from '@/types/card/card';
const props = defineProps<{
  card:Card,
}>();
</script>
