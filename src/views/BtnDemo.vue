<template>
<div class="text-center">
  <h1 class="text-slot-400 text-2xl mb-10">Btn自製組件展示</h1>
  <div class="flex flex-wrap">
      <DemoSlot
        title="按鈕樣式1"
      >
        <Btn1/>
      </DemoSlot>
  </div>
</div>
  
</template>
<script setup lang="ts">
import DemoSlot from '../component/DemoSlot.vue'
import Btn1 from '../component/btn/Btn1.vue'

</script>