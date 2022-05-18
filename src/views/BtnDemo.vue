<template>
<div class="text-center w-full">
  <h1 class="text-slot-400 text-2xl mb-10">Btn自製組件展示</h1>
  <div class="w-full flex flex-wrap">
      <DemoSlot
        title="按鈕樣式1"
      >
        <Btn1/>
      </DemoSlot>
      <DemoSlot
        title="按鈕樣式2"
      >
        <Btn2/>
      </DemoSlot>
      <DemoSlot
        title="按鈕樣式3"
      >
        <Btn3/>
      </DemoSlot>
       <DemoSlot
        title="按鈕樣式4"
      >
        <Btn4/>
      </DemoSlot>
  </div>
</div>
  
</template>
<script setup lang="ts">
import DemoSlot from '../component/DemoSlot.vue'
import Btn1 from '../component/btn/Btn1.vue'
import Btn2 from '../component/btn/Btn2.vue'
import Btn3 from '../component/btn/Btn3.vue'
import Btn4 from '../component/btn/Btn4.vue'
</script>