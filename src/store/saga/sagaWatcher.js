import { takeLatest } from 'redux-saga/effects';
import { MY_ACTION } from '../actions/alarmActions';
import { getMyAlarm } from './alarmWatcher';
function* SagaWatcher() {
    yield takeLatest(MY_ACTION, getMyAlarm);
}

export default SagaWatcher;