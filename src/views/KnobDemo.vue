<template>
  <section>
    <h2 class="text-center">knob展示區</h2>
    <div>
      <h3>半圓形knob</h3>
      <HalfKnob
        :knobOption="{
          min: 0,
          max: 100,
          innerColorStyle: {
            backgroundColor: 'red',
            color: 'black',
          },
          outerColorStyle: {
            backgroundColor: 'blue',
          },
        }"
      />
    </div>
    <!-- <div>
      <h3>圓形knob</h3>
      <div class="flex">
        <Knob
          @isCompleted="completedAction(1)"
          :count="count"
          :knobOption="{
            innerColorStyle: {
              color: 'yellow',
              backgroundColor: 'blue',
            },
          }"
        />
        <Knob
          @isCompleted="completedAction(2)"
          :count="count2"
          :knobOption="{
              min:10,
              max:50,
            outerColorStyle: {
              color: 'yellow',
              barColor: 'red',
              backgroundColor: 'yellow',
            },
            innerColorStyle: {
              color: 'white',
              backgroundColor: 'gray',
            },
          }"
        />
        <Knob
          @isCompleted="completedAction(3)"
          :count="count3"
          :knobOption="{
            outerColorStyle: {
              color: 'gray',
              barColor: 'white',
              backgroundColor: 'green',
            },
            outerSize: {
              width: '300px',
              height: '300px',
            },
            innerSize: {
              width: '200px',
              height: '200px',
            },
            textSize: '7rem',
          }"
        />
      </div>
    </div> -->
    <div>
        <h3>小應用</h3>
        <Knob
            @isCompleted="completedAction(6)"
            :count="count4"
            :knobOption="{
                min:0,
                max:5,
            }"
        />
        <button @click="plusOrsubtraction('++')">++</button>
         <button @click="plusOrsubtraction('--')">--</button>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Color, Direction } from "@/types/enum/enum";
import HalfKnob from "@/component/knob/HalfKnob.vue";
import Knob from "@/component/knob/Knob.vue";
const count = ref(0);
const count2 = ref(0);
const count3 = ref(0);
const count4 = ref(0);
onMounted(() => {
  setInterval(() => {
    count.value++;
  }, 100);
  setInterval(() => {
    count2.value++;
  }, 50);
  setInterval(() => {
    count3.value++;
  }, 500);
});
function completedAction(msg: number | string) {
  alert(`${msg}號完成進度!!!`);
}
function plusOrsubtraction(methods:string){
    switch(methods){
        case '++':
            count4.value++
            break;
        case '--':
            count4.value--
            break;
    }
}
</script>
