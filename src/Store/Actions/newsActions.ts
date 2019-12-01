import { Dispatch } from 'redux'
import { NEWS_ACTION_TYPES } from './actionTypes'
import { getFashionNews, getSportsNews } from './api'
import { Article } from '../../Utils/interfaces/interfaces'
import {
  SetFashionNews,
  SetLoadingFashionNews,
  SetErrorFashionNews,
  SetSportsNews,
  SetLoadingSportsNews,
  SetErrorSportsNews,
  SortNewsDescending,
  SortNewsAscending,
} from './types'

export const setFashionNews = (news: Article[]): SetFashionNews => ({
  type: NEWS_ACTION_TYPES.SET_FASHION_NEWS,
  news,
})

export const setLoadingFashionNews = (loading: boolean): SetLoadingFashionNews => ({
  type: NEWS_ACTION_TYPES.SET_LOADING_FASHION_NEWS,
  loading,
})

export const setErrorFashionNews = (error: boolean): SetErrorFashionNews => ({
  type: NEWS_ACTION_TYPES.SET_ERROR_FASHION_NEWS,
  error,
})

export const setSportsNews = (news: Article[]): SetSportsNews => ({
  type: NEWS_ACTION_TYPES.SET_SPORTS_NEWS,
  news,
})

export const setLoadingSportsNews = (loading: boolean): SetLoadingSportsNews => ({
  type: NEWS_ACTION_TYPES.SET_LOADING_SPORTS_NEWS,
  loading,
})

export const setErrorSportsNews = (error: boolean): SetErrorSportsNews => ({
  type: NEWS_ACTION_TYPES.SET_ERROR_SPORTS_NEWS,
  error,
})

export const sortNewsDescending = (): SortNewsDescending => ({
  type: NEWS_ACTION_TYPES.SORT_NEWS_DESCENDING,
})

export const sortNewsAscending = (): SortNewsAscending => ({
  type: NEWS_ACTION_TYPES.SORT_NEWS_ASCENDING,
})

export const setFilters = (category: string) => ({
  type: NEWS_ACTION_TYPES.SET_FILTERS,
  category,
})

export const getFashionNewsData = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoadingFashionNews(true))
    dispatch(setErrorFashionNews(false))
    try {
      const { data } = await getFashionNews()
      const modifiedData = data.articles.map((item: Article) => ({
        ...item,
        date: isNaN(new Date(item.date).getTime()) ? 0 : new Date(item.date).getTime(),
      }))
      dispatch(setFashionNews(modifiedData))
    } catch (error) {
      dispatch(setErrorFashionNews(true))
    } finally {
      dispatch(setLoadingFashionNews(false))
    }
  }
}

export const getSportsNewsData = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoadingSportsNews(true))
    dispatch(setErrorSportsNews(false))
    try {
      const { data } = await getSportsNews()
      const modifiedData = data.articles.map((item: Article) => ({
        ...item,
        date: isNaN(new Date(item.date).getTime()) ? 0 : new Date(item.date).getTime(),
      }))
      dispatch(setSportsNews(modifiedData))
    } catch (error) {
      dispatch(setErrorSportsNews(true))
    } finally {
      dispatch(setLoadingSportsNews(false))
    }
  }
}
