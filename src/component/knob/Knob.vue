<template>
  <div
    class="flex justify-center items-center"
    v-if="checkBoxItem.labelDir === Direction.right"
  >
    <label class="relative cursor-pointe">
      <input
        class="mr-1"
        type="checkbox"
        :value="checkBoxItem.value"
        v-model="checked"
      />
      {{ checkBoxItem.labelStr }}
      <div :class="[checked ? `${backGroundColorClass} ${borderColorClass}`:'','show-box']"></div>
    </label>
  </div>
  <div
    class="flex justify-center items-center"
    v-if="checkBoxItem.labelDir === Direction.left"
  >
  <label class="relative cursor-pointer">
       <span>{{ checkBoxItem.labelStr }}</span>
      <input
        class="absolute top-1 mr-1"
        type="checkbox"
        :value="checkBoxItem.value"
        v-model="checked"
      />
      <div :class="[checked ? `${backGroundColorClass} ${borderColorClass}`:'','show-box','show-box-right']"></div>
    </label>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Color, Direction } from "@/types/enum/enum";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
const emits = defineEmits(["isCompleted"]);
const props = defineProps<{
  knobOption:{
      type:knobProperty
      default:{
          min:0,
          max:100,
          innerWidth:50,
          outerWidth:100,
      }
  };
}>();
const count = ref(0)
onMounted(()=>{
    runKnob()
})
watch(count, () => {
  console.log('開始跑')
  if(count.value<props.knobOption.max) return 
  console.log('跑完了')
  let knobEmitData: knobEmitData = {
    isCompleted:true,
  };
  emits("isCompleted", knobEmitData);
});
function runKnob(){
    setInterval(()=>{count.value++},100)
}
</script>
