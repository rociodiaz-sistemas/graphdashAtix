import React from 'react';
import EnterDashboard from '../EnterDashboard/EnterDashBoard';
import NavBar from './NavBar';
import { Switch, Route } from "react-router";
import { Container, Grid, Segment } from 'semantic-ui-react';
import TopBar from './TopBar';
import PathsRouter from './pathsRouter';
import Dashboard from '../dashboard/Dashboard';
const LayoutContainer = () => (
    <Container>
        <Grid columns='equal'>
            <TopBar />
            <Grid.Row>
                <Grid.Column style={{ paddingLeft: '0' }}>
                    <NavBar />
                </Grid.Column>
                <Grid.Column style={{ paddingRight: '0', width: '87.5%' }}>
                    <Switch>
                        <Route exact path="/dashboard" render={() => (<Dashboard></Dashboard>)} />
                        {/* <Route render={() => (<div>Miss</div>)} /> */}
                    </Switch>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
)

export default LayoutContainer;
