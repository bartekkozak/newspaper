import { Article } from '../../Utils/interfaces/interfaces'

export interface NewsState {
  news: Article[]
  fashionLoading: boolean
  fashionError: boolean
  sportsLoading: boolean
  sportsError: boolean
  filters: string[]
}
