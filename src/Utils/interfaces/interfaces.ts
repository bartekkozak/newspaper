import { combinedReducers } from '../../Store/rootReducer'

export interface Article {
  id: number
  date: number
  image: string
  category: string
  title: string
  preamble: string
}

export type AppState = ReturnType<typeof combinedReducers>
