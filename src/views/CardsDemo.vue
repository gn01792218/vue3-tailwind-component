<template>
<div class="text-center w-full">
  <h1 class="text-slot-400 text-2xl mb-10">Cards自製組件展示</h1>
  <div class="w-full flex flex-wrap justify-center">
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
      <DemoSlot
        title="card樣式3"
      >
        <Card3
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!'
            }"
        />
      </DemoSlot>
      <DemoSlot
        title="card樣式4"
      >
        <Card4
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!'
            }"
        />
      </DemoSlot>
      <DemoSlot
        title="card樣式5"
      >
        <Card5
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!'
            }"
        />
      </DemoSlot>
      <DemoSlot
        title="card樣式6"
      >
        <Card6
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!and see more...。add some description to card now~!and see more...。add some description to card now~!and see more...'
            }"
        />
      </DemoSlot>
  </div>
</div>
  
</template>
<script setup lang="ts">
import DemoSlot from '../component/DemoSlot.vue'
import Card1 from '../component/cards/Card1.vue'
import Card2 from '../component/cards/Card2.vue'
import Card3 from '../component/cards/Card3.vue'
import Card4 from '../component/cards/Card4.vue'
import Card5 from '../component/cards/Card5.vue'
import Card6 from '../component/cards/Card6.vue'
</script>