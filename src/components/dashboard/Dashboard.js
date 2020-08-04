import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Dropdown, Header, Icon, Segment } from 'semantic-ui-react';
import { WIDGET_OPTIONS } from '../../utils/constants';
import { getWidgetToCreate } from '../../utils/helpers';
import ErrorMessage from '../shared/ErrorMessage';
import Widgets from './Widgets';

export default class Dashboard extends Component {
    addWidget = (text) => {
        this.props.createWidget(getWidgetToCreate(text));
    }

    render() {
        return (
            <Segment style={{ minHeight: '250px' }} loading={this.props.loadingWidgets}>
                {this.props.hasNoWidgets ?
                    <SegmentPlaceholder addWidget={this.addWidget} />

                    : <Widgets widgets={this.props.widgets} activatedAlarms={this.props.activatedAlarms} />}
                {this.props.showError &&
                    <ErrorMessage reason={this.props.error} />}
            </Segment>
        );
    }
}

function SegmentPlaceholder(props) {
    return (<Segment placeholder>
        <Header icon>
            <Icon name='object group outline' />
            It seems you haven't added any widgets yet
          </Header>
        <Dropdown
            button
            className='icon'
            onChange={(e) => { props.addWidget(e.currentTarget.innerText) }}
            floating
            labeled
            placeholder={'choose your widget'}
            icon='add'
            options={WIDGET_OPTIONS}
            text='Add Widget'
        />
    </Segment>
    )
}
