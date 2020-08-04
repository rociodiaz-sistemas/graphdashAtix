import { hasNoWidgets, formatInputs, formatCreateInputs } from '../../utils/helpers';
import { OPEN_MODAL, SET_SELECTED_ALARM, EDIT_ALARM, CREATE_ALARM, DELETE_ALARM, SET_COUNTER, PAUSE_ALARM, CLOSE_MODAL, OPEN_EDIT_MDOAL, OPEN_CREATE_MODAL } from '../actions/alarmActions';

export const mapStateToProps = (state, ownProps) => {
    const { alarms } = state;
    debugger;
    if (alarms)
        return {
            alarms: alarms.alarms,
            loadingAlarms: alarms.loadingAlarms,
            isOpenModal: alarms.isOpenModal,
            selectedAlarm: alarms.selectedAlarm,
            isEdit: alarms.isEdit,
        }
    else
        return {};
}
export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openModal: (payload) => {
            dispatch({ type: OPEN_MODAL, payload: payload })
        },
        closeModal: () => {
            dispatch({ type: CLOSE_MODAL })
        },
        openEditModal: (payload) => {
            dispatch({ type: OPEN_EDIT_MDOAL });
            dispatch({ type: SET_SELECTED_ALARM, payload: payload });
        },
        openCreateModal: () => {
            dispatch({ type: OPEN_CREATE_MODAL });
        },
        setSelectedAlarm: (payload) => {
            dispatch({ type: SET_SELECTED_ALARM, payload: payload })
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