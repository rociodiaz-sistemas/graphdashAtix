import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Segment, Button, Header, Form, Input, Modal } from 'semantic-ui-react';
export function EditCreateAlarmModal(_this) {
    debugger;
    let label = _this.props.isEdit ? 'Edit' : 'Create';
    let editCreate = _this.props.isEdit ? _this.props.editAlarm : _this.props.createAlarm;
    return (
        <Modal onClose={() => _this.handleOpenModal({})} open={_this.props.isOpenModal}>
            <Modal.Header>{label} Alarm '<i>{_this.props.selectedAlarm.name}'</i></Modal.Header>
            <Modal.Content>
                <Form onSubmit={(e) => editCreate({ inputs: e.target.elements, id: _this.props.selectedAlarm.id })}>
                    <Form.Field>
                        <label>Name</label>
                        <input required pattern="^[a-zA-Z0-9 ]*$" id="name" onInvalid={setCustomMessage} type="text" name='name' defaultValue={_this.props.selectedAlarm.name} />
                    </Form.Field>
                    <Form.Field>
                        <label>Source</label>
                        <input id="source" required type="text" name='source' defaultValue={_this.props.selectedAlarm.source} />
                    </Form.Field>
                    <Form.Field>
                        <label>Metric</label>
                        <input id="metric" required type="text" name='metric' defaultValue={_this.props.selectedAlarm.metric} />
                    </Form.Field>
                    <Form.Field>
                        <label>Trigger</label>
                        <select id="trigger" type="text" name='trigger' defaultValue={_this.props.selectedAlarm.trigger}>
                            <option value="under">Under</option>
                            <option value="over">Over</option>
                        </select>
                    </Form.Field>
                    <Form.Field>
                        <label>Trigger Value</label>
                        <input id="triggerValue" min="0" step="1" pattern="\d+" type="number" name='triggerValue' defaultValue={_this.props.selectedAlarm.triggerValue} />
                    </Form.Field>
                    <Button loading={_this.props.loadingAlarms} type='submit' color='green'>{label}</Button>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => _this.handleOpenModal({})} color='red'>Cancel</Button>
            </Modal.Actions>
        </Modal>
    )
}

function setCustomMessage() {
    var input = document.getElementById("name");
    if (input) {
        input.setCustomValidity('Only alphanumeric chars, please!');
        input.setCustomValidity('');
    }
}