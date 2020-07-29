import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header, Icon, Segment, Dropdown } from 'semantic-ui-react';
import { WIDGET_OPTIONS } from '../../utils/constants';
import { hasNoWidgets } from '../../utils/helpers';
import { render } from '@testing-library/react';
// import SegmentPlaceholder from './SegmentExamplePlaceholder';
// import axios from 'axios';

export default class Dashboard extends Component {

    componentDidMount() {
        debugger;
        this.props.getWidgets();
        debugger;
    }

    render() {
        debugger;
        return (
            <Segment style={{ minHeight: '250px' }} loading={this.props.loadingWidgets}>
                {hasNoWidgets &&
                    <SegmentPlaceholder />}
                {/* <Widgets></Widgets> */}
            </Segment>
        );
    }
}

const SegmentPlaceholder = () => (
    <Segment placeholder>
        <Header icon>
            <Icon name='object group outline' />
            It seems you haven't added any widgets yet
          </Header>
        <Dropdown
            button
            className='icon'
            floating
            labeled
            icon='add'
            options={WIDGET_OPTIONS}
            search
            text='Add Widget'
        />
    </Segment>
)

