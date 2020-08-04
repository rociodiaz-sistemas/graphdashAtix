import { call, put } from 'redux-saga/effects';
import { createMyAlarm, deleteMyAlarm, editMyAlarm, getMyAlarms, pauseMyAlarm } from '../../api/api';
import { CLOSE_MODAL, SET_ALARMS, SET_ALARMS_ERROR, SET_LOADING_ALARMS } from '../actions/alarmActions';

export function* getAlarms(action) {
    try {
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        const alarms = yield call(getMyAlarms, action.payload);
        yield put({ type: SET_ALARMS, payload: alarms.data});
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: '' });
    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: 'getting your alarms' });
        console.log(e);
    }
}

export function* updateAlarms(action) {
    try {
        const alarms = yield call(getMyAlarms, action.payload);
        yield put({ type: SET_ALARMS, payload: alarms.data});
    } catch (e) {
        console.log(e);
    }
}

export function* pauseAlarm(action) {
    try {
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        const pausedAlarm = yield call(pauseMyAlarm, action.payload);
        console.log(pausedAlarm);
        const alarms = yield call(getMyAlarms);
        yield put({ type: SET_ALARMS, payload: alarms.data });
        console.log(alarms);
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: '' });
    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: 'pausing your alarm' });
        console.log(e);
    }
}

export function* createAlarm(action) {
    try {
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        const createdALarm = yield call(createMyAlarm, action.payload);
        console.log(createdALarm);
        const alarms = yield call(getMyAlarms);
        console.log(alarms);
        yield put({ type: SET_ALARMS, payload: alarms.data });
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: '' });
        yield put({ type: CLOSE_MODAL });
    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: 'creating your alarm' });
        console.log(e);
    }
}

export function* deleteAlarm(action) {
    try {
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        const deletedAlarm = yield call(deleteMyAlarm, action.payload);
        console.log(deletedAlarm);
        const alarms = yield call(getMyAlarms);
        yield put({ type: SET_ALARMS, payload: alarms.data });
        console.log(alarms);
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: '' });

    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: 'deleting your alarm' });
        console.log(e);
    }
}

export function* editAlarm(action) {
    try {
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        const editedAlarm = yield call(editMyAlarm, action.payload);
        console.log(editedAlarm);
        const alarms = yield call(getMyAlarms);
        yield put({ type: SET_ALARMS, payload: alarms.data });
        console.log(alarms);
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: '' });
        yield put({ type: CLOSE_MODAL });

    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: 'editing your alarm' });
        console.log(e);
    }
}