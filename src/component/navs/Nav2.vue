<template>
  <nav>
    <ul class="flex">
        <li class="cursor-pointer pt-2 pb-2 pr-4 pl-4 relative transition-all duration-500
            before:w-[12px] before:h-[12px] before:absolute before:top-full before:left-full before:border-2 before:border-yellow-500 before:transition-all before:duration-500 before:opacity-0
            after:w-[12px] after:h-[12px] after:absolute after:bottom-full after:right-full after:border-2 after:border-yellow-500 after:transition-all after:duration-500 after:opacity-0
            hover:bg-yellow-500 hover:delay-300
            hover:before:top-0 hover:before:left-0 hover:before:opacity-100
            hover:after:bottom-0 hover:after:right-0 hover:after:opacity-100
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