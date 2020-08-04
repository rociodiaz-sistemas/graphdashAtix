import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import ErrorMessage from '../shared/ErrorMessage';
export function EditCreateAlarmModal(props) {
    let editCreate = props.isEdit ? props.editAlarm : props.createAlarm;
    return (
        <Modal onClose={() => props.closeModal()} open={props.isOpenModal}>
            <Modal.Header>{props.label} Alarm <i>{props.selectedAlarm.name}</i></Modal.Header>
            <Modal.Content>
                <Form onSubmit={(e) => { debugger; editCreate(props.isEdit ? { inputs: e.target.elements, id: props.selectedAlarm.id } : e.target.elements) }}>
                    <Form.Field>
                        <label>Name</label>
                        <input required pattern="^[a-zA-Z0-9 ]*$" id="name" onInvalid={setCustomMessage} onInput={unsetCustomMessage}type="text" name='name' defaultValue={props.selectedAlarm.name} />
                    </Form.Field>
                    <Form.Field>
                        <label>Source</label>
                        <input id="source" required type="text" name='source' defaultValue={props.selectedAlarm.source} />
                    </Form.Field>
                    <Form.Field>
                        <label>Metric</label>
                        <input id="metric" required type="text" name='metric' defaultValue={props.selectedAlarm.metric} />
                    </Form.Field>
                    <Form.Field>
                        <label>Trigger</label>
                        <select id="trigger" type="text" name='trigger' defaultValue={props.selectedAlarm.trigger}>
                            <option value="under">Under</option>
                            <option value="over">Over</option>
                        </select>
                    </Form.Field>
                    <Form.Field>
                        <label>Trigger Value</label>
                        <input id="triggerValue" min="0" step="1" pattern="\d+" type="number" name='triggerValue' defaultValue={props.selectedAlarm.triggerValue} />
                    </Form.Field>
                    <Button loading={props.loadingAlarms} type='submit' color='green'>{props.label}</Button>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => props.closeModal()} color='red'>Cancel</Button>
            </Modal.Actions>
            {props.showError &&
                <ErrorMessage reason={this.props.error} />}
        </Modal>
    )
}

function setCustomMessage() {
    var input = document.getElementById("name");
    if (input) {
        input.setCustomValidity('Only alphanumeric chars, please!');
    }
}

function unsetCustomMessage() {
    var input = document.getElementById("name");
    if (input) {
        input.setCustomValidity('');
    }
}