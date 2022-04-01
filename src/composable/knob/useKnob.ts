import { computed, onMounted, reactive, ref, watch } from "vue";
import { Direction } from "@/types/enum/enum";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
import useComponentControl from "@/composable/useComponentControl";
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
    return   max.value - min.value;
  })
  const displayCount = ref(min.value);
  console.log(displayCount.value,min.value)
  function loadKnobOption(knobOption: knobProperty) {
    if(knobOption.min) knobOptionObj.value.min = knobOption.min
    if(knobOption.max) knobOptionObj.value.max = knobOption.max
    if(knobOption.innerColorStyle) knobOptionObj.value.innerColorStyle = knobOption.innerColorStyle
    if(knobOption.outerColorStyle) knobOptionObj.value.outerColorStyle = knobOption.outerColorStyle
    if(knobOption.innerSize) knobOptionObj.value.innerSize = knobOption.innerSize
    if(knobOption.outerSize) knobOptionObj.value.outerSize = knobOption.outerSize
    if(knobOption.textSize && knobOptionObj.value.innerColorStyle) knobOptionObj.value.innerColorStyle.color = knobOption.textSize
  }
  function checkDefaultOption() {
    setColor();
    setSize();
    setText();
  }
  function setText() {
    const textSize = knobOptionObj.value.textSize;
    const innerEle = document.querySelector(
      `#circle-knob-inner-${id}`
    ) as HTMLElement;
    innerEle.style.fontSize = textSize as string;
  }
  function setColor() {
    const inner = knobOptionObj.value.innerColorStyle;
    const outer = knobOptionObj.value.outerColorStyle;
    const outerBarColor = outer?.backgroundColor;
    const barColor = outer?.barColor;
    const outerBar = document.querySelector(
      `#circle-knob-${id}`
    ) as HTMLElement;
    const innerEle = document.querySelector(
      `#circle-knob-inner-${id}`
    ) as HTMLElement;
    innerEle.style.backgroundColor = inner?.backgroundColor as string;
    innerEle.style.color = inner?.color as string;
    outerBar.style.background =
      `conic-gradient(${barColor} 0, ${barColor} 0%, ${outerBarColor} 0%, ${outerBarColor})` as string;
  }
  function setSize() {
    const outerBar = document.querySelector(
      `#circle-knob-${id}`
    ) as HTMLElement;
    const inner = document.querySelector(
      `#circle-knob-inner-${id}`
    ) as HTMLElement;
    outerBar.style.width = knobOptionObj.value.outerSize?.width as string;
    outerBar.style.height = knobOptionObj.value.outerSize?.height as string;
    inner.style.width = knobOptionObj.value.innerSize?.width as string;
    inner.style.height = knobOptionObj.value.innerSize?.height as string;
  }
  function setKnobValue(value: number) {
    if (displayCount.value < min.value || displayCount.value > max.value) return;
    //更新中間的數字
    displayCount.value += value;
    if (displayCount.value+value < min.value){
      displayCount.value+=min.value-displayCount.value
    } 
    if (displayCount.value+value > max.value){
      displayCount.value+=max.value-displayCount.value
    } 
    const outerBar = document.querySelector(
      `#circle-knob-${id}`
    ) as HTMLElement;
    const outerBarColor = knobOptionObj.value.outerColorStyle?.backgroundColor;
    const barColor = knobOptionObj.value.outerColorStyle?.barColor;
    const rate = (displayCount.value / long.value) * 100;
    //讓滾調依據現在狀況轉動
    outerBar.style.background = `conic-gradient(${barColor} 0, ${barColor} ${rate}%, ${outerBarColor} 0%, ${outerBarColor})`;
  }

  onMounted(() => {
    checkDefaultOption();
  });
  return {
    setKnobValue,
    displayCount,
    loadKnobOption,
    id,
    max,
    knobOptionObj,
  };
}
