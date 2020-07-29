import React from 'react';
import { Switch, Route } from "react-router";
import Dashboard from '../dashboard/Dashboard';

function PathsRouter() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={(<Dashboard />)}
            />
        </Switch>
    )
}

export default PathsRouter;
