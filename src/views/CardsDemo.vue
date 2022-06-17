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
        title="card樣式6(高固定)"
      >
        <Card6
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!and see more...。add some description to card now~!and see more...。add some description to card now~!and see more...'
            }"
        />
      </DemoSlot>
      <DemoSlot
        title="card樣式7(高固定)"
      >
        <Card7
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!and see more...。add some description to card now~!and see more...。add some description to card now~!and see more...'
            }"
        />
      </DemoSlot>
      <DemoSlot
        title="card樣式8(高固定)"
      >
        <Card8
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!and see more...。add some description to card now~!and see more...。add some description to card now~!and see more...'
            }"
        />
      </DemoSlot>
       <DemoSlot
        title="card樣式9(高固定)"
      >
        <Card9
            :card="{
                caption:'This is a Picture!',
                description:'add some description to card now~!and see more...。add some description to card now~!and see more...。add some description to card now~!and see more...'
            }"
        />
      </DemoSlot>
      <DemoSlot
        title="card樣式10(高固定)"
      >
        <Card10
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
import Card7 from '../component/cards/Card7.vue'
import Card8 from '../component/cards/Card8.vue'
import Card9 from '../component/cards/Card9.vue'
import Card10 from '../component/cards/Card10.vue'
</script>