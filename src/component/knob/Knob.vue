<template>
  <div
    :id="`circle-knob-${id}`"
    ref="circleKnob"
    class="circle-progress relative flex justify-center items-center"
  >
    <div
      :id="`circle-knob-inner-${id}`"
      ref="circleKnobInner"
      class="circle-progress-inner absolute flex justify-center items-center"
    >
      {{ displayCount }}
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  onMounted,
  watch,
  ref,
  watchEffect,
  toRefs,
  onUpdated,
  computed,
} from "vue";
import useKnob from "@/composable/knob/useKnob";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
const emits = defineEmits(["isCompleted"]);
const props = defineProps<{
  addNum: any;
  knobOption?: knobProperty;
}>();
const circleKnob = ref<HTMLElement | null>(null)
const circleKnobInner = ref<HTMLElement | null> (null)
const { loadKnobOption, displayCount, setKnobValue, id, max,setKnobStyle } = useKnob();
if (props.knobOption) loadKnobOption(props.knobOption);
const { addNum } = toRefs(props);
const isCompleted = ref(false);
watch(addNum, () => {
  let maxNum = max.value as number;
  if (displayCount.value > maxNum + 1) return;
  if(circleKnob.value)setKnobValue(props.addNum.addnum,circleKnob.value);
  emitEvent();
});
function emitEvent() {
  let maxNum = max.value as number;
  if (displayCount.value < maxNum) {
    isCompleted.value = false;
    let emitObj: knobEmitData = {
      id:id,
      isCompleted: isCompleted.value,
    };
    emits("isCompleted", emitObj);
    return
  }
  if (displayCount.value == maxNum && !isCompleted.value){
    isCompleted.value = true;
    let emitObj: knobEmitData = {
      id:id,
      isCompleted: isCompleted.value,
    };
    emits("isCompleted", emitObj);
  } 
}
onMounted(()=>{
  if(circleKnob.value && circleKnobInner.value) setKnobStyle(circleKnob.value,circleKnobInner.value)
})
</script>
