import { WIDGET_OPTIONS } from "./constants";

//Checks if every property from the widgets object is set to false
export function hasNoWidgets(widgets) {
     
    let result = false;
    if (widgets) {
        result = widgets.every(item => item.activated === false)
    }
    console.log(result);
    return result;
}

export function getWidgetToCreate(text) {
    let found = WIDGET_OPTIONS.find(element => text == element.text);
    let patchData = { id: found.key, activated: true }
    return patchData;
}