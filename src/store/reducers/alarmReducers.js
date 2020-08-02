import { SET_ALARMS } from '../actions/alarmActions';

const initialState = {
    alarms: undefined,
    notifications: {name: 'my alarm', trigger: '80%', metric: 'CPU'}
};

function alarm(state = initialState, action) {
    switch (action.type) {
        case SET_ALARMS:
            return {
                ...state,
                alarms: action.payload,
                notifications: action.payload.filter(alarm => alarm.status === true)
            }
        default:
            return state;
    }
}

export default alarm;