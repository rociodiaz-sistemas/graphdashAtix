import { call, put } from 'redux-saga/effects';
import { createMyWidget, getMyWidgets } from '../../api/api';
import { SET_LOADING_WIDGETS, SET_WIDGETS, SET_WIDGETS_ERROR } from '../actions/widgetActions';

export function* getWidgets(action) {
    try {
        yield put({ type: SET_LOADING_WIDGETS, payload: true });

        const widgets = yield call(getMyWidgets, action.payload);
        console.log(widgets);
        yield put({ type: SET_WIDGETS, payload: widgets.data });
        yield put({ type: SET_LOADING_WIDGETS, payload: false });
        yield put({ type: SET_WIDGETS_ERROR, payload: '' });
    } catch (e) {
        yield put({ type: SET_WIDGETS_ERROR, payload: true });
        yield put({ type: SET_LOADING_WIDGETS, payload: 'getting your widgets' });
    }
}

export function* createWidget(action) {
    try {

        yield put({ type: SET_LOADING_WIDGETS, payload: true });

        const newWidget = yield call(createMyWidget, action.payload);
        console.log(newWidget);
        const widgets = yield call(getMyWidgets, action.payload);

        yield put({ type: SET_WIDGETS, payload: widgets.data });
        yield put({ type: SET_LOADING_WIDGETS, payload: '' });
    } catch (e) {
        yield put({ type: SET_WIDGETS_ERROR, payload: 'creating your widget' });
        yield put({ type: SET_LOADING_WIDGETS, payload: false });
    }
}