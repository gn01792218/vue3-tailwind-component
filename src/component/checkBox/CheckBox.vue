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
        ref="checkBox"
        class="show-box  checkBox-left"
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
        ref="checkBox"
        class="show-box checkBox-right"
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
defineExpose({
  setChecked,
})
const emits = defineEmits(["isSelected"]);
const props = defineProps<{
  checkBoxItem: CheckBoxProperty;
}>();

const { addCheckBox } = useComponentControl();
const id = addCheckBox();
const checked = ref(false);
//客製化的設定變數
const checkBox = ref<HTMLElement | null>(null);
const style = props.checkBoxItem.style;
onMounted(() => {
  if(checkBox.value) setColor(checkBox.value);
});
watch(checked, () => {
  if(!checkBox.value) return
  emitEvent();
  setColor(checkBox.value);
});
function setChecked(done:boolean){
  checked.value = done
}
function setColor(checkBox:HTMLElement) {
  if (!style) return;
  if (checked.value && checkBox) {
    checkBox.style.backgroundColor = props.checkBoxItem.style
      ?.backgroundColor as string;
  } else {
    checkBox.style.backgroundColor = "transparent";
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
