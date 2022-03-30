<template>
  <div
    class="flex justify-center items-center"
    v-if="checkBoxItem.labelDir === Direction.right"
  >
    <label :for="`checkbox-${id}`">
      <input
        :id="`checkbox-${id}`"
        class="mr-1"
        type="checkbox"
        :value="checkBoxItem.value"
        v-model="checked"
      />
      {{ checkBoxItem.labelStr }}
      <div class="show-box" :class="[{ backGroundColorClass: checked },{}]"></div>
    </label>
  </div>
  <div
    class="flex justify-center items-center"
    v-if="checkBoxItem.labelDir === Direction.left"
  >
  <label :for="`checkbox-${id}`">
       {{ checkBoxItem.labelStr }}
      <input
        :id="`checkbox-${id}`"
        class="mr-1"
        type="checkbox"
        :value="checkBoxItem.value"
        v-model="checked"
      />
      <div class="show-box show-box-right" :class="[checked ? `${backGroundColorClass}`:'']"></div>
    </label>
    <!-- <label :for="`checkbox-${id}`">{{ checkBoxItem.labelStr }}</label>
    <input
      :id="`checkbox-${id}`"
      class="ml-1"
      type="checkbox"
      :value="checkBoxItem.value"
      v-model="checked"
    /> -->
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Color } from "@/types/enum/enum";
import { Direction, CheckBoxProperty, checkBoxEmitData } from "@/types/gloable";
import useComponentControl from "@/composable/useComponentControl";
const emits = defineEmits(["isSelected"]);
const props = defineProps<{
  checkBoxItem: CheckBoxProperty;
}>();
const { addCheckBox } = useComponentControl();
const id = addCheckBox();
const checked = ref(false);
const style = props.checkBoxItem.style
const backGroundColor = style?.backGroundColor //客製化的背景顏色
const backGroundColorClass = ref('')
onMounted(()=>{

})
watch(checked, () => {
  let checkBoxEmit: checkBoxEmitData = {
    isSelected: checked.value,
    value: props.checkBoxItem.value,
  };
  emits("isSelected", checkBoxEmit);
});
function changeStyle(){
    if(!style) return
    switch(backGroundColor){
        case Color.coral:
            backGroundColorClass.value = "clr-coral"
            break;
        case Color.aqua:
            backGroundColorClass.value = "clr-aqua"
    }
}
</script>
