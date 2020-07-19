import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import alarm from './alarmReducers';

const createRootReducer = (history) => combineReducers({
    alarm,
    router: connectRouter(history),
});

export default createRootReducer;
