import { SET_ALARMS, SET_LOADING_ALARMS, ACTIVATE_NOTIFICATION, REMOVE_NOTIFICATION, OPEN_MODAL, SET_SELECTED_ALARM, EDIT_ALARM, SET_COUNTER } from '../actions/alarmActions';

const initialState = {
    alarms: undefined,
    loadingAlarms: false,
    notifications: undefined,
    alarmCounter: 0,
    activatedNotes: false,
    isOpenModal: false,
    selectedAlarm: {areYouSure: false},
    isEdit: '',
};

function alarm(state = initialState, action) {
    switch (action.type) {
        case SET_ALARMS:
            return {
                ...state,
                alarms: action.payload,
                notifications: action.payload.filter(alarm => alarm.status === true),
                alarmCounter: action.payload.filter(alarm => alarm.status === true).length,
                activatedNotes: action.payload.filter(alarm => alarm.status === true)
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
            case SET_SELECTED_ALARM:
            return {
                ...state,
                selectedAlarm: action.payload
            }
            case SET_COUNTER:
                debugger;
                return {
                    ...state,
                    selectedAlarm:{...state.selectedAlarm, areYouSure: action.payload }
                }
            // case EDIT_ALARM:
            // return {
            //     ...state,
            //     selectedAlarm: action.payload
            // }
        default:
            return state;
    }
}

export default alarm;