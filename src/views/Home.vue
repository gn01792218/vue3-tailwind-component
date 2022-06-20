<template>
  <div class="text-center">
    <h1 class="text-slot-400 mb-10 md:text-2xl sm:text-xl">
      Vue3+Typscript+Tailwind自製組件展示
    </h1>
    <div class="w-1/2 mr-auto ml-auto flex flex-wrap justify-between">
      <router-link
        v-for="(router) in routers.slice(1)" :key="router.path"
        class="mr-5 mb-5 btn"
        :to="router.path"
      >{{router.name}}</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const routers = router.getRoutes()
</script>
