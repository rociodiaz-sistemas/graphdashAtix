import React from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Menu inverted vertical style={{ width: '8rem' }}>
            <Menu.Item
                name='Dashboard'><Link to='/dashboard'></Link></Menu.Item>
            <Menu.Item
                name='My Alarms'><Link to="/alarms"></Link></Menu.Item>
        </Menu>
    )
}

export default NavBar;