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
      <div
        :id="`checkBox-${id}`"
        :class="[
          checked ? `${backGroundColorClass} ${borderColorClass}` : '',
          'show-box',
        ]"
      ></div>
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
      <div
        :id="`checkBox-${id}`"
        :class="[
          checked ? `${backGroundColorClass} ${borderColorClass}` : '',
          'show-box',
          'show-box-right',
        ]"
      ></div>
    </label>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Direction } from "@/types/enum/enum";
import { CheckBoxProperty, checkBoxEmitData } from "@/types/checkBox/checkBox";
import useComponentControl from "@/composable/useComponentControl";
import { nextTick } from "process";
const emits = defineEmits(["isSelected"]);
const props = defineProps<{
  checkBoxItem: CheckBoxProperty;
}>();
const { addCheckBox } = useComponentControl();
const id = addCheckBox();
const checked = ref(false);
//客製化的設定變數
const style = props.checkBoxItem.style;
const backGroundColor = style?.backgroundColor;
const backGroundColorClass = ref("");
const borderColorClass = ref("");
onMounted(() => {
  setColor();
});
watch(checked, () => {
  emitEvent()
  setColor()
});
function setColor() {
  if (!style) return;
  const showBox = document.querySelector(`#checkBox-${id}`) as HTMLElement;
  // const showBox = document.querySelector('.showBox') as HTMLElement
  if (checked.value) {
    console.log('改變顏色')
    showBox.style.backgroundColor = props.checkBoxItem.style
      ?.backgroundColor as string;
  }else{
    showBox.style.backgroundColor = "transparent";
    console.log('改回原色',showBox.style.backgroundColor)
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
