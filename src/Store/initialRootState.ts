import { NewsInitialState } from './Reducers/newsReducer'
import { AppState } from '../Utils/interfaces/interfaces'

export const initialRootState: AppState = {
  news: NewsInitialState,
}
