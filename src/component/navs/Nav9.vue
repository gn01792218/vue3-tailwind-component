<template>
  <nav>
    <ul class="nav9 flex flex-col justify-center items-center">
      <li
        class="relative m-2"
        v-for="nav in navItems"
        :key="nav.name"
        @click="switchNav(nav.name)"
        :class="[{ active: currentNav == nav.name }]"
      >
        <router-link class="relative block h-[40px] px-2 py-1 overflow-hidden
        before:contents-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-lime-700 before:transition-transform duration-500 before:scale-x-0 before:origin-right
        hover:before:scale-x-100 hover:before:origin-left hover:before:delay-500
        " to="/NavDemo">
          <span class="w-full h-full flex items-center justify-center transition-transform duration-500 delay-500">{{ nav.name }}</span>
          <span class="w-full h-full flex items-center justify-center transition-transform duration-500 delay-500">{{ nav.name }}</span>
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
