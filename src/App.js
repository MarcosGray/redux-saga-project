import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore

class App extends Component {
  render() {
    return (
      <Provider strore={store}>
        <div className="App">
          <p>Deu certo!</p>
        </div>
      </Provider>
    );
  }
}

export default App
