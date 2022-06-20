<template>
<div class="text-center w-full">
  <h1 class="text-slot-400 text-2xl mb-10">Nav自製組件展示</h1>
  <div class="w-full flex flex-col items-center">
      <DemoSlot
        title="nav樣式1"
      >
        <Nav1
            :navItems="[{name:'Home'},{name:'About'},{name:'Services'},{name:'Portfolio'},{name:'Contact'}]"
        />
      </DemoSlot>
  </div>
</div>
  
</template>
<script setup lang="ts">
import DemoSlot from '../component/DemoSlot.vue'
import Nav1 from '../component/navs/Nav1.vue'

</script>