<template>
  <nav>
    <ul class="nav2 flex">
        <li class="pt-1 pb-1 pr-4 pl-4 relative transition-all duration-500
            before:w-[12px] before:h-[12px] before:absolute before:top-full before:left-full before:border-2 before:border-yellow-500 before:transition-all before:duration-500 before:opacity-0
            after:w-[12px] after:h-[12px] after:absolute after:bottom-full after:right-full after:border-2 after:border-yellow-500 after:transition-all after:duration-500 after:opacity-0
            hover:bg-yellow-500 hover:delay-300
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