import { connect } from 'react-redux';
import Alarms from '../../components/alarms/Alarms';
import { mapDispatchToProps, mapStateToProps } from './AlarmsBaseContainer';

const AlarmsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Alarms)

export default AlarmsContainer;