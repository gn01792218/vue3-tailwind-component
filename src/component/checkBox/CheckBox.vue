<template>
  <div v-if="checkBoxItem.labelDir === Direction.right">
    <input
      :id="`checkbox-${id}`"
      type="checkbox"
      :value="checkBoxItem.value"
      v-model="checked"
    />
    <label :for="`checkbox-${id}`">{{ checkBoxItem.labelStr }}</label>
  </div>
  <div v-if="checkBoxItem.labelDir === Direction.left">
    <label :for="`checkbox-${id}`">{{ checkBoxItem.labelStr }}</label>
    <input
      :id="`checkbox-${id}`"
      type="checkbox"
      :value="checkBoxItem.value"
      v-model="checked"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { Direction, CheckBoxProperty, checkBoxEmitData } from "@/types/gloable";
import useComponentControl from "@/composable/useComponentControl";
const emits = defineEmits(["isSelected"]);
const props = defineProps<{
  checkBoxItem: CheckBoxProperty;
}>();
const { addCheckBox } = useComponentControl();
const id = addCheckBox();
const checked = ref(false);
watch(checked, () => {
  let checkBoxEmit: checkBoxEmitData = {
    isSelected: checked.value,
    value: props.checkBoxItem.value,
  };
  emits("isSelected", checkBoxEmit);
});
</script>
