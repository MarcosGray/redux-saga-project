import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import indexSaga from './sagas/index'
import Info from './info'
import UserAgent from './UserAgent'



const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(indexSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <p>Consumindo uma API com Redux Saga</p>
          <Info />
          <UserAgent />
        </div>
      </Provider>
    );
  }
}

export default App
