<template>
    <section>
        <h2 class="text-center">knob展示區</h2>
        <div>
            <h3>半圓形knob</h3>
            <HalfKnob 
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
        </div>
        <div>
            <h3>圓形knob</h3>
            <div class="flex"></div>
            <Knob 
                :count="count"
                :knobOption="{
                    innerColorStyle:{
                        color:'yellow',
                        backgroundColor:'blue',
                    }
                }"
            />
            <Knob 
                :count="count2"
            />
        </div>
    </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Color ,Direction  } from "@/types/enum/enum";
import HalfKnob from "@/component/knob/HalfKnob.vue";
import Knob from '@/component/knob/Knob.vue'
const count = ref(0)
const count2 = ref(0)
onMounted(()=>{
    setInterval(()=>{
        count.value++
    },1000)
    setInterval(()=>{
        count2.value++
    },100)
})
</script>
