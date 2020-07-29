import React from 'react'
import { Menu, Grid } from 'semantic-ui-react'

function NavBar() {
    return (
            <Menu inverted vertical style={{width: '8rem'}}>
                <Menu.Item
                    name='Dashboard'
                />
                <Menu.Item
                    name='My Alarms'
                />
            </Menu>
    )
}

export default NavBar;