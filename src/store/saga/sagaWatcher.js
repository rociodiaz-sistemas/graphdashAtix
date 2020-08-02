import { takeLatest, takeEvery } from 'redux-saga/effects';
import { GET_WIDGETS, CREATE_WIDGET } from '../actions/widgetActions';
import { getWidgets, createWidget } from './widgetWatcher';
import { getAlarms } from './alarmWatcher';
import { GET_ALARMS } from '../actions/alarmActions';


function* SagaWatcher() {
    yield takeLatest(GET_WIDGETS, getWidgets);
    yield takeLatest(GET_ALARMS, getAlarms);
    yield takeLatest(CREATE_WIDGET, createWidget);
}

export default SagaWatcher;