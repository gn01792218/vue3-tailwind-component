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
import { CheckBoxProperty, checkBoxEmitData } from "@/types/checkBox/checkBox";
const emits = defineEmits(["isSelected"]);
const props = defineProps<{
  checkBoxItem: CheckBoxProperty;
}>();
const checked = ref(false);
//客製化的設定變數
const style = props.checkBoxItem.style
const backGroundColor = style?.backGroundColor 
const backGroundColorClass = ref('')
const borderColorClass = ref('')
onMounted(()=>{
 changeStyle()
})
watch(checked, () => {
  let checkBoxEmit: checkBoxEmitData = {
    isSelected: checked.value,
    value: props.checkBoxItem.value,
  };
  emits("isSelected", checkBoxEmit);
});
function changeStyle(){
    if(!style)return 
    switch(backGroundColor){
        case Color.red:
            backGroundColorClass.value = "bg-red-700"
            borderColorClass.value = "border-red-700"
            break;
        case Color.orange:
            backGroundColorClass.value = "bg-orange-400"
            borderColorClass.value = "border-orange-400"
            break;
        case Color.green:
            backGroundColorClass.value = "bg-green-500"
            borderColorClass.value = "border-green-500"
            break;
    }
}
</script>
