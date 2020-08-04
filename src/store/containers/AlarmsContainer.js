import { connect } from 'react-redux';
import Dashboard from '../../components/dashboard/Dashboard';
import { CREATE_WIDGET, GET_WIDGETS } from '../actions/widgetActions';
import { hasNoWidgets, formatInputs, formatCreateInputs } from '../../utils/helpers';
import Alarms from '../../components/alarms/Alarms';
import { OPEN_MODAL, SET_SELECTED_ALARM, EDIT_ALARM, CREATE_ALARM, DELETE_ALARM, SET_COUNTER, PAUSE_ALARM, CLOSE_MODAL } from '../actions/alarmActions';

const mapStateToProps = (state, ownProps) => {
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openModal: (payload) => {
            dispatch({ type: OPEN_MODAL, payload: payload })
        },
        closeModal: () => {
            dispatch({ type: CLOSE_MODAL })
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

const AlarmsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Alarms)

export default AlarmsContainer