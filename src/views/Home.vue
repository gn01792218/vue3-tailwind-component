<template>
  <h1 class="text-slot-400 text-2xl mb-5">組件展示</h1>
  <section>
    <h2>CheckBox展示區</h2>
    <div class="mb-5 ">
      <p>可選擇label位置在左或右</p>
      <CheckBox
        :checkBoxItem="{
          labelDir: Direction.right,
          labelStr: '右邊的標籤',
          value: '',
        }"
      />
      <CheckBox
        :checkBoxItem="{
          labelDir: Direction.left,
          labelStr: '左邊的標籤aa',
          value: '',
          style:{
            backGroundColor:Color.red
          }
        }"
      />
    </div>
    <div class="mb-5">
      <p>顯示model data</p>
      <CheckBoxWithSingleModelData
        :checkBoxItem="{
          labelDir: Direction.right,
          labelStr: '右邊的標籤',
          value: '',
        }"
      />
      <CheckBoxWithSingleModelData
        :checkBoxItem="{
          labelDir: Direction.left,
          labelStr: '左邊的標籤',
          value: '',
        }"
      />
    </div>
    <div class="mb-5">
      <p>多個使用時，綁定Array數值</p>
      <CheckBoxGroupVue
        :checkGroupData="{ checkItems: [
        {labelStr:'Dog',labelDir:Direction.right,value:'dog'},
        {labelStr:'Cat',labelDir:Direction.right,value:'cat'},
        ] }"
      />
    </div>
    <div class="mb-5">
      <p>自訂義勾選框框的顏色</p>
      <CheckBoxGroupVue
        :checkGroupData="{ checkItems: [
        {labelStr:'Red',labelDir:Direction.right,value:'red',style:{backGroundColor:Color.red}},
        {labelStr:'Green',labelDir:Direction.left,value:'green',style:{backGroundColor:Color.green}},
        {labelStr:'Orange',labelDir:Direction.right,value:'orange',style:{backGroundColor:Color.orange}},
        ] }"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Color ,Direction  } from "@/types/enum/enum";
import CheckBox from "@/component/checkBox/CheckBox.vue";
import CheckBoxWithSingleModelData from "@/component/checkBox/CheckBoxWithSingleModelData.vue";
import CheckBoxGroupVue from "@/component/checkBox/CheckBoxGroup.vue";
</script>

<style scoped></style>
