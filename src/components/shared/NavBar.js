import React from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Menu inverted vertical style={{ width: '8rem' }}>
            <Menu.Item><Link to='/dashboard'> Dashboard</Link></Menu.Item>
            <Menu.Item><Link to='/alarms'> Alarms</Link></Menu.Item>
        </Menu>
    )
}

export default NavBar;