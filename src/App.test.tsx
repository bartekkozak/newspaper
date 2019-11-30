import React from 'react'
import { render } from '@testing-library/react'
import store from './Store/store'

import App from './App'

describe('App', () => {
  it('should render correctly', () => {
    render(<App store={store()} />)
  })
})
