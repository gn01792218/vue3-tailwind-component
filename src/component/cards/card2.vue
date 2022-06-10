<template>
  <div class="card card2 w-[300px] relative overflow-hidden
    before:absolute before:z-[1] before:left-0 before:top-0 before:w-[30px] before:h-[30px] before:border-l-4 before:border-t-4 before:border-yellow-400 before:transition-transform before:duration-300 before:opacity-0
    after:absolute after:right-0 after:bottom-0 after:w-[30px] after:h-[30px] after:border-r-4 after:border-b-4 after:border-yellow-400 after:transition-transform after:duration-300 after:opacity-0
    hover:before:rotate-[360deg] hover:before:opacity-100
    hover:after:rotate-[360deg] hover:after:opacity-100
  ">
    <div class="card-img w-full transition-transform duration-300">
      <img class="w-full" src="https://picsum.photos/id/680/600/400" alt="demopicture">
    </div>
    <div class="card-content w-full h-full absolute flex flex-col items-center justify-center top-0 left-0 text-white p-5 transition-all duration-300 translate-x-[-100%] opacity-0">
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