import { combineReducers } from 'redux'
import newsReducer from './Reducers/newsReducer'
import { initialRootState } from './initialRootState'

export const combinedReducers = combineReducers({
  news: newsReducer,
})

export const rootReducer = (state = initialRootState, action: any) => {
  return combinedReducers(state, action)
}
