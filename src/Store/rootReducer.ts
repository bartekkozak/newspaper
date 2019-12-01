import { combineReducers } from 'redux'
import newsReducer from './Reducers/newsReducer'
import { initialRootState } from './initialRootState'
import { AppState } from '../Utils/interfaces/interfaces'
import { NewsActions } from './Actions/types'

export const combinedReducers = combineReducers({
  news: newsReducer,
})

export const rootReducer = (state: AppState = initialRootState, action: NewsActions) => {
  return combinedReducers(state, action)
}
