import { Direction } from '@/types/enum/enum'
import { Style } from '@/types/gloable'
export interface CheckBoxProperty {
    labelStr:string,
    labelDir:Direction,
    value:string | number,
    style?:Style,
}
export interface checkBoxEmitData {
    isSelected:boolean,
    value:string | number,
}
export interface CheckGroupData {
    checkItems:CheckBoxProperty[],
}