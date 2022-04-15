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
      <span :style="{color:color}">{{ checkBoxItem.labelStr }}</span>
      <div
        class="show-box  checkBox-left"
        :style="{backgroundColor:backgroundColor,color:color}"
      ></div>
    </label>
  </div>
  <div
    class="flex justify-center items-center"
    v-if="checkBoxItem.labelDir === Direction.left"
  >
    <label class="relative cursor-pointer">
      <span :style="{color:color}">{{ checkBoxItem.labelStr }}</span>
      <input
        class="absolute top-1 mr-1"
        type="checkbox"
        :value="checkBoxItem.value"
        v-model="checked"
      />
      <div
        class="show-box checkBox-right"
        :style="{backgroundColor:backgroundColor}"
      ></div>
    </label>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Direction } from "@/types/enum/enum";
import { CheckBoxProperty, checkBoxEmitData } from "@/types/checkBox/checkBox";
defineExpose({
  setChecked,
})
const emits = defineEmits(["isSelected"]);
const props = defineProps<{
  checkBoxItem: CheckBoxProperty;
}>();
const checked = ref(false);
//客製化的設定變數
const style = props.checkBoxItem.style;
const backgroundColor = ref(style?.backgroundColor)
const color = ref(style?.color)
onMounted(() => {
  setColor();
});
watch(checked, () => {
  emitEvent();
  setColor();
});
function setChecked(done:boolean){
  checked.value = done
}
function setColor() {
  if (!style) return;
  if (checked.value) {
    backgroundColor.value = props.checkBoxItem.style?.backgroundColor
  } else {
    backgroundColor.value = "transparent"
  }
}
function emitEvent() {
  let checkBoxEmit: checkBoxEmitData = {
    isSelected: checked.value,
    value: props.checkBoxItem.value,
  };
  emits("isSelected", checkBoxEmit);
}
</script>
