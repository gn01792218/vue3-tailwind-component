<template>
  <div v-if="checkBoxItem.LabelDir === Direction.right">
      <CheckBox
        :checkBoxItem="checkBoxItem"
        @is-selected="selectFun"
      />
      <p>The model data : {{modelData}}</p>
  </div>
  <div v-if="checkBoxItem.LabelDir === Direction.left">
      <CheckBox
        :checkBoxItem="checkBoxItem"
        @is-selected="selectFun"
      />
      <p>The model data : {{modelData}}</p>
  </div>
</template>
<script setup lang="ts">
import { ref ,PropType } from "vue";
import { Direction,CheckBoxProperty } from '@/types/gloable';
import useComponentControl from '@/composable/useComponentControl';
import CheckBox from '@/component/checkBox/CheckBox.vue';
const props = defineProps<{
    checkBoxItem:CheckBoxProperty,
}>()
const { addCheckBox } = useComponentControl()
const modelData = ref<boolean>(false)
function selectFun(emitData:boolean){
    modelData.value = emitData
    console.log(modelData.value)
}
</script>