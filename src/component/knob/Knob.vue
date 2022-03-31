<template>
  <div :id="`circle-knob-${id}`" class="circle-progress flex justify-center items-center">
    <div :id="`circle-knob-inner-${id}`"
      class="circle-progress-inner flex justify-center items-center"
    >
      {{ displayCount }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted ,watch ,ref, watchEffect, toRefs } from "vue";
import useKnob from "@/composable/knob/useKnob";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
const emits = defineEmits(['isCompleted'])
const props = defineProps<{
  count:number,
  knobOption?:knobProperty,
}>()
const { loadKnobOption,displayCount,setKnobValue,id,max,knobOptionObj } = useKnob();
if(props.knobOption) loadKnobOption(props.knobOption)
// const obj = loadKnobOption(props.knobOption)
console.log(knobOptionObj)
const {count} = toRefs(props)
watch(count,()=>{
  console.log(max,knobOptionObj)
  if(count.value > max+1) return
  if(count.value ==max+1){
    emitEvent()
  }
  setKnobValue(count.value)
})
function emitEvent(){
  console.log('傳送事件')
  let emitObj : knobEmitData = {
    isCompleted:true,
  }
  emits('isCompleted',emitObj)
}
</script>
