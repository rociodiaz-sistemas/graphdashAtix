import { connect } from 'react-redux';
import { SET_ALARMS } from '../actions/alarmActions';
import EnterDashboard from '../../components/App';

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
        // redirectTo: () => {
        //     dispatch({ type: SESSION_EXPIRED })
        // },
    }
}

const EnterDashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterDashboard)

export default EnterDashboardContainer