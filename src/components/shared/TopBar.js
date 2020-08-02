import React from 'react'
import { Dropdown, Icon, Menu, Segment, Grid } from 'semantic-ui-react'
import NotificationBadge from '../../store/containers/NotificationBadgeContainer';

function TopBar() {
    return (
        <Grid.Row>
            <Menu inverted attached='top'>
                <Menu.Menu position="right">
                    <NotificationBadge></NotificationBadge>
                </Menu.Menu>
            </Menu>
        </Grid.Row>
    )
}

export default TopBar;