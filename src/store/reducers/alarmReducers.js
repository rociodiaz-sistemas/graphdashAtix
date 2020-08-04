import { removeNotification } from '../../utils/helpers';
import { ACTIVATE_NOTIFICATION, CLOSE_MODAL, OPEN_CREATE_MODAL, OPEN_EDIT_MODAL, REMOVE_NOTIFICATION, SET_ALARMS, SET_ALARMS_ERROR, SET_LOADING_ALARMS, SET_SELECTED_ALARM } from '../actions/alarmActions';

const initialState = {
    alarms: undefined,
    loadingAlarms: false,
    notifications: undefined,
    alarmCounter: 0,
    activatedNotes: false,
    isOpenModal: false,
    selectedAlarm: {},
    isEdit: '',
    error: ''
};

function alarm(state = initialState, action) {
    switch (action.type) {
        case SET_ALARMS:
            return {
                ...state,
                alarms: action.payload,
                notifications: action.payload.filter(alarm => alarm.status === true),
                alarmCounter: action.payload.filter(alarm => alarm.status === true).length,
                activatedNotes: action.payload.find(alarm => alarm.status === true)
            }
        case SET_LOADING_ALARMS:
            return {
                ...state,
                loadingAlarms: action.payload
            }
        case ACTIVATE_NOTIFICATION:
            return {
                ...state,
                activatedNotes: action.payload,
            }
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                notifications: removeNotification(state.notifications, action),
            }
        case OPEN_EDIT_MODAL:
            return {
                ...state,
                isOpenModal: true,
                isEdit: true
            }
        case OPEN_CREATE_MODAL:
            return {
                ...state,
                isOpenModal: true,
                isEdit: false
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: false,
            }
        case SET_SELECTED_ALARM:
            return {
                ...state,
                selectedAlarm: action.payload
            }
        case SET_ALARMS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default alarm;