import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './AlarmsBaseContainer';
import { EditCreateAlarmModal } from '../../components/alarms/EditCreateAlarmModal';
import Alarms from '../../components/alarms/Alarms';

const AlarmsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Alarms)

export default AlarmsContainer;