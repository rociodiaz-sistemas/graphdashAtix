import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import HelloWorld from './components/App';

export default class App extends Component {
  history = createBrowserHistory();
  store = configureStore(this.history);

  render() {
    return (
      <div className="App">
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            <HelloWorld />
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}
