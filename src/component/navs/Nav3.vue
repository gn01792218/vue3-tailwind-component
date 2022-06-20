<template>
  <nav>
    <ul class="flex">
        <li class="cursor-pointer mr-1 ml-1 pt-1 pb-1 pr-3 pl-3 relative transition-all duration-500
            before:w-[12px] before:h-[12px] before:absolute before:top-[12px] before:left-[12px] before:border-l-2 before:border-l-pink-600 before:border-t-2 before:border-t-pink-600 before:transition-all before:duration-500 before:opacity-0
            after:w-[12px] after:h-[12px] after:absolute after:bottom-[12px] after:right-[12px] after:border-r-2 after:border-r-pink-600 after:border-b-2 after:border-b-pink-600 after:transition-all after:duration-500 after:opacity-0
            hover:bg-yellow-500 hover:text-white hover:font-bold hover:rounded-lg
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