<template>
    <nav>
        <ul class="nav10 flex">
            <li class="m-2" v-for="nav in navItems" :key="nav.name" @click="switchNav(nav.name)"
                :class="[{ active: currentNav == nav.name }]">
                <router-link 
                    class="relative px-2 py-1 hover:text-white
                            before:absolute before:w-full before:h-full before:left-0  before:border-y-2 before:border-y-black before:transition-transform before:duration-500 before:scale-y-[2] before:opacity-0
                            after:absolute after:z-[-1] after:w-full after:h-full after:left-0 after:bg-black after:transition-transform after:duration-500 after:scale-0
                            hover:before:scale-y-[1.5] hover:before:opacity-100
                            hover:after:scale-100
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