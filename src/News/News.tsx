import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  newsSelector,
  selectFashionLoading,
  selectSportsLoading,
  selectSportsError,
  selectFashionError,
} from '../Store/Reducers/newsReducer'

import { getFashionNewsData, getSportsNewsData } from '../Store/Actions/newsActions'
import Article from './Article/Article'
import styles from './News.module.css'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import { AppState } from '../Utils/interfaces/interfaces'

const News: React.FC = () => {
  const dispatch = useDispatch()
  const { news, fashionLoading, fashionError, sportsLoading, sportsError } = useSelector((state: AppState) => ({
    news: newsSelector(state),
    fashionLoading: selectFashionLoading(state),
    fashionError: selectFashionError(state),
    sportsLoading: selectSportsLoading(state),
    sportsError: selectSportsError(state),
  }))

  useEffect(() => {
    dispatch(getFashionNewsData())
    dispatch(getSportsNewsData())
  }, [])

  return (
    <div data-testid="news" className={styles.container}>
      {fashionError && (
        <ErrorMessage category="fashion" loading={fashionLoading} onClick={() => dispatch(getFashionNewsData())} />
      )}
      {sportsError && (
        <ErrorMessage category="sports" loading={sportsLoading} onClick={() => dispatch(getSportsNewsData())} />
      )}
      {fashionLoading && sportsLoading && <p>Loading...</p>}
      {news.length > 0 && news.map(article => <Article article={article} key={article.id} />)}
    </div>
  )
}

export default News
