import {
  ArrowIcon,
  DiamondIcon,
  EllipseIcon,
  EraserIcon,
  FreedrawIcon,
  ImageIcon,
  LineIcon,
  RectangleIcon,
  SelectionIcon,
  TextIcon,
} from "./components/icons";
import { KEYS } from "./keys";

const SHAPES_VALUES = {
  selection: "selection",
  rectangle: "rectangle",
  diamond: "diamond",
  ellipse: "ellipse",
  arrow: "arrow",
  line: "line",
  freedraw: "freedraw",
  text: "text",
  image: "image",
  eraser: "eraser",
} as const;

export type ShapeValueDefault =
  typeof SHAPES_VALUES[keyof typeof SHAPES_VALUES];

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

type ShapeCustom = ShapeBase & { value: "custom" };
type ShapeDefault = ShapeBase & { value: ShapeValueDefault };

export type Shape = ShapeCustom | ShapeDefault;

export const SHAPES: ShapeDefault[] = [
  {
    icon: SelectionIcon,
    value: SHAPES_VALUES.selection,
    key: KEYS.V,
    numericKey: KEYS["1"],
    fillable: true,
    customType: null,
  },
  {
    icon: RectangleIcon,
    value: SHAPES_VALUES.rectangle,
    key: KEYS.R,
    numericKey: KEYS["2"],
    fillable: true,
    customType: null,
  },
  {
    icon: DiamondIcon,
    value: SHAPES_VALUES.diamond,
    key: KEYS.D,
    numericKey: KEYS["3"],
    fillable: true,
    customType: null,
  },
  {
    icon: EllipseIcon,
    value: SHAPES_VALUES.ellipse,
    key: KEYS.O,
    numericKey: KEYS["4"],
    fillable: true,
    customType: null,
  },
  {
    icon: ArrowIcon,
    value: SHAPES_VALUES.arrow,
    key: KEYS.A,
    numericKey: KEYS["5"],
    fillable: true,
    customType: null,
  },
  {
    icon: LineIcon,
    value: SHAPES_VALUES.line,
    key: KEYS.L,
    numericKey: KEYS["6"],
    fillable: true,
    customType: null,
  },
  {
    icon: FreedrawIcon,
    value: SHAPES_VALUES.freedraw,
    key: [KEYS.P, KEYS.X],
    numericKey: KEYS["7"],
    fillable: false,
    customType: null,
  },
  {
    icon: TextIcon,
    value: SHAPES_VALUES.text,
    key: KEYS.T,
    numericKey: KEYS["8"],
    fillable: false,
    customType: null,
  },
  {
    icon: ImageIcon,
    value: SHAPES_VALUES.image,
    key: null,
    numericKey: KEYS["9"],
    fillable: false,
    customType: null,
  },
  {
    icon: EraserIcon,
    value: SHAPES_VALUES.eraser,
    key: KEYS.E,
    numericKey: KEYS["0"],
    fillable: false,
    customType: null,
  },
  // TODO: frame, create icon and set up numeric key
  // {
  //   icon: RectangleIcon,
  //   value: "frame",
  //   key: KEYS.F,
  //   numericKey: KEYS.SUBTRACT,
  //   fillable: false,
  // },
];

export const findShapeByKey = (key: string) => {
  const shape = SHAPES.find((shape, index) => {
    return (
      (shape.numericKey != null && key === shape.numericKey.toString()) ||
      (shape.key &&
        (typeof shape.key === "string"
          ? shape.key === key
          : (shape.key as readonly string[]).includes(key)))
    );
  });
  return shape?.value || null;
};

export const isDefaultShape = (
  shape: ShapeValue,
): shape is ShapeValueDefault => {
  return shape in SHAPES_VALUES;
};
