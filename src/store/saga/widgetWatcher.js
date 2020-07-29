import { all, call, put } from 'redux-saga/effects'
import { SET_LOADING_WIDGETS, SET_WIDGETS, SET_WIDGETS_ERROR } from '../actions/widgetActions';
import { getMyWidgets } from '../../api/api';

export function* getWidgets(action) {
    try {
        yield put({ type: SET_LOADING_WIDGETS, payload: true });

        const widgets = yield call(getMyWidgets, action.payload);

        yield put({ type: SET_WIDGETS, payload: widgets.data });
        yield put({ type: SET_LOADING_WIDGETS, payload: false });
    } catch (e) {
        yield put({ type: SET_WIDGETS_ERROR, payload: [] });
        yield put({ type: SET_LOADING_WIDGETS, payload: false });
    }
}