import React, { useContext, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header, Icon, Segment, Dropdown } from 'semantic-ui-react';
import { WIDGET_OPTIONS } from '../../utils/constants';
// import { hasNoWidgets, getAddWidgetValue } from '../../utils/helpers';
// import SegmentPlaceholder from './SegmentExamplePlaceholder';
// import axios from 'axios';
function Dashboard() {
    return (
        <Segment style={{ minHeight: '250px' }}>
            <Segment placeholder>
                <Header icon>
                    <Icon name='object group outline' />
        It seems you haven't added any widgets yet
      </Header>
                <Dropdown
                    button
                    // onChange={e => { debugger; actions.createWidget() }}
                    className='icon'
                    floating
                    labeled
                    icon='add'
                    options={WIDGET_OPTIONS}
                    search
                    text='Add Widget'
                />
            </Segment>
        </Segment>
    );
}

export default Dashboard;
