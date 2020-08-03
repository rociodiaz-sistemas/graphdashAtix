import { eventChannel } from 'redux-saga';
import { all, call, put, take } from 'redux-saga/effects'
import { SET_LOADING_ALARMS, SET_ALARMS, SET_ALARMS_ERROR, OPEN_MODAL } from '../actions/alarmActions';
import { getMyAlarms, editMyAlarm, deleteMyAlarm, createMyAlarm, pauseMyAlarm } from '../../api/api';

export function* getAlarms(action) {
    try {
        const alarms = yield call(getMyAlarms, action.payload);
        yield put({ type: SET_ALARMS, payload: alarms });
        yield put({ type: SET_ALARMS_ERROR, payload: false });
    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: true });
        yield put({ type: SET_ALARMS, payload: undefined });
        console.log(e);
    }
}

export function* pauseAlarm(action) {
    try {
        debugger;
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        const pausedAlarm = yield call(pauseMyAlarm, action.payload);
        console.log(pausedAlarm);
        const alarms = yield call(getMyAlarms);
        yield put({ type: SET_ALARMS, payload: alarms.data });
        console.log(alarms);
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: false });
    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: e });
        yield put({ type: SET_ALARMS, payload: undefined });
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
        yield put({ type: SET_ALARMS_ERROR, payload: false });
        yield put({ type: OPEN_MODAL, payload: {isOpen: false} });
    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: true });
        yield put({ type: SET_ALARMS, payload: undefined });
        console.log(e);
    }
}

export function* deleteAlarm(action) {
    try {
        debugger;
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        const deletedAlarm = yield call(deleteMyAlarm, action.payload);
        console.log(deletedAlarm);
        const alarms = yield call(getMyAlarms);
        yield put({ type: SET_ALARMS, payload: alarms.data });
        console.log(alarms);
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: false });

    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: e });
        yield put({ type: SET_ALARMS, payload: undefined });
        console.log(e);
    }
}

export function* editAlarm(action) {
    try {
        debugger;
        yield put({ type: SET_LOADING_ALARMS, payload: true });
        const editedAlarm = yield call(editMyAlarm, action.payload);
        console.log(editedAlarm);
        const alarms = yield call(getMyAlarms);
        yield put({ type: SET_ALARMS, payload: alarms.data });
        console.log(alarms);
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: false });
        yield put({ type: OPEN_MODAL, payload: {isOpen: false} });

    } catch (e) {
        yield put({ type: SET_LOADING_ALARMS, payload: false });
        yield put({ type: SET_ALARMS_ERROR, payload: e });
        yield put({ type: SET_ALARMS, payload: undefined });
        console.log(e);
    }
}