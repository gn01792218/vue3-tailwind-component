import {ColorStyle,Size} from '@/types/gloable'
export interface knobProperty {
    min?:number,
    max?:number,
    innerSize?:Size,
    outerSize?:Size,
    innerColorStyle?:ColorStyle,
    outerColorStyle?:ColorStyle,
}
export interface knobEmitData {}