<template>
  <nav>
    <ul class="nav7 flex">
        <li class="cursor-pointer pt-1 pb-1 pr-4 pl-4 relative transition-all duration-300 hover:text-xl hover:bg-red-300
        "
            v-for="nav in navItems"
            :key="nav.name"
            @click="switchNav(nav.name)"
            :class="[{active:currentNav==nav.name}]"
        >{{nav.name}}</li>
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