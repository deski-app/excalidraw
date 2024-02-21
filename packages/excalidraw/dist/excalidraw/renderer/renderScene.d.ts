import { RoughSVG } from "roughjs/bin/svg";
import { BinaryFiles } from "../types";
import { NonDeletedExcalidrawElement } from "../element/types";
import { InteractiveSceneRenderConfig, SVGRenderConfig, StaticSceneRenderConfig, RenderableElementsMap } from "../scene/types";
/**
 * Interactive scene is the ui-canvas where we render boundinb boxes, selections
 * and other ui stuff.
 */
export declare const renderInteractiveScene: <U extends ({ canvas, elementsMap, visibleElements, selectedElements, scale, appState, renderConfig, }: InteractiveSceneRenderConfig) => {
    atLeastOneVisibleElement: boolean;
    elementsMap: RenderableElementsMap;
    scrollBars?: undefined;
} | {
    scrollBars: import("../scene/types").ScrollBars | undefined;
    atLeastOneVisibleElement: boolean;
    elementsMap: RenderableElementsMap;
}, T extends boolean = false>(renderConfig: InteractiveSceneRenderConfig, throttle?: T | undefined) => T extends true ? void : ReturnType<U>;
/**
 * Static scene is the non-ui canvas where we render elements.
 */
export declare const renderStaticScene: (renderConfig: StaticSceneRenderConfig, throttle?: boolean) => void;
export declare const cancelRender: () => void;
export declare const renderSceneToSvg: (elements: readonly NonDeletedExcalidrawElement[], elementsMap: RenderableElementsMap, rsvg: RoughSVG, svgRoot: SVGElement, files: BinaryFiles, renderConfig: SVGRenderConfig) => void;
