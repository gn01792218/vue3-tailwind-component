<template>
  <nav>
    <ul class="nav4 flex">
      <li
        class="cursor-pointer mr-1 ml-1 pt-1 pb-1 pr-3 pl-3 relative transition-all duration-500 
        before:w-[25%] before:h-full before:absolute before:z-[-1] before:top-[0px] before:left-[0] before:bg-black before:transition-all before:duration-300 before:origin-top before:scale-y-0
        after:w-[25%] after:h-full after:absolute after:z-[-1] after:top-[0px] after:left-[25%] after:bg-black after:transition-all after:duration-300 after:origin-top after:scale-y-0
        hover:text-white hover:font-bold 
        hover:before:scale-y-100 
        hover:after:scale-y-100 hover:after:delay-100"
        v-for="nav in navItems"
        :key="nav.name"
        @click="switchNav(nav.name)"
        :class="[{active:currentNav==nav.name}]"
      >
        <span
          class="w-full h-full transition-all du
          before:w-[25%] before:h-full before:absolute before:z-[-1] before:top-[0px] before:left-[50%] before:bg-black   before:transition-all before:duration-300 before:origin-top before:scale-y-0
          after:w-[25%] after:h-full after:absolute after:z-[-1] after:top-[0px] after:left-[75%] after:bg-black   after:transition-all after:duration-300 after:origin-top after:scale-y-0
        "
        ></span
        >{{ nav.name }}
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
