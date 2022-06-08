<template>
<div class="text-center w-full">
  <h1 class="text-slot-400 text-2xl mb-10">Cards自製組件展示</h1>
  <div class="w-full flex flex-wrap">
      <DemoSlot
        title="card樣式1"
      >
        <Card1
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!'
            }"
        />
      </DemoSlot>
       <DemoSlot
        title="card樣式2"
      >
        <Card2
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!'
            }"
        />
      </DemoSlot>
  </div>
</div>
  
</template>
<script setup lang="ts">
import DemoSlot from '../component/DemoSlot.vue'
import Card1 from '../component/cards/Card1.vue'
import Card2 from '../component/cards/card2.vue'
</script>