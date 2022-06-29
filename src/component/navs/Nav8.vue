<template>
  <nav>
    <ul class="nav8">
      <li
        class="px-4 py-2"
        v-for="nav in navItems"
        :key="nav.name"
        @click="switchNav(nav.name)"
        :class="[{ active: currentNav == nav.name }]"
      >
        <router-link class="relative block text-white text-2xl font-bold
        hover:text-black
        before:content-[attr(data-text)] before:w-full before:absolute before:left-0 before:text-3xl before:opacity-0 before:transition-all before:duration-500
        after:content-[attr(data-text)] after:w-full after:absolute after:left-0 after:text-3xl after:opacity-0 after:transition-all after:duration-500
        hover:before:text-red-500 hover:before:z-1 hover:before:translate-x-[5px] hover:before:translate-y-[-5px] hover:before:opacity-100
        hover:after:text-green-500 hover:after:z-[2] hover:after:translate-x-[10px] hover:after:translate-y-[-10px] hover:after:opacity-100
        " to="/NavDemo" :data-text="nav.name">
        {{nav.name}}
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
