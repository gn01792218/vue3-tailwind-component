<template>
    <div class="card7 w-[300px] h-[300px] relative overflow-hidden
    before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-[#013747] before:opacity-80 before:transition before:duration-300 before:translate-x-[-100%] before:translate-y-[-100%] before:rotate-[-180deg]
    hover:before:translate-x-0 hover:before:translate-y-0 hover:before:rotate-0
    ">
        <div class="card-img w-full h-full"><img class="w-full h-full" src="https://picsum.photos/id/74/600/400" alt=""></div>
        <div class="card-content absolute top-0 left-0 w-full h-full flex flex-col justify-around text-white text-left">
            <h2 class="text-center bg-[rgba(0,0,0,0.8)] p-2 translate-y-[-200px] transition-transform">{{card.caption}}</h2>
            <p class="w-[80%] self-center text-center transition-all text-sm translate-x-full rotate-90">
                {{card.description}}
            </p>
            <a href="#" class="w-[150px] bg-black self-center transition-all p-2 text-center translate-y-[-100%] opacity-0">Read more</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Card } from '@/types/card/card';
const props = defineProps<{
  card:Card,
}>();
</script>