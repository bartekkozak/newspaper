export const NewsInitialState = {
  news: [],
}

const newsReducer = (state: any = NewsInitialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export const selectAllNews = (state: any) => state.news.news

export default newsReducer
