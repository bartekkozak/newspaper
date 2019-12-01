import axios, { AxiosPromise } from 'axios'

export const getFashionNews = (): AxiosPromise => axios.get('http://localhost:6010/articles/fashion')

export const getSportsNews = (): AxiosPromise => axios.get('http://localhost:6010/articles/sports')
