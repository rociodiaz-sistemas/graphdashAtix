import { connect } from 'react-redux';
import { SET_ALARMS, INITIALIZE_WEB_SOCKETS_CHANNEL } from '../actions/alarmActions';
import EnterDashboard from '../../components/App';
import { push, replace } from 'connected-react-router';
import NotificationBadge from '../../components/shared/NotificationBadge';

const mapStateToProps = (state, ownProps) => {
    const { alarms } = state;
debugger;
    if (alarms)
        return {
            alarms: alarms.alarms,
            alarms: alarms.notifications
        }
    else
        return {};
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        redirectTo: (payload) => {
            push('/' + payload)
        },
    }
}

const NotificationBadgeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationBadge)

export default NotificationBadgeContainer