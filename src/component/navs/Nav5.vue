<template>
  <nav>
    <ul class="nav5 flex">
      <li
        class="mr-1 ml-1 pt-1 pb-1 pr-3 pl-3 relative transition-all duration-500 
        before:w-full before:h-[25%] before:absolute before:z-[-1] before:top-[0px] before:left-[0] before:bg-black before:transition-all before:duration-300  before:scale-x-0
        after:w-full after:h-[25%] after:absolute after:z-[-1] after:top-[25%] after:left-[0] after:bg-black after:transition-all after:duration-300 after:scale-x-0
        hover:text-white hover:font-bold 
        hover:before:scale-x-100 
        hover:after:scale-x-100 hover:after:delay-100"
        v-for="nav in navItems"
        :key="nav.name"
        @click="switchNav(nav.name)"
        :class="[{active:currentNav==nav.name}]"
      >
      <router-link to="/NavDemo">
        <span
          class="w-full h-full transition-all
          before:w-full before:h-[25%] before:absolute before:z-[-1] before:top-[50%] before:left-[0] before:bg-black   before:transition-all before:duration-300  before:scale-x-0
          after:w-full after:h-[25%] after:absolute after:z-[-1] after:top-[75%] after:left-[0] after:bg-black   after:transition-all after:duration-300 after:scale-x-0
        "
        ></span
        >{{ nav.name }}
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
const currentNav = ref(props.navItems[0].name)
function switchNav(nav:string){
    currentNav.value = nav
}
</script>