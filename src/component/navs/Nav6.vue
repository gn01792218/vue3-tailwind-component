<template>
  <nav>
    <ul class="nav6 flex">
        <li class="pt-1 pb-1 pr-4 pl-4 relative
            before:w-0 before:h-[2px] before:absolute before:bg-red-300 before:bottom-0 before:right-0 before:transition-all before:duration-500 before:origin-left
            after:w-0 after:h-[2px] after:absolute after:bg-teal-300 after:bottom-0 after:left-0 after:transition-all after:duration-500 after:origin-right 
            hover:before:w-[50%] hover:before:right-[50%]
            hover:after:w-[50%] hover:after:left-[50%]
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