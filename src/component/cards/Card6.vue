<template>
    <div class="card6 w-[300px] h-[300px] relative overflow-hidden
    before:absolute before:w-[150%] before:h-[250%] before:left-0 before:top-0 before:bg-[#2d3436] before:opacity-80 before:transition before:duration-300 before:translate-x-[350px] before:translate-y-[250px] before:rotate-45
    hover:before:translate-x-[-50px] hover:before:translate-y-[-250px]
    ">
        <div class="w-full h-full"><img class="w-full h-full" src="https://picsum.photos/id/4/600/400" alt=""></div>
        <div class="card-content absolute top-0 left-0 w-full h-full flex flex-col justify-around text-white text-left">
            <h2 class="text-center bg-[rgba(0,0,0,0.8)] p-2 translate-x-[200px] translate-y-[-200px] transition-transform">{{card.caption}}</h2>
            <p class="w-[80%] self-center text-center transition-all text-sm translate-x-[-200px] translate-y-[200px]">
                {{card.description}}
            </p>
            <a href="#" class="w-[150px] bg-black self-center transition-all p-2 text-center translate-y-[100px]">Read more</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Card } from '@/types/card/card';
const props = defineProps<{
  card:Card,
}>();
</script>