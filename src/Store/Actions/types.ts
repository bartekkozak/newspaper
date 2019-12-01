import { NEWS_ACTION_TYPES } from './actionTypes'
import { Article } from '../../Utils/interfaces/interfaces'

export interface SetFashionNews {
  type: NEWS_ACTION_TYPES.SET_FASHION_NEWS
  news: Article[]
}

export interface SetLoadingFashionNews {
  type: NEWS_ACTION_TYPES.SET_LOADING_FASHION_NEWS
  loading: boolean
}

export interface SetErrorFashionNews {
  type: NEWS_ACTION_TYPES.SET_ERROR_FASHION_NEWS
  error: boolean
}

export interface SetSportsNews {
  type: NEWS_ACTION_TYPES.SET_SPORTS_NEWS
  news: Article[]
}

export interface SetLoadingSportsNews {
  type: NEWS_ACTION_TYPES.SET_LOADING_SPORTS_NEWS
  loading: boolean
}

export interface SetErrorSportsNews {
  type: NEWS_ACTION_TYPES.SET_ERROR_SPORTS_NEWS
  error: boolean
}

export interface SortNewsDescending {
  type: NEWS_ACTION_TYPES.SORT_NEWS_DESCENDING
}

export interface SortNewsAscending {
  type: NEWS_ACTION_TYPES.SORT_NEWS_ASCENDING
}

export interface SetFilters {
  type: NEWS_ACTION_TYPES.SET_FILTERS
  category: string
}

export type NewsActions =
  | SetFashionNews
  | SetLoadingFashionNews
  | SetErrorFashionNews
  | SetSportsNews
  | SetLoadingSportsNews
  | SetErrorSportsNews
  | SortNewsDescending
  | SortNewsAscending
  | SetFilters
