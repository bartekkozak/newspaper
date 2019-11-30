import React, { Component, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import News from './News/News'

class App extends Component<{ store: Store }> {
  render(): ReactNode {
    return (
      <Provider store={this.props.store}>
        <News />
      </Provider>
    )
  }
}

export default App
