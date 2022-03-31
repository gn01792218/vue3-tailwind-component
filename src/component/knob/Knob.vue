<template>
  <div class="knob">
    <div class="knob-body w-full h-full relative overflow-hidden bg-slate-600">
      <div class="knob-fill absolute top-full left-0 h-full bg-green-600"></div>
      <div
        class="knob-center absolute top-1/4 left-1/4 flex justify-center items-center text-lg bg-white"
      >
        {{ displayCount }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted} from "vue";
import useKnob from "@/composable/knob/useKnob";
const props = defineProps({
  knobOption: {
    type: Object,
    default: {
      min: 0,
      max: 100,
      innerSize:{
        width:"50px",
        height:"50px",
      },
      outerSize:{
        width:"100px",
        height:"100px"
      },
      innerColorStyle:{
        backgroundColor:"white",
        color:"black",
      },
      outerColorStyle:{
        backgroundColor:"green",
        color:"green",
      }
    },
  },
});
const { setKnobValue, displayCount } = useKnob(props.knobOption);
onMounted(() => {
  setKnobValue(50);
});
</script>
