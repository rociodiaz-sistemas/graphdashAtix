import { all, call, put } from 'redux-saga/effects'
import { SET_SEARCHING_ALARMS, SET_ALARMS, SET_GET_ALARMS_ERROR } from '../actions/alarmActions';
import { getMyAlarms } from '../../api/api';

export function* getAlarms(action) {
    try {
        const alarms = yield call(getMyAlarms, action.payload);
        yield put({ type: SET_SEARCHING_ALARMS, payload: true });
        if (alarms.status !== 200) {
            yield put({ type: SET_SEARCHING_ALARMS, payload: true });
        } else {
            yield put({ type: SET_ALARMS, payload: alarms });
            yield put({ type: SET_GET_ALARMS_ERROR, payload: false });
        }
    } catch (e) {
        yield put({ type: SET_SEARCHING_ALARMS, payload: false });
        yield put({ type: SET_GET_ALARMS_ERROR, payload: true });
        yield put({ type: SET_ALARMS, payload: undefined });
        console.log(e);
    }
}