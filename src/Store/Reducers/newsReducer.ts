import { NEWS_ACTION_TYPES } from '../Actions/actionTypes'
import { createSelector } from 'reselect'
import { NewsState } from './types'
import { AppState, Article } from '../../Utils/interfaces/interfaces'
import { NewsActions } from '../Actions/types'

export const NewsInitialState: NewsState = {
  news: [],
  fashionLoading: false,
  fashionError: false,
  sportsLoading: false,
  sportsError: false,
  filters: [],
}

const newsReducer = (state: NewsState = NewsInitialState, action: NewsActions) => {
  switch (action.type) {
    case NEWS_ACTION_TYPES.SET_FASHION_NEWS:
      return {
        ...state,
        news: [...state.news, ...action.news],
      }
    case NEWS_ACTION_TYPES.SET_LOADING_FASHION_NEWS:
      return {
        ...state,
        fashionLoading: action.loading,
      }
    case NEWS_ACTION_TYPES.SET_ERROR_FASHION_NEWS:
      return {
        ...state,
        fashionError: action.error,
      }
    case NEWS_ACTION_TYPES.SET_SPORTS_NEWS:
      return {
        ...state,
        news: [...state.news, ...action.news],
      }
    case NEWS_ACTION_TYPES.SET_LOADING_SPORTS_NEWS:
      return {
        ...state,
        sportsLoading: action.loading,
      }
    case NEWS_ACTION_TYPES.SET_ERROR_SPORTS_NEWS:
      return {
        ...state,
        sportsError: action.error,
      }
    case NEWS_ACTION_TYPES.SORT_NEWS_ASCENDING:
      return {
        ...state,
        news: [...state.news.sort((a: Article, b: Article) => a.date - b.date)],
      }
    case NEWS_ACTION_TYPES.SORT_NEWS_DESCENDING:
      return {
        ...state,
        news: [...state.news.sort((a: Article, b: Article) => b.date - a.date)],
      }
    case NEWS_ACTION_TYPES.SET_FILTERS:
      const filters = state.filters.includes(action.category)
        ? state.filters.filter((item: string) => item !== action.category)
        : [...state.filters, action.category]

      return {
        ...state,
        filters,
      }
    default:
      return state
  }
}

export const selectAllNews = (state: AppState) => state.news.news

export const selectFilters = (state: AppState) => state.news.filters

export const selectFashionLoading = (state: AppState) => state.news.fashionLoading

export const selectFashionError = (state: AppState) => state.news.fashionError

export const selectSportsLoading = (state: AppState) => state.news.sportsLoading

export const selectSportsError = (state: AppState) => state.news.sportsError

export const newsSelector = createSelector(selectAllNews, selectFilters, (news, filters) => {
  const result = filters.length > 0 ? news.filter((article: Article) => filters.indexOf(article.category) >= 0) : news
  return result
})

export default newsReducer
