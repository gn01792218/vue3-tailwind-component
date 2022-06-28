<template>
  <nav>
    <ul class="nav3 flex">
        <li class="mr-1 ml-1 pt-1 pb-1 pr-3 pl-3 relative transition-all duration-500
            before:contents-[''] before:w-[12px] before:h-[12px] before:absolute before:top-[12px] before:left-[12px] before:border-l-4 before:border-l-pink-600 before:border-t-4 before:border-t-pink-600 before:transition-all before:duration-500 before:opacity-0
            after:contents-[''] after:w-[12px] after:h-[12px] after:absolute after:bottom-[12px] after:right-[12px] after:border-r-4 after:border-r-pink-600 after:border-b-4 after:border-b-pink-600 after:transition-all after:duration-500 after:opacity-0
            hover:bg-yellow-500 hover:font-bold hover:rounded-lg
            hover:before:top-0 hover:before:left-0 hover:before:opacity-100
            hover:after:bottom-0 hover:after:right-0 hover:after:opacity-100
        "
            v-for="nav in navItems"
            :key="nav.name"
            @click="switchNav(nav.name)"
            :class="[{active:currentNav==nav.name}]"
        ><router-link to="/NavDemo">{{nav.name}}</router-link></li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { NavItem} from '@/types/nav/Nav';
import { ref } from "@vue/reactivity";
const props = defineProps<{
  navItems:NavItem[],
}>();
const currentNav = ref(props.navItems[0].name)
function switchNav(nav:string){
    currentNav.value = nav
}
</script>