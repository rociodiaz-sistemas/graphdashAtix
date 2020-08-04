import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import NotificationBadge from '../../components/shared/NotificationBadge';
import { ACTIVATE_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/alarmActions';

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