import { connect } from 'react-redux';
import {INITIALIZE_WEB_SOCKETS_CHANNEL, ACTIVATE_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/alarmActions';
import EnterDashboard from '../../components/App';
import { push, replace } from 'connected-react-router';
import NotificationBadge from '../../components/shared/NotificationBadge';

const mapStateToProps = (state, ownProps) => {
    const { alarms } = state;
    if (alarms)
        return {
            notifications: alarms.notifications,
            activatedNotes: alarms.activatedNotes
        }
    else
        return {};
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        redirectTo: (payload) => {
            push('/' + payload)
        },
        activateNotification: (payload) => {
            dispatch({ type: ACTIVATE_NOTIFICATION, payload: payload })
        },
        removeNotification: (payload) => {
            dispatch({ type: ACTIVATE_NOTIFICATION, payload: false })
            dispatch({ type: REMOVE_NOTIFICATION, payload: payload })
        }
    }
}

const NotificationBadgeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationBadge)

export default NotificationBadgeContainer