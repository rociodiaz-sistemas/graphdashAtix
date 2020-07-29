import React from 'react'
import { Dropdown, Icon, Menu, Segment, Grid } from 'semantic-ui-react'

function TopBar() {
    return (
        <Grid.Row>
            <Menu attached='top'>
                <Menu.Menu position="right">
                    <Dropdown item icon='alarm' simple>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Icon name='dropdown' />
                                <span className='text'>New</span>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Document</Dropdown.Item>
                                    <Dropdown.Item>Image</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>Open</Dropdown.Item>
                            <Dropdown.Item>Save...</Dropdown.Item>
                            <Dropdown.Item>Edit Permissions</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Export</Dropdown.Header>
                            <Dropdown.Item>Share</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        </Grid.Row>
    )
}

export default TopBar;