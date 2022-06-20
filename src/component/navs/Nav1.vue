<template>
  <nav>
    <ul class="flex">
        <li class="cursor-pointer pt-2 pb-2 pr-4 pl-4 relative
            before:w-full before:h-[2px] before:absolute before:bg-teal-300 before:top-0 before:left-0 before:transition-all before:duration-500 before:origin-left before:scale-0
            after:w-full after:h-[2px] after:absolute after:bg-teal-300 after:bottom-0 after:right-0 after:transition-all after:duration-500 after:origin-right after:scale-0  
            hover:before:scale-100 hover:after:scale-100
        "
            v-for="nav in navItems"
            :key="nav.name"
        >{{nav.name}}</li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { NavItem} from '@/types/nav/Nav';
const props = defineProps<{
  navItems:NavItem[],
}>();
</script>