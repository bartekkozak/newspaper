import React, { Component, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import Layout from './Layout/Layout'

class App extends Component<{ store: Store }> {
  render(): ReactNode {
    return (
      <Provider store={this.props.store}>
        <Layout />
        <p>TEEST</p>
      </Provider>
    )
  }
}

export default App
