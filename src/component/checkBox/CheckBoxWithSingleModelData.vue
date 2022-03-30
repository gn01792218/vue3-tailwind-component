<template>
  <div v-if="checkBoxItem.labelDir === Direction.right">
      <CheckBox
        :checkBoxItem="checkBoxItem"
        @is-selected="selectFun"
      />
      <p>The model data : {{modelData}}</p>
  </div>
  <div v-if="checkBoxItem.labelDir === Direction.left">
      <CheckBox
        :checkBoxItem="checkBoxItem"
        @is-selected="selectFun"
      />
      <p>The model data : {{modelData}}</p>
  </div>
</template>
<script setup lang="ts">
import { ref ,PropType } from "vue";
import { Direction,CheckBoxProperty,checkBoxEmitData } from '@/types/gloable';
import useComponentControl from '@/composable/useComponentControl';
import CheckBox from '@/component/checkBox/CheckBox.vue';
const props = defineProps<{
    checkBoxItem:CheckBoxProperty,
}>()
const { addCheckBox } = useComponentControl()
const modelData = ref<boolean>(false)
function selectFun(emitData:checkBoxEmitData){
    modelData.value = emitData.isSelected
}
</script>