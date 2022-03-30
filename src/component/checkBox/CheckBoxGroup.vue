<template>
  <CheckBox
    v-for="(checkBoxItem,index) in checkGroupData.checkItems"
    :key="index"
    :checkBoxItem="checkBoxItem"
    @is-selected="selectFun"
  />
  <p>The model data : {{ modelData }}</p>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { Direction } from '@/types/enum/enum'
import {
  CheckBoxProperty,
  CheckGroupData,
  checkBoxEmitData,
} from "@/types/checkBox/checkBox";
import useComponentControl from "@/composable/useComponentControl";
import CheckBox from "@/component/checkBox/CheckBox.vue";
const props = defineProps<{
  checkGroupData: CheckGroupData;
}>();
const { addCheckBox } = useComponentControl();
const modelData = reactive<any>([]);
function selectFun(emitData: checkBoxEmitData) {
  let valueIndex = 0;
  let haveThisValue = modelData.find((i: any, index: number) => {
    valueIndex = index;
    return i === emitData.value;
  });
  if (emitData.isSelected && !haveThisValue) modelData.push(emitData.value); //被選中，且沒有陣列中沒有此值時push
  if (!emitData.isSelected) {
    //沒被選中，陣列中有值，移除之
    modelData.splice(valueIndex, 1);
  }
}
</script>
