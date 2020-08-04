import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
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