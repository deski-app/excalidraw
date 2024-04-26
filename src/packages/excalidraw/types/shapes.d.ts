import { KEYS } from "./keys";
declare const SHAPES_VALUES: {
    readonly selection: "selection";
    readonly rectangle: "rectangle";
    readonly diamond: "diamond";
    readonly ellipse: "ellipse";
    readonly arrow: "arrow";
    readonly line: "line";
    readonly freedraw: "freedraw";
    readonly text: "text";
    readonly image: "image";
    readonly eraser: "eraser";
};
export type ShapeValueDefault = typeof SHAPES_VALUES[keyof typeof SHAPES_VALUES];
type ShapeKey = typeof KEYS[keyof typeof KEYS];
type ShapeValue = ShapeValueDefault | "custom";
type ShapeBase = {
    icon: JSX.Element;
    key: ShapeKey | ShapeKey[] | null;
    numericKey: ShapeKey;
    fillable: boolean;
    customType: string | null;
    customHintText?: string;
};
type ShapeCustom = ShapeBase & {
    value: "custom";
};
type ShapeDefault = ShapeBase & {
    value: ShapeValueDefault;
};
export type Shape = ShapeCustom | ShapeDefault;
export declare const SHAPES: ShapeDefault[];
export declare const findShapeByKey: (key: string) => ShapeValueDefault | null;
export declare const isDefaultShape: (shape: ShapeValue) => shape is ShapeValueDefault;
export {};
