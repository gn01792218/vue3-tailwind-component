export enum Direction {
    top,
    right,
    left,
    bottom,
}
export interface CheckBoxProperty {
    labelStr:string,
    labelDir:Direction,
    value:string | number,
}
export interface checkBoxEmitData {
    isSelected:boolean,
    value:string | number,
}
export interface CheckGroupData {
    checkItems:CheckBoxProperty[],
}