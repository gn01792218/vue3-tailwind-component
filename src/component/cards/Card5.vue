<template>
  <div class="card5 w-[300px] relative overflow-hidden
  before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-cyan-900 before:opacity-0 before:transition-transform before:duration-300 before:translate-y-full
  hover:before:opacity-50 hover:before:translate-y-0
  ">
    <div class="card-img w-full transition-transform duration-200">
      <img class="w-full" src="https://picsum.photos/id/675/600/400" alt="demopicture">
    </div>
    <div class="card-content w-full h-full absolute flex flex-col items-center justify-center bottom-0 left-0 text-white p-5 transition-all duration-200 translate-y-[-10%] opacity-0">
      <h1 class="uppercase text-lg">{{card.caption}}</h1>
      <span class="capitalize relative before:absolute before:z-[-1] before:left-0 before:top-0 before:w-full before:h-full before:bg-amber-700 before:opacity-50">{{card.description}}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Card } from '@/types/card/card';
const props = defineProps<{
  card:Card,
}>();
</script>