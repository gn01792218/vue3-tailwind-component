<template>
  <div v-if="LabelDir === Direction.right">
    <input
      :id="`checkbox-${id}`"
      type="checkbox"
      :value="value"
      v-model="checked"
    />
    <label :for="`checkbox-${id }`">{{ labelStr }}</label>
  </div>
  <div v-if="LabelDir === Direction.left">
    <label :for="`checkbox-${id }`">{{ labelStr }}</label>
    <input
      :id="`checkbox-${id }`"
      type="checkbox"
      :value="value"
      v-model="checked"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, PropType, watch } from "vue";
import { Direction } from "@/types/gloable";
import useComponentControl from "@/composable/useComponentControl";
const emits = defineEmits(["isSelected"]);
const props = defineProps({
  labelStr: {
    type: String,
    required: true,
  },
  LabelDir: {
    type: Number as PropType<Direction>,
    default: Direction.right,
  },
  value: {
    type: String,
  },
});
const { addCheckBox } = useComponentControl();
const id = addCheckBox()
const checked = ref(false);
watch(checked, () => {
  emits("isSelected", checked.value);
});
</script>
