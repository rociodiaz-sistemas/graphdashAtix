import { takeLatest } from 'redux-saga/effects';
import { GET_WIDGETS } from '../actions/widgetActions';
import { getWidgets } from './widgetWatcher';
function* SagaWatcher() {
    yield takeLatest(GET_WIDGETS, getWidgets);
}

export default SagaWatcher;