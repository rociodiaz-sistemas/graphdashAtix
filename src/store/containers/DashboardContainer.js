import { connect } from 'react-redux';
import { SET_ALARMS } from '../actions/alarmActions';
import Dashboard from '../../components/dashboard/Dashboard';
import{push,replace}from'connected-react-router';
import { CREATE_WIDGET, GET_WIDGETS } from '../actions/widgetActions';

const mapStateToProps = (state, ownProps) => {
    const { widgets } = state;

    debugger;
    if (widgets)
        return {
            widgets: widgets.widgets,
            loadingWidgets: widgets.loadingWidgets
        }
    else
        return {};
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getWidgets: () => {
            dispatch({ type: GET_WIDGETS })
        },
        createWidget: (payload) => {
            dispatch({ type: CREATE_WIDGET, payload: payload.widget })
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