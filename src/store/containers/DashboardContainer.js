import { connect } from 'react-redux';
import Dashboard from '../../components/dashboard/Dashboard';
import { push, replace } from 'connected-react-router';
import { CREATE_WIDGET, GET_WIDGETS } from '../actions/widgetActions';
import { hasNoWidgets } from '../../utils/helpers';

const mapStateToProps = (state, ownProps) => {
    const { widgets, alarms } = state;
    if (!widgets && !alarms) return {};
    let error = widgets.error;
    return {
        widgets: widgets.widgets,
        activatedAlarms: alarms.alarmCounter,
        loadingWidgets: widgets.loadingWidgets,
        hasNoWidgets: hasNoWidgets(widgets.widgets),
        error: error,
        showError: error ? true : false
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getWidgets: () => {
            dispatch({ type: GET_WIDGETS })
        },
        createWidget: (payload) => {
            dispatch({ type: CREATE_WIDGET, payload: payload })
        },
        redirectTo: (payload) => {
            push('/' + payload)
        },
    }
}

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)

export default DashboardContainer