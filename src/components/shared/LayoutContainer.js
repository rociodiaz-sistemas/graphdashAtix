import React from 'react';
import { Route, Switch } from "react-router";
import { Container, Grid } from 'semantic-ui-react';
import AlarmsContainer from '../../store/containers/AlarmsContainer';
import DashboardContainer from '../../store/containers/DashboardContainer';
import NavBar from './NavBar';
import TopBar from './TopBar';
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
                        <Route exact path="/dashboard" render={() => (<DashboardContainer></DashboardContainer>)} />
                        <Route path="/alarms" render={() => (<AlarmsContainer></AlarmsContainer>)} />
                    </Switch>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
)

export default LayoutContainer;
