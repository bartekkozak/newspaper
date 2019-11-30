import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { initialRootState as rootState } from './initialRootState'
import thunk from 'redux-thunk'

export const middleware = compose(applyMiddleware(thunk))

const initStore = (initialRootState = rootState) => createStore(rootReducer, initialRootState, middleware)

export default initStore
