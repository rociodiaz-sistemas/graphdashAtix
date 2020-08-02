import { takeLatest, takeEvery } from 'redux-saga/effects';
import { all, call, put } from 'redux-saga/effects';
import { GET_WIDGETS, CREATE_WIDGET, SET_LOADING_WIDGETS, SET_WIDGETS } from '../actions/widgetActions';
import { getWidgets, createWidget } from './widgetWatcher';
import { getAlarms } from './alarmWatcher';
import { GET_ALARMS, SET_LOADING_ALARMS, SET_ALARMS, SET_ALARMS_ERROR } from '../actions/alarmActions';
import { getMyAlarms, getMyWidgets } from '../../api/api';
import { GET_INITIAL_INFO } from '../actions/sharedActions';


function* SagaWatcher() {
    yield takeLatest(GET_WIDGETS, getWidgets);
    yield takeLatest(GET_ALARMS, getAlarms);
    yield takeLatest(CREATE_WIDGET, createWidget);
    yield takeLatest(GET_INITIAL_INFO, getInitialInfo);
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
        yield put({ type: SET_ALARMS_ERROR, payload: true });
        yield put({ type: SET_ALARMS, payload: undefined });
        yield put({ type: SET_WIDGETS, payload: undefined });
        console.log(e);
    }
}

export default SagaWatcher;