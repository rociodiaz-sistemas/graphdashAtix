import { SET_ALARMS } from '../actions/alarmActions';

const initialState = {
    alarms: undefined
};

function alarm(state = initialState, action) {
    switch (action.type) {
        case SET_ALARMS:
            return {
                ...state,
                alarms: action.payload,
            }
        default:
            return state;
    }
}

export default alarm;