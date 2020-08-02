import { SET_WIDGETS, SET_LOADING_WIDGETS } from '../actions/widgetActions';

const initialState = {
    widgets: undefined,
    loadingWidgets: false,
    hasNoWidgets: true,
};

function widget(state = initialState, action) {
    switch (action.type) {
        case SET_WIDGETS:
            return {
                ...state,
                widgets: action.payload,
            }
        case SET_LOADING_WIDGETS:
            return {
                ...state,
                loadingWidgets: action.payload
            }
        default:
            return state;
    }
}

export default widget;