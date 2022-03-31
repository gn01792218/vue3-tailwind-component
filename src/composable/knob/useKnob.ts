import { onMounted, ref, watch } from "vue";
import { Direction } from "@/types/enum/enum";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
import useComponentControl from "@/composable/useComponentControl";
export default function useKnob() {
  const { addKnob } = useComponentControl()
  const id = addKnob()
  let knobOptionObj: knobProperty = {
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
    textSize:'16px',
  }
  const max = knobOptionObj.max as number;
  const min = knobOptionObj.min as number;
  const long = max - min;
  const displayCount = ref(min);
  function loadKnobOption(knobOption: knobProperty):knobProperty{
    knobOptionObj = knobOption
    return knobOptionObj
  }
  function checkDefaultOption() {
    console.log(knobOptionObj.max)
    if (!knobOptionObj.innerSize)
      knobOptionObj.innerSize = { width: "50px", height: "50px" };
    if (!knobOptionObj.outerSize)
      knobOptionObj.outerSize = { width: "100px", height: "100px" };
    if (!knobOptionObj.innerColorStyle)
      knobOptionObj.innerColorStyle = {
        backgroundColor: "blue",
        color: "black",
      };
    if (!knobOptionObj.outerColorStyle)
      knobOptionObj.outerColorStyle = {
        barColor:"green",
        backgroundColor: "gray",
        color: "green",
      };
    // if (!knobOptionObj.max)console.log('修改max'); knobOptionObj.max = 100;
    // if (!knobOptionObj.min) knobOptionObj.min = 0;
    if(!knobOptionObj.textSize) knobOptionObj.textSize = "16px"
    setColor()
    setSize() 
    setText()
    console.log(knobOptionObj)
  }
  function setText(){
    const textSize = knobOptionObj.textSize
    const innerEle = document.querySelector(`#circle-knob-inner-${id}`) as HTMLElement;
    innerEle.style.fontSize = textSize as string
  }
  function setColor() {
    const inner = knobOptionObj.innerColorStyle;
    const outer = knobOptionObj.outerColorStyle;
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
    outerBar.style.width = knobOptionObj.outerSize?.width as string;
    outerBar.style.height = knobOptionObj.outerSize?.height as string;
    inner.style.width = knobOptionObj.innerSize?.width as string;
    inner.style.height = knobOptionObj.innerSize?.height as string;
  }
  function setKnobValue(value: number) {
    if (value < min || value > max) return;
    const outerBar = document.querySelector(`#circle-knob-${id}`) as HTMLElement;
    const outerBarColor = knobOptionObj.outerColorStyle?.backgroundColor
    const barColor = knobOptionObj.outerColorStyle?.barColor
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
    max,
    knobOptionObj,
  };
}
