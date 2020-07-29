import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import EnterDashboard from './components/EnterDashboard/EnterDashBoard.js';
import { Route, Switch } from 'react-router' // react-router v4/v5
import LayoutContainer from './components/shared/LayoutContainer.js';
import './App.css';

export default class App extends Component {
  history = createBrowserHistory();
  store = configureStore(this.history);

  render() {
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={this.history}>
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path="/" render={() => (<EnterDashboard></EnterDashboard>)} />
                <Route exact path={["/dashboard", "/listing"]} render={() => (<LayoutContainer></LayoutContainer>)} />
              </Switch>
            </header>
          </div>
        </ConnectedRouter>
      </Provider>

    )
  }
}
