<template>
  <section class="w-1/2 mr-auto ml-auto">
    <h2 class="text-center text-2xl">knob展示區</h2>
    <div>
      <h3><i class="bi bi-trophy-fill"></i>圓形knob</h3>
      <div class="flex">
        <div class="m-5">
          <p>
            <i class="bi bi-check2-square"></i>完成進度否 :
            {{ count1isCompleted }}
          </p>
          <p>最小值: {{ count1.min }} 最大值 : {{ count1.max }}</p>
          <Knob
            class="m-6"
            @isCompleted="completedAction"
            :addNum="count1"
            :knobOption="{
              min: count1.min,
              max: count1.max,
              innerColorStyle: {
                color: 'yellow',
                backgroundColor: 'blue',
              },
            }"
          />
        </div>
        <div class="m-5">
          <p>
            <i class="bi bi-check2-square"></i>完成進度否 :
            {{ count2isCompleted }}
          </p>
          <p>最小值: {{ count2.min }} 最大值 : {{ count2.max }}</p>
          <Knob
            class="m-10"
            @isCompleted="completedAction"
            :addNum="count2"
            :knobOption="{
              min: count2.min,
              max: count2.max,
              outerColorStyle: {
                color: 'yellow',
                barColor: 'red',
                backgroundColor: 'yellow',
              },
              innerColorStyle: {
                color: 'white',
                backgroundColor: 'gray',
              },
              innerSize: {
                width: '100px',
                height: '100px',
              },
              outerSize: {
                width: '200px',
                height: '50px',
              },
            }"
          />
        </div>
        <div>
          <p>
            <i class="bi bi-check2-square"></i>完成進度否 :
            {{ count3isCompleted }}
          </p>
          <p>最小值: {{ count3.min }} 最大值 : {{ count3.max }}</p>
          <Knob
            @isCompleted="completedAction"
            :addNum="count3"
            :knobOption="{
              min: count3.min,
              max: count3.max,
              outerColorStyle: {
                color: 'gray',
                barColor: 'white',
                backgroundColor: 'palegoldenrod',
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
      </div>
    </div>
    <div>
      <h3><i class="bi bi-trophy-fill"></i>小應用</h3>
      <p>
        <i class="bi bi-check2-square"></i>完成進度否 : {{ count4isCompleted }}
      </p>
      <p>最小值: {{ count4.min }} 最大值 : {{ count4.max }}</p>
      <Knob
        @isCompleted="completedAction"
        :addNum="addNum"
        :knobOption="{
          min: count4.min,
          max: count4.max,
        }"
      />
      <button
        class="mr-5 border-black border-solid border-2"
        @click="plusOrsubtraction('+5')"
      >
        +5
      </button>
      <button
        class="mr-5 border-black border-solid border-2"
        @click="plusOrsubtraction('+2')"
      >
        +2
      </button>
      <button
        class="mr-5 border-black border-solid border-2"
        @click="plusOrsubtraction('-2')"
      >
        -2
      </button>
      <button
        class="mr-5 border-black border-solid border-2"
        @click="plusOrsubtraction('-1')"
      >
        -1
      </button>
      <button
        class="mr-5 border-black border-solid border-2"
        @click="plusOrsubtraction('+1')"
      >
        +1
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, toRefs } from "vue";
import { Direction } from "@/types/enum/enum";
import Knob from "@/component/knob/Knob.vue";
import { knobEmitData } from "@/types/knob/knob";
const count1isCompleted = ref(false);
const count2isCompleted = ref(false);
const count3isCompleted = ref(false);
const count4isCompleted = ref(false);
let count1 = ref({
  addnum: 0,
  min: 0,
  max: 50,
});
let count2 = ref({
  addnum: 0,
  min: 10,
  max: 100,
});
let count3 = ref({
  addnum: 0,
  min: 10,
  max: 30,
});
let count4 = ref({
  min: 20,
  max: 30,
});
let addNum = ref({
  addnum: 0,
});
onMounted(() => {
  setInterval(() => {
    count1.value = {
      addnum: 1,
      min: 0,
      max: 50,
    };
  }, 100);
  setInterval(() => {
    count2.value = {
      addnum: 1,
      min: 10,
      max: 100,
    };
  }, 50);
  setInterval(() => {
    count3.value = {
      addnum: 1,
      min: 20,
      max: 30,
    };
  }, 500);
});
function completedAction(knoEmit: knobEmitData) {
  switch (knoEmit.id) {
    case "0":
      count1isCompleted.value = knoEmit.isCompleted;
      break;
    case "1":
      count2isCompleted.value = knoEmit.isCompleted;
      break;
    case "2":
      count3isCompleted.value = knoEmit.isCompleted;
      break;
    case "3":
      count4isCompleted.value = knoEmit.isCompleted;
      break;
  }
}
function plusOrsubtraction(methods: string) {
  switch (methods) {
    case "+1":
      addNum.value = {
        addnum: 1,
      };
      break;
    case "+2":
      addNum.value = {
        addnum: 2,
      };
      break;
    case "+5":
      addNum.value = {
        addnum: 5,
      };
      break;
    case "-2":
      addNum.value = {
        addnum: -2,
      };
      break;
    case "-1":
      addNum.value = {
        addnum: -1,
      };
      break;
  }
}
</script>
