import React, { Component } from 'react';
import { Header, Icon, Segment, Dropdown, Card, Popup, Button } from 'semantic-ui-react';

export default class NotificationBadge extends Component {
    render() {
        let notifications =  [{name: 'my alarm', triggerValue: '80%', trigger: 'over', metric: 'CPU'}];
        return (
            <Popup position='bottom right' trigger={<Button icon='alarm' />} hoverable
            header={'Your notifications'} 
            content={notifications.map((item, i) => <NoteCard note={item} key={i}></NoteCard>)}
            />
        );
    }
}

function NoteCard(props) {
    return (
        <Card>
            <Card.Content>Your {props.note.metric} for <strong>{props.note.name}</strong> is {props.note.trigger} <strong>{props.note.triggerValue}</strong>!</Card.Content>
        </Card>
    );
}