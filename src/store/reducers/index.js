import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import alarm from './alarmReducers';
import widgets from './widgetReducers';

const createRootReducer = (history) => combineReducers({
    alarm,
    widgets,
    router: connectRouter(history),
});

export default createRootReducer;
