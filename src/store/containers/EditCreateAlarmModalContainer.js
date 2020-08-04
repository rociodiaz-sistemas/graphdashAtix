import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './AlarmsBaseContainer';
import { EditCreateAlarmModal } from '../../components/alarms/EditCreateAlarmModal';

const EditCreateAlarmModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCreateAlarmModal)

export default EditCreateAlarmModalContainer;
