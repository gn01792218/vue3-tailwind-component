<template>
    <div class="card10 w-[300px] h-[300px] relative overflow-hidden
    before:absolute before:w-[150%] before:h-[250%] before:left-0 before:top-0 before:bg-[#020a51] before:opacity-0 before:transition before:duration-300
    hover:before:opacity-80 hover:before:delay-300
    ">
        <div class="card-img w-full h-full transition-all duration-300"><img class="w-full h-full" src="https://picsum.photos/id/774/600/400" alt=""></div>
        <div class="card-content absolute top-0 left-0 w-full h-full flex flex-col justify-around text-white text-left">
            <h2 class="text-center bg-[rgba(0,0,0,0.8)] p-2 transition-all duration-300 translate-y-[-200%] opacity-0">{{card.caption}}</h2>
            <p class="w-[80%] self-center text-center transition-all text-sm duration-300 translate-y-[-200%] opacity-0">
                {{card.description}}
            </p>
            <a href="#" class="w-[150px] bg-black self-center transition-all p-2 duration-300 text-center translate-y-[-200%] opacity-0">Read more</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Card } from '@/types/card/card';
const props = defineProps<{
  card:Card,
}>();
</script>