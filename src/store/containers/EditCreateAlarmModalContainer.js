import { connect } from 'react-redux';
import { EditCreateAlarmModal } from '../../components/alarms/EditCreateAlarmModal';
import { mapDispatchToProps, mapStateToProps } from './AlarmsBaseContainer';

const EditCreateAlarmModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCreateAlarmModal)

export default EditCreateAlarmModalContainer;
