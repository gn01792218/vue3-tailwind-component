import {ColorStyle,Size} from '@/types/gloable'
interface knobBarStyle extends ColorStyle{
    barColor:string,
}
export interface knobProperty {
    min?:number,
    max?:number,
    innerSize?:Size,
    outerSize?:Size,
    innerColorStyle?:ColorStyle,
    outerColorStyle?:knobBarStyle,
    textSize?:string,
}
export interface knobEmitData {
    isCompleted:boolean,
}