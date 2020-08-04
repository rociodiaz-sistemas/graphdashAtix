import { WIDGET_OPTIONS } from "./constants";

export function hasNoWidgets(widgets) {
    //Checks if every property from the widgets object is set to false
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

export function formatInputs(inputs) {
    //gets all our form info. Decided to use this instead of tracking all the inputs with an onChange.
    return {
        name: inputs.name.value, metric: inputs.metric.value, source: inputs.source.value, trigger: inputs.trigger.value,
        triggerValue: inputs.triggerValue.value
    };
}

export function formatCreateInputs(inputs){
    //need to fill in data that backend should take care of
    return {
        name: inputs.name.value, metric: inputs.metric.value, source: inputs.source.value, trigger: inputs.trigger.value,
        triggerValue: inputs.triggerValue.value, status: true, paused: false
    };
}

export function removeNotification(notifications, action){
    return notifications.filter(e => e.id !== action.payload)
}