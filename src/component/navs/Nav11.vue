<template>
  <nav>
    <ul class="nav11 flex">
      <li
        class="relative m-2"
        v-for="nav in navItems"
        :key="nav.name"
        @click="switchNav(nav.name)"
        :class="[{ active: currentNav == nav.name }]"
      >
        <router-link class="relative px-2 py-1" to="/NavDemo">
            {{ nav.name }}
          <span class="before:absolute before:w-[8px] before:h-[8px] before:top-0 before:left-0 before:border-t-2 before:border-l-2 before:border-yellow-500 before:opacity-0 before:transition-all before:duration-500 before:translate-x-[-10px] before:translate-y-[-10px] 
                       after:absolute after:w-[8px] after:h-[8px] after:top-0 after:right-0 after:border-t-2 after:border-r-2 after:border-yellow-500 after:opacity-0 after:transition-all after:duration-500 after:translate-x-[10px] after:translate-y-[-10px]
          "></span>
          <span class="before:absolute before:w-[8px] before:h-[8px] before:bottom-0 before:left-0 before:border-b-2 before:border-l-2 before:border-yellow-500 before:opacity-0 before:transition-all before:duration-500 before:translate-x-[-10px] before:translate-y-[10px]
                       after:absolute after:w-[8px] after:h-[8px] after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-yellow-500 after:opacity-0 after:transition-all after:duration-500 after:translate-x-[10px] after:translate-y-[10px]
          "></span>
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