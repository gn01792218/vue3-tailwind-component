<template>
  <h1 class="text-slot-400 text-2xl mb-5">組件展示</h1>
  <section>
    <h2>CheckBox展示區</h2>
    <div class="mb-5">
      <p>可選擇label位置在左或右</p>
      <CheckBox
        :checkBoxItem="{
          LabelDir: Direction.right,
          labelStr: '右邊的標籤',
          value: '',
        }"
      />
      <CheckBox
        :checkBoxItem="{
          LabelDir: Direction.left,
          labelStr: '左邊的標籤',
          value: '',
        }"
      />
    </div>
    <div class="mb-5">
      <p>顯示model data</p>
      <CheckBoxWithSingleModelData
        :checkBoxItem="{
          LabelDir: Direction.right,
          labelStr: '右邊的標籤',
          value: '',
        }"
      />
      <CheckBoxWithSingleModelData
        :checkBoxItem="{
          LabelDir: Direction.left,
          labelStr: '左邊的標籤',
          value: '',
        }"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Direction } from "@/types/gloable";
import CheckBox from "@/component/checkBox/CheckBox.vue";
import CheckBoxWithSingleModelData from "@/component/checkBox/CheckBoxWithSingleModelData.vue";
const count = ref(0);
</script>

<style scoped></style>
