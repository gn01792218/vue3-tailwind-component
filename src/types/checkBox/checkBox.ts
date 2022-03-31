import { Direction } from '@/types/enum/enum'
import { ColorStyle } from '@/types/gloable'
export interface CheckBoxProperty {
    labelStr:string,
    labelDir:Direction,
    value:string | number,
    style?:ColorStyle,
}
export interface checkBoxEmitData {
    isSelected:boolean,
    value:string | number,
}
export interface CheckGroupData {
    checkItems:CheckBoxProperty[],
}