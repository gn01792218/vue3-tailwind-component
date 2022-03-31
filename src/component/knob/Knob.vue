<template>
  <div class="circle-progress relative">
    <div
      class="circle-progress-inner absolute top-1/4 left-1/4 flex justify-center items-center"
    >
      {{ displayCount }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted ,watch ,ref, watchEffect, toRefs } from "vue";
import useKnob from "@/composable/knob/useKnob";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
const props = defineProps<{
  count:number,
  knobOption?:knobProperty,
}>()
// const props = defineProps({
//   knobOption: {
//     type: Object,
//     default: {
//       min: 0,
//       max: 100,
//       innerSize: {
//         width: "50px",
//         height: "50px",
//       },
//       outerSize: {
//         width: "100px",
//         height: "100px",
//       },
//       innerColorStyle: {
//         backgroundColor: "blue",
//         color: "black",
//       },
//       outerColorStyle: {
//         backgroundColor: "gray",
//         color: "green",
//         barColor:"green"
//       },
//     },
//   },
// });
const { loadKnobOption,displayCount,setKnobValue } = useKnob();
if(props.knobOption) loadKnobOption(props.knobOption)
const {count} = toRefs(props)
watch(count,()=>{
  setKnobValue(count.value)
})

</script>
