import { reactive } from "vue";
interface ComponentControl {
    checkBoxCount:number,
}
//元件共有資料
export const componentControl = reactive<ComponentControl>({  //控制所有元件產生的數量
    checkBoxCount:0,
})
//使用元件的方法
export default function useComponentControl(){
    const checkBoxCount = componentControl.checkBoxCount
    function addCheckBox():string{
        componentControl.checkBoxCount++
        return String(checkBoxCount)
    }
    return {
        addCheckBox,
    }
}