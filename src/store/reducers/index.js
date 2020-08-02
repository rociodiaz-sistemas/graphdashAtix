import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import alarms from './alarmReducers';
import widgets from './widgetReducers';

const createRootReducer = (history) => combineReducers({
    alarms,
    widgets,
    router: connectRouter(history),
});

export default createRootReducer;
