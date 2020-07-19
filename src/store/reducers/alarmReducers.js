import { MY_ACTION } from '../actions/alarmActions';

const initialState = {
    myObj: undefined
};

function alarm(state = initialState, action) {
    switch (action.type) {
        case MY_ACTION:
            return {
                ...state,
                myObj: action.payload,
            }
        default:
            return state;
    }
}

export default alarm;