import React, { Component } from 'react';
import { Header, Icon, Segment, Dropdown, Card, Popup, Button, Transition } from 'semantic-ui-react';

export default class NotificationBadge extends Component {

    componentDidUpdate(prevprops) {
        if (prevprops.notifications && this.props.notifications.length > 0 && this.props.notifications !== prevprops.notifications) {
            this.props.activateNotification(true);
        }
    }

    deactivateNotification = (e) => {
        this.props.removeNotification(e.currentTarget.id);
    }

    render() {
        return (
            <Popup position='bottom right' trigger={<Button color={this.props.activatedNotes ? 'red' : 'grey'}
                icon={this.props.activatedNotes ? 'bell' : 'bell outline'} />} hoverable
                header={'Your notifications'}
                content={this.props.notifications && this.props.notifications.length > 0 ?
                    this.props.notifications.map((item, i) =>
                        <NoteCard hush={this.deactivateNotification} note={item} key={item.id}></NoteCard>) :
                    <NoNoteCard />}
            />
        );
    }
}

function NoteCard(props) {
    return (
        <Button style={{ width: '-webkit-fill-available' }} id={props.note.id} onClick={(e) => props.hush(e)} animated>
            <Button.Content visible>Your {props.note.metric} for <strong>{props.note.name}</strong> is {props.note.trigger} <strong>{props.note.triggerValue}</strong>!</Button.Content>
            <Button.Content hidden>
                <Icon name='close' />
            </Button.Content>
        </Button>
    );
}

const NoNoteCard = () => {
    return (
        <Card>
            <Card.Content>Phew... No notifications here</Card.Content>
        </Card>
    )
}