<template>
<div class="text-center">
  <a class="text-xl hover:text-orange-400" href="https://github.com/gn01792218/vue3-tailwind-component" target="_blank"><i class="bi bi-github"></i>gitHub</a>
  <h1 class="text-slot-400 text-2xl mb-10">Vue3+Typscript+Tailwind自製組件展示</h1>
  <Nav/>
</div>
  
</template>
<script setup lang="ts">
import { ref } from "vue";
import Nav from '@/component/Nav.vue'
</script>
