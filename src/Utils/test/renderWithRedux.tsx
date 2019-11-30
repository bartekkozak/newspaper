import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { initialRootState } from '../../Store/initialRootState'
import { rootReducer } from '../../Store/rootReducer'
import { middleware } from '../../Store/store'

export const renderWithRedux = (
  ui: JSX.Element,
  {
    storeState,
    store = createStore(rootReducer, { ...initialRootState, ...storeState }, middleware),
  }: { storeState?: Partial<any>; store?: any } = {},
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}
