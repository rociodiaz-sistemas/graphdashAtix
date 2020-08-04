import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function NavBar() {
    return (
        <Menu inverted vertical style={{ width: '8rem' }}>
            <Menu.Item><Link to='/dashboard'> Dashboard</Link></Menu.Item>
            <Menu.Item><Link to='/alarms'> Alarms</Link></Menu.Item>
        </Menu>
    )
}

export default NavBar;