import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './reducers'
import SagaWatcher from './saga/sagaWatcher'

export default function configureStore(history) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
      ),
    )
  )

  sagaMiddleware.run(SagaWatcher);

  return store;
}