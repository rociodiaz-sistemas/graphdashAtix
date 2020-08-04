import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Segment, Button, Header, Form, Input, Modal, Popup } from 'semantic-ui-react'
import { EditCreateAlarmModal } from './EditCreateAlarmModal';
import EditCreateAlarmModalContainer from '../../store/containers/EditCreateAlarmModalContainer';

export default class Alarms extends Component {

    handleOpenModal = (payload) => {
        //accepts type to know if the modal will be for creating or editting
        debugger;
        if (payload.alarm) {
            this.props.setSelectedAlarm(payload.alarm);
        }
        this.props.openModal({ isOpen: !this.props.isOpenModal, type: payload.type });
    }

    render() {
        return (
            <Segment style={{ minHeight: '250px' }} loading={this.props.loadingAlarms}>
                {this.props.hasAlarms ?
                    <div>
                        <AlarmsTable props={this.props} />
                        <Button floated='right' onClick={() => this.props.openCreateModal()} color='primary'> Add an alarm </Button>
                    </div>
                    : <SegmentPlaceholder openModal={this.props.openCreateModal}></SegmentPlaceholder>}
                <EditCreateAlarmModalContainer/>
            </Segment>
        );
    }
}

function AlarmsTable(_this) {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Source</Table.HeaderCell>
                    <Table.HeaderCell>Metric</Table.HeaderCell>
                    <Table.HeaderCell>Trigger</Table.HeaderCell>
                    <Table.HeaderCell>Trigger Value</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {_this.props.alarms.map((item, i) => {
                    return (
                        <Table.Row key={i}>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.source}</Table.Cell>
                            <Table.Cell>{item.metric}</Table.Cell>
                            <Table.Cell>{item.trigger}</Table.Cell>
                            <Table.Cell>{item.triggerValue}</Table.Cell>
                            <Table.Cell>
                                <Popup content='Double click to delete' trigger={<Button onDoubleClick={() => _this.props.deleteAlarm(item)}>Delete</Button>} />
                                <Button onClick={() => _this.props.openEditModal(item)}>Edit</Button>
                                <Button onClick={() => _this.props.pauseAlarm({ id: item.id, isPaused: !item.paused })} color={item.paused ? 'green' : 'red'} icon={item.paused ? 'play' : 'pause'} />
                            </Table.Cell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );
}

function SegmentPlaceholder(props) {
    return (<Segment placeholder>
        <Header icon>
            <Icon name='bell outline' />
            It seems you haven't added any alarms yet
          </Header>
        <Button onClick={() => props.openModal()} color='primary'> Add an alarm </Button>
    </Segment>
    )
}