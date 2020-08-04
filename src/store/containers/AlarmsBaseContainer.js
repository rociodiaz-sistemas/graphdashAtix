import { formatCreateInputs, formatInputs } from '../../utils/helpers';
import { CLOSE_MODAL, CREATE_ALARM, DELETE_ALARM, EDIT_ALARM, OPEN_CREATE_MODAL, OPEN_EDIT_MODAL, PAUSE_ALARM, SET_SELECTED_ALARM } from '../actions/alarmActions';

export const mapStateToProps = (state, ownProps) => {
    const { alarms } = state;
    if (!alarms) return {};

    let myAlarms = alarms.alarms;
    let isEdit = alarms.isEdit;

    return {
        alarms: myAlarms,
        loadingAlarms: alarms.loadingAlarms,
        isOpenModal: alarms.isOpenModal,
        selectedAlarm: alarms.selectedAlarm,
        isEdit: isEdit,
        hasAlarms: myAlarms && myAlarms.length > 0,
        label: isEdit ? 'Edit' : 'Create',
        showError: alarms.error ? true : false,
        error: alarms.error
    }
        
}
export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
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
            debugger;
            let alarm = formatInputs(payload.inputs);
            dispatch({ type: EDIT_ALARM, payload: { alarm: alarm, id: payload.id } })
        },
        createAlarm: (inputs) => {
            let alarm = formatCreateInputs(inputs);
            dispatch({ type: CREATE_ALARM, payload: alarm })
        },
        deleteAlarm: (payload) => {
            dispatch({ type: DELETE_ALARM, payload: payload });
        },
        pauseAlarm: (payload) => {
            dispatch({ type: PAUSE_ALARM, payload: payload });
        },
    }
}