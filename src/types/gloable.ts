export enum Direction {
    top,
    right,
    left,
    bottom,
}
export interface CheckBoxProperty {
    labelStr:string,
    LabelDir:Direction,
    value:string | number,
}