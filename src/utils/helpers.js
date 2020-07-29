import { WIDGET_OPTIONS } from "./constants";

//Checks if every property from the widgets object is set to false
export function hasNoWidgets(widgets) {
    debugger;
    let result = false;
    result = Object.keys(widgets).every((k) => !widgets[k.activated]);
    return result;
}