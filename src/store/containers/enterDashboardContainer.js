import { connect } from 'react-redux';
import { SET_ALARMS } from '../actions/alarmActions';
import EnterDashboard from '../../components/App';
import{push,replace}from'connected-react-router';

const mapStateToProps = (state, ownProps) => {
    const { alarms } = state;

    if (alarms)
        return {
            alarms: alarms
        }
    else
        return {};
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        enterDashboard: () => {
            dispatch({ type: SET_ALARMS })
        },
        redirectTo: (payload) => {
            push('/' + payload)
        },
    }
}

const EnterDashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterDashboard)

export default EnterDashboardContainer