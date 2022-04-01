import { computed, onMounted, reactive, ref, watch } from "vue";
import { Direction } from "@/types/enum/enum";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
import useComponentControl from "@/composable/useComponentControl";
import { count } from "console";
export default function useKnob() {
  const { addKnob } = useComponentControl();
  const id = addKnob();
  const knobOptionObj =ref<knobProperty>({
    min: 0,
    max: 100,
    innerSize: {
      width: "50px",
      height: "50px",
    },
    outerSize: {
      width: "100px",
      height: "100px",
    },
    outerColorStyle: {
      backgroundColor: "gray",
      color: "green",
      barColor: "green",
    },
    innerColorStyle: {
      backgroundColor: "blue",
      color: "black",
    },
    textSize: "16px",
  }) 
  const max =computed<number>(()=>{
    return knobOptionObj.value.max as number;
  }) 
  const min =computed<number>(()=>{
    return knobOptionObj.value.min as number;
  })
  const long = computed<number>(()=>{
    return max.value - min.value;
  })
  const count = ref(min.value)
  const displayCount = computed(()=>{
    return count.value
  })
  watch(min,()=>{
    count.value=min.value
    console.log('最小值發生變化',min.value,'count變成',count.value)
  })
  function loadKnobOption(knobOption: knobProperty) {
    if(knobOption.min)knobOptionObj.value.min = knobOption.min
    if(knobOption.max)knobOptionObj.value.max = knobOption.max
    if(knobOption.innerColorStyle) knobOptionObj.value.innerColorStyle = knobOption.innerColorStyle
    if(knobOption.outerColorStyle) knobOptionObj.value.outerColorStyle = knobOption.outerColorStyle
    if(knobOption.innerSize) knobOptionObj.value.innerSize = knobOption.innerSize
    if(knobOption.outerSize) knobOptionObj.value.outerSize = knobOption.outerSize
    if(knobOption.textSize && knobOptionObj.value.innerColorStyle) knobOptionObj.value.innerColorStyle.color = knobOption.textSize
  }
  function setKnobStyle(outer:HTMLElement,inner:HTMLElement) {
    setColor(outer,inner);
    setSize(outer,inner);
    setText(inner);
  }
  function setText(innerEle:HTMLElement) {
    const textSize = knobOptionObj.value.textSize;
    innerEle.style.fontSize = textSize as string;
  }
  function setColor(outerBar:HTMLElement,innerEle:HTMLElement) {
    const inner = knobOptionObj.value.innerColorStyle;
    const outer = knobOptionObj.value.outerColorStyle;
    const outerBarColor = outer?.backgroundColor;
    const barColor = outer?.barColor;
    innerEle.style.backgroundColor = inner?.backgroundColor as string;
    innerEle.style.color = inner?.color as string;
    outerBar.style.background =
      `conic-gradient(${barColor} 0, ${barColor} 0%, ${outerBarColor} 0%, ${outerBarColor})` as string;
  }
  function setSize(outerBar:HTMLElement,innerEle:HTMLElement) {
    outerBar.style.width = knobOptionObj.value.outerSize?.width as string;
    outerBar.style.height = knobOptionObj.value.outerSize?.height as string;
    innerEle.style.width = knobOptionObj.value.innerSize?.width as string;
    innerEle.style.height = knobOptionObj.value.innerSize?.height as string;
  }
  function setKnobValue(value: number,outerBar:HTMLElement) {
    if (displayCount.value < min.value || displayCount.value > max.value) return;
    //計數器++
    count.value += value;
    //更新中間的數字
    if (displayCount.value+value < min.value){ 
      count.value+=min.value-displayCount.value
      // console.log('再-超過最小值了','只能減',min.value-displayCount.value,'最後是',count.value)
    } 
    if (displayCount.value+value > max.value){
      count.value+=max.value-displayCount.value
      // console.log('再+超過最大值了','只能+',min.value-displayCount.value,'最後是',count.value)
    } 
    const outerBarColor = knobOptionObj.value.outerColorStyle?.backgroundColor;
    const barColor = knobOptionObj.value.outerColorStyle?.barColor;
    const rate = Math.floor(((displayCount.value-min.value) / long.value) * 100);
    //讓滾調依據現在狀況轉動
    outerBar.style.background = `conic-gradient(${barColor} 0, ${barColor} ${rate}%, ${outerBarColor} 0%, ${outerBarColor})`;
    // console.log('最小值',min.value,'最大值',max.value,'顯示數字',displayCount.value,'比例',rate,'比例長度',long.value,'計數器',count.value)
  }
  return {
    setKnobValue,
    displayCount,
    loadKnobOption,
    id,
    max,
    knobOptionObj,
    setKnobStyle,
  };
}
