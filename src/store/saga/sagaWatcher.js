import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getMyAlarms, getMyWidgets } from '../../api/api';
import { CREATE_ALARM, DELETE_ALARM, EDIT_ALARM, GET_ALARMS, PAUSE_ALARM, SET_ALARMS, SET_LOADING_ALARMS, UPDATE_ALARMS } from '../actions/alarmActions';
import { GET_INITIAL_INFO } from '../actions/sharedActions';
import { CREATE_WIDGET, GET_WIDGETS, SET_LOADING_WIDGETS, SET_WIDGETS } from '../actions/widgetActions';
import { createAlarm, deleteAlarm, editAlarm, getAlarms, pauseAlarm, updateAlarms } from './alarmWatcher';
import { createWidget, getWidgets } from './widgetWatcher';

function* SagaWatcher() {
    yield takeLatest(GET_WIDGETS, getWidgets);
    yield takeLatest(GET_ALARMS, getAlarms);
    yield takeLatest(CREATE_WIDGET, createWidget);
    yield takeLatest(CREATE_ALARM, createAlarm);
    yield takeLatest(GET_INITIAL_INFO, getInitialInfo);
    yield takeLatest(DELETE_ALARM, deleteAlarm);
    yield takeLatest(PAUSE_ALARM, pauseAlarm);
    yield takeLatest(EDIT_ALARM, editAlarm);
    yield takeLatest(UPDATE_ALARMS, updateAlarms);
}

export function* getInitialInfo(action) {
    try {
        yield put({ type: SET_LOADING_WIDGETS, payload: true });
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        // parallel calls
        const [alarms, widgets] = yield all([
            call(getMyAlarms, action.payload),
            call(getMyWidgets, action.payload)
        ])
        console.log(widgets);
        console.log(alarms);
        yield put({ type: SET_LOADING_WIDGETS, payload: false });
        yield put({ type: SET_WIDGETS, payload: widgets.data });

        yield put({ type: SET_ALARMS, payload: alarms.data });
        yield put({ type: SET_LOADING_ALARMS, payload: false });
    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_LOADING_WIDGETS, payload: false });
        yield put({ type: SET_ALARMS, payload: undefined });
        yield put({ type: SET_WIDGETS, payload: undefined });
        console.log(e);
    }
}

export default SagaWatcher;