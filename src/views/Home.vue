<template>
  <div class="text-center">
    <h1 class="text-slot-400 mb-10 md:text-2xl sm:text-xl">
      Vue3+Typscript+Tailwind自製組件展示
    </h1>
    <div class="flex flex-wrap justify-center">
      <router-link class="mr-5 btn" to="/CheckBoxDemo"
        >checkBox組件</router-link
      >
      <router-link class="mr-5 btn" to="/KnobDemo">knob組件</router-link>
      <router-link class="mr-5 btn" to="/BtnDemo">btn組件</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
</script>
