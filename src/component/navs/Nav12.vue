<template>
    <nav>
        <ul class="nav12 flex">
            <li class="m-2" v-for="nav in navItems" :key="nav.name" @click="switchNav(nav.name)"
                :class="[{ active: currentNav == nav.name }]">
                <router-link 
                    class="relative px-2 py-1
                            before:absolute before:w-full before:h-full before:left-0 before:top-0  before:border-t-2 before:border-l-2 before:border-yellow-500 before:transition-transform before:duration-500 before:origin-left
                            after:absolute after:w-full after:h-full after:right-0 after:bottom-0 after:border-b-2 after:border-r-2 after:border-yellow-500  after:transition-transform after:duration-500 after:origin-right
                             hover:before:rotate-[1turn] hover:before:w-[8px] hover:before:h-[8px]
                             hover:after:rotate-[1turn] hover:after:w-[8px] hover:after:h-[8px]
                " to="/NavDemo">
                    {{ nav.name }}
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