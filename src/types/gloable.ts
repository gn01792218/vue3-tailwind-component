import {Color} from '@/types/enum/enum'
export enum Direction {
    top,
    right,
    left,
    bottom,
}
export interface Style{
    backGroundColor:Color,
}
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