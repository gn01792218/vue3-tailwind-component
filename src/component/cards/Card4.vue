<template>
  <div class="card4 w-[300px] relative overflow-hidden rounded-lg">
    <div class="card-img w-full transition-transform duration-200">
      <img class="w-full" src="https://picsum.photos/id/68/600/400" alt="demopicture">
    </div>
    <div class="card-content w-full h-[30%] absolute flex flex-col items-center justify-center bottom-0 left-0 text-white p-1 transition-all duration-200 translate-y-[100%] bg-black">
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