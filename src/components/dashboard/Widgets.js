import React from 'react';
import { Card } from 'semantic-ui-react';

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
                            I AM SHOWING IMPORTANT DATA <span role="img" aria-label="smug emoji">😎</span>
              </Card.Description>
                    </Card.Content>
                </Card>}
        </div>
    );
}
