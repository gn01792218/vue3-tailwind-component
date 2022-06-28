<template>
  <nav>
    <ul class="nav8 flex flex-col">
      <li
        class="relative pt-1 pb-1 pr-4 pl-4"
        v-for="nav in navItems"
        :key="nav.name"
        @click="switchNav(nav.name)"
        :class="[{ active: currentNav == nav.name }]"
      >
        <router-link class="relative h-[40px] block overflow-hidden bg-slate-600
             before:w-full before:h-full before:absolute before:left-0 before:bg-green-600 before:transition-all before:duration-500 before:scale-x-0 before:origin-left
             
        " to="/NavDemo">
          <span class="absolute flex items-center justify-center w-full h-full left-0 top-0 transition-all duration-500">{{ nav.name }}</span>
          <span class="absolute flex items-center justify-center  w-full h-full left-0 bottom-[-100%] transition-all duration-500">{{ nav.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { NavItem } from "@/types/nav/Nav";
import { ref } from "@vue/reactivity";
const props = defineProps<{
  navItems: NavItem[];
}>();
const currentNav = ref(props.navItems[0].name);
function switchNav(nav: string) {
  currentNav.value = nav;
}
</script>
