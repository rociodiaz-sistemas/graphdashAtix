import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header, Icon, Segment, Dropdown, Card } from 'semantic-ui-react';
// import axios from 'axios';

export default function Widgets(props) {
    return (
        <div>
            {props.widgets && props.widgets.some(e => e.name === 'alarms') &&
                <Card>
                    <Card.Content>
                        <Card.Header>Activated Alarms:</Card.Header>
                        <Card.Description>
                            {props.activatedAlarms}
                        </Card.Description>
                    </Card.Content>
                </Card>}

            {props.widgets && props.widgets.some(e => e.name === 'anotherWidget') &&
                <Card>
                    <Card.Content>
                        <Card.Header>This is another widget:</Card.Header>
                        <Card.Description>
                            I AM SHOWING IMPORTANT DATA 😎
              </Card.Description>
                    </Card.Content>
                </Card>}
        </div>
    );
}
