<template>
  <h1 class="text-slot-400 text-2xl mb-5">組件展示</h1>
  <section>
    <h2>CheckBox展示區</h2>
    <div class="mb-5">
      <p>可選擇label位置在左或右</p>
      <CheckBox
        label-str="右邊的標籤(預設)"
        :LabelDir="Direction.right"
      />
      <CheckBox
        label-str="左邊的標籤"
        :LabelDir="Direction.left"
      />
    </div>
    <div class="mb-5">
      <p>顯示model data</p>
      <CheckBoxWithModelData 
          label-str="右邊的標籤"
        />
        <CheckBoxWithModelData 
          label-str="左邊的標籤"
        :LabelDir="Direction.left"
        />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Direction } from "@/types/gloable";
import CheckBox from "@/component/checkBox/CheckBox.vue"
import CheckBoxWithModelData from "@/component/checkBox/CheckBoxWithModelData.vue";
const count = ref(0);
</script>

<style scoped></style>
