import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllNews } from '../Store/Reducers/newsReducer'

const News = () => {
  const news = useSelector(selectAllNews)

  return <div data-testid="news"></div>
}

export default News
