import { SET_ALARMS, SET_LOADING_ALARMS, ACTIVATE_NOTIFICATION, REMOVE_NOTIFICATION, OPEN_MODAL, SET_SELECTED_ALARM, EDIT_ALARM, SET_COUNTER, CLOSE_MODAL, OPEN_EDIT_MODAL, OPEN_CREATE_MODAL } from '../actions/alarmActions';

const initialState = {
    alarms: undefined,
    loadingAlarms: false,
    notifications: undefined,
    alarmCounter: 0,
    activatedNotes: false,
    isOpenModal: false,
    selectedAlarm: { areYouSure: false },
    isEdit: '',
};

function alarm(state = initialState, action) {
    switch (action.type) {
        case SET_ALARMS:
            debugger;
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
                notifications: state.notifications.filter(e => e.id !== action.payload),
            }
        case OPEN_MODAL:
            return {
                ...state,
                isOpenModal: action.payload.isOpen,
                isEdit: action.payload.type == 'edit' ? true : false
            }
            case OPEN_EDIT_MODAL:
            return {
                ...state,
                isOpenModal: action.payload.isOpen,
                isEdit: action.payload.type == 'edit' ? true : false
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
        default:
            return state;
    }
}

export default alarm;