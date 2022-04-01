import { onMounted, ref, watch } from "vue";
import { Direction } from "@/types/enum/enum";
import { knobEmitData, knobProperty } from "@/types/knob/knob";
export default function useKnob(knobOption: knobProperty) {
  const max = knobOption.max as number;
  const min = knobOption.min as number;
  const length = max - min;
  const displayCount = ref(min);
  function checkDefaultOption() {
    if (!knobOption.innerSize)
      knobOption.innerSize = { width: "50px", height: "50px" };
    if (!knobOption.outerSize)
      knobOption.outerSize = { width: "100px", height: "100px" };
    if (!knobOption.innerColorStyle)
      knobOption.innerColorStyle = {
        backgroundColor: "white",
        color: "black",
      };
    if (!knobOption.outerColorStyle)
      knobOption.outerColorStyle = {
        barColor:"red",
        backgroundColor: "green",
        color: "green",
      };
    if (!knobOption.max) knobOption.max = 100;
    if (!knobOption.min) knobOption.min = 0;
  }
  function setColor() {
    const inner = knobOption.innerColorStyle;
    const outer = knobOption.outerColorStyle;
    const knobCenter = document.querySelector(".knob-center") as HTMLElement;
    const knobFill = document.querySelector(".knob-fill") as HTMLElement;
    knobCenter.style.backgroundColor = inner?.backgroundColor as string;
    knobCenter.style.color = inner?.color as string;
    knobFill.style.backgroundColor = outer?.backgroundColor as string;
    knobFill.style.color = outer?.color as string;
  }
  function setSize() {
    const knob = document.querySelector(".knob") as HTMLElement;
    const knobCenter = document.querySelector(".knob-center") as HTMLElement;
    knob.style.width = knobOption.outerSize?.width as string;
    knob.style.height = knobOption.outerSize?.height as string;
    knobCenter.style.width = knobOption.innerSize?.width as string;
    knobCenter.style.height = knobOption.innerSize?.height as string;
  }
  function setKnobValue(value: number) {
    if (value < min || value > max) return;
    const knobFill = document.querySelector(".knob-fill") as HTMLElement;
    //讓滾調依據現在狀況轉動
    knobFill.style.transform = `rotate(${value / length /2}turn)`;
    //更新中間的數字
    displayCount.value = value;
  }
  onMounted(() => {
    checkDefaultOption();
    setSize();
    setColor()
  });
  return {
    setKnobValue,
    displayCount,
  };
}
