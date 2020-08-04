import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import EnterDashboard from './components/EnterDashboard/EnterDashBoard.js';
import { Route, Switch } from 'react-router' // react-router v4/v5
import LayoutContainer from './components/shared/LayoutContainer.js';
import './App.css';
import { GET_WIDGETS } from './store/actions/widgetActions';
import { GET_ALARMS, UPDATE_ALARMS } from './store/actions/alarmActions';
import { GET_INITIAL_INFO } from './store/actions/sharedActions';

export default class App extends Component {
  history = createBrowserHistory();
  store = configureStore(this.history);

  componentDidMount() {
    this.store.dispatch({
      type: GET_INITIAL_INFO,
    });

    this.timerID = setInterval(
      () => this.store.dispatch({
        type: UPDATE_ALARMS,
      }),
      3000
    );
  }

  componentWillUnmount() {
    /*
      stop getData() from continuing to run even
      after unmounting this component
    */
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={this.history}>
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path="/" render={() => (<EnterDashboard></EnterDashboard>)} />
                <Route exact path={["/dashboard", "/alarms"]} render={() => (<LayoutContainer></LayoutContainer>)} />
              </Switch>
            </header>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
