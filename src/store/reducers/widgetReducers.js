import { SET_LOADING_WIDGETS, SET_WIDGETS, SET_WIDGETS_ERROR } from '../actions/widgetActions';

const initialState = {
    widgets: undefined,
    loadingWidgets: false,
    hasNoWidgets: true,
    error: ''
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
            case SET_WIDGETS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default widget;