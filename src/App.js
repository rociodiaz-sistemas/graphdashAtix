import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import EnterDashboardContainer from './store/containers/enterDashboardContainer';

export default class App extends Component {
  history = createBrowserHistory();
  store = configureStore(this.history);

  render() {
    return (
      <div className="App">
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            <EnterDashboardContainer />
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}
