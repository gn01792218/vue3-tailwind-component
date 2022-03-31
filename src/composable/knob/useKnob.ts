import { onMounted, ref, watch } from "vue";
import { Direction } from "@/types/enum/enum";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
import useComponentControl from "@/composable/useComponentControl";
export default function useKnob() {
  const { addKnob } = useComponentControl()
  const id = addKnob()
  let knobOption: knobProperty = {
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
    innerColorStyle: {
      backgroundColor: "blue",
      color: "black",
    },
    outerColorStyle: {
      backgroundColor: "gray",
      color: "green",
      barColor:"green"
    },
  }
  const max = knobOption.max as number;
  const min = knobOption.min as number;
  const long = max - min;
  const displayCount = ref(min);
  function loadKnobOption(knobOption: knobProperty){
    knobOption = knobOption
  }
  function checkDefaultOption() {
    if (!knobOption.innerSize)
      knobOption.innerSize = { width: "50px", height: "50px" };
    if (!knobOption.outerSize)
      knobOption.outerSize = { width: "100px", height: "100px" };
    if (!knobOption.innerColorStyle)
      knobOption.innerColorStyle = {
        backgroundColor: "blue",
        color: "black",
      };
    if (!knobOption.outerColorStyle)
      knobOption.outerColorStyle = {
        barColor:"green",
        backgroundColor: "gray",
        color: "green",
      };
    if (!knobOption.max) knobOption.max = 100;
    if (!knobOption.min) knobOption.min = 0;
    setColor()
    setSize() 
  }
  function setColor() {
    const inner = knobOption.innerColorStyle;
    const outer = knobOption.outerColorStyle;
    const outerBarColor = outer?.backgroundColor
    const barColor = outer?.barColor
    const outerBar = document.querySelector(`#circle-knob-${id}`) as HTMLElement;
    const innerEle = document.querySelector(`#circle-knob-inner-${id}`) as HTMLElement;
    innerEle.style.backgroundColor = inner?.backgroundColor as string;
    innerEle.style.color = inner?.color as string;
    outerBar.style.background = `conic-gradient(${barColor} 0, ${barColor} 0%, ${outerBarColor} 0%, ${outerBarColor})` as string;
  }
  function setSize() {
    const outerBar = document.querySelector(`#circle-knob-${id}`) as HTMLElement;
    const inner = document.querySelector(`#circle-knob-inner-${id}`) as HTMLElement;
    outerBar.style.width = knobOption.outerSize?.width as string;
    outerBar.style.height = knobOption.outerSize?.height as string;
    inner.style.width = knobOption.innerSize?.width as string;
    inner.style.height = knobOption.innerSize?.height as string;
  }
  function setKnobValue(value: number) {
    if (value < min || value > max) return;
    const outerBar = document.querySelector(`#circle-knob-${id}`) as HTMLElement;
    const outerBarColor = knobOption.outerColorStyle?.backgroundColor
    const barColor = knobOption.outerColorStyle?.barColor
    const rate = (value/long)*100
    //讓滾調依據現在狀況轉動
    outerBar.style.background = `conic-gradient(${barColor} 0, ${barColor} ${rate}%, ${outerBarColor} 0%, ${outerBarColor})`;
    //更新中間的數字
    displayCount.value = value;
  }
  
  onMounted(() => {
    checkDefaultOption();
  });
  return {
    setKnobValue,
    displayCount,
    loadKnobOption,
    id,
  };
}
