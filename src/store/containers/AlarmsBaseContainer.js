import { hasNoWidgets, formatInputs, formatCreateInputs } from '../../utils/helpers';
import { OPEN_MODAL, SET_SELECTED_ALARM, EDIT_ALARM, CREATE_ALARM, DELETE_ALARM, SET_COUNTER, PAUSE_ALARM, CLOSE_MODAL, OPEN_EDIT_MODAL, OPEN_CREATE_MODAL } from '../actions/alarmActions';

export const mapStateToProps = (state, ownProps) => {
    const { alarms } = state;
    debugger;
    if (!alarms) return {};

    let myAlarms = alarms.alarms;

    return {
        alarms: myAlarms,
        loadingAlarms: alarms.loadingAlarms,
        isOpenModal: alarms.isOpenModal,
        selectedAlarm: alarms.selectedAlarm,
        isEdit: alarms.isEdit,
        hasAlarms: myAlarms && myAlarms.length > 0
    }
        
}
export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openModal: (payload) => {
            dispatch({ type: OPEN_MODAL, payload: payload })
        },
        closeModal: () => {
            dispatch({ type: CLOSE_MODAL })
        },
        openEditModal: (alarm) => {
            dispatch({ type: OPEN_EDIT_MODAL });
            dispatch({ type: SET_SELECTED_ALARM, payload: alarm });
        },
        openCreateModal: () => {
            dispatch({ type: OPEN_CREATE_MODAL });
        },
        setSelectedAlarm: (alarm) => {
            dispatch({ type: SET_SELECTED_ALARM, payload: alarm })
        },
        editAlarm: (payload) => {
            let alarm = formatInputs(payload.inputs);
            dispatch({ type: EDIT_ALARM, payload: { alarm: alarm, id: payload.id } })
        },
        createAlarm: (payload) => {
            let alarm = formatCreateInputs(payload.inputs);
            dispatch({ type: CREATE_ALARM, payload: { alarm: alarm } })
        },
        deleteAlarm: (payload) => {
            dispatch({ type: DELETE_ALARM, payload: payload });
        },
        pauseAlarm: (payload) => {
            dispatch({ type: PAUSE_ALARM, payload: payload });
        },
    }
}