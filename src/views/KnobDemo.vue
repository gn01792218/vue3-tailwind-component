<template>
    <section>
        <h2 class="text-center">knob展示區</h2>
        <Knob 
            :knobOption="{
                min:0,
                max:100,
                innerColorStyle:{
                    backgroundColor:'red',
                    color:'black',
                },
                outerColorStyle:{
                    backgroundColor:'blue',
                }
            }"
        />
    </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Color ,Direction  } from "@/types/enum/enum";
import Knob from "@/component/knob/Knob.vue";

</script>
