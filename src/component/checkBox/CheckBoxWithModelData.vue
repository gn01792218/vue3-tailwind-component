<template>
  <div v-if="LabelDir === Direction.right">
      <CheckBox
        :labelStr = "labelStr"
        :LabelDir = "LabelDir"
        @is-selected="selectFun"
      />
      <p>The model data : {{modelData}}</p>
  </div>
  <div v-if="LabelDir === Direction.left">
      <CheckBox
        :labelStr = "labelStr"
        :LabelDir = "LabelDir"
        @is-selected="selectFun"
      />
      <p>The model data : {{modelData}}</p>
  </div>
</template>
<script setup lang="ts">
import { ref ,PropType } from "vue";
import { Direction } from '@/types/gloable';
import useComponentControl from '@/composable/useComponentControl';
import CheckBox from '@/component/checkBox/CheckBox.vue';
 const props = defineProps({
    labelStr:{
        type:String,
        required:true,
    },
    LabelDir:{
        type:Number as PropType<Direction>,
        default:Direction.right
    },
})
const { addCheckBox } = useComponentControl()
const modelData = ref<boolean>(false)
function selectFun(emitData:boolean){
    modelData.value = emitData
    console.log(modelData.value)
}
</script>