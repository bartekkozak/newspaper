import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styles from './FilterBar.module.css'
import { selectFilters } from '../Store/Reducers/newsReducer'
import { setFilters } from '../Store/Actions/newsActions'

const FilterBar: React.FC = () => {
  const categories: string[] = ['fashion', 'sport']
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)

  return (
    <div className={styles.container} data-testid="filterBar">
      <span className={styles.text}>Data sources</span>
      {categories.map((category: string) => (
        <label className={styles.label} key={category}>
          <input type="checkbox" checked={filters.includes(category)} onChange={() => dispatch(setFilters(category))} />
          {category}
        </label>
      ))}
    </div>
  )
}

export default FilterBar
