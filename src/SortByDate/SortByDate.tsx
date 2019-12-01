import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './SortByDate.module.css'
import { sortNewsAscending, sortNewsDescending } from '../Store/Actions/newsActions'

const SortByDate = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.container} data-testid="sortByDate">
      <span className={styles.text}>Sort by date</span>
      <div className={styles.arrowContainer}>
        <span className={styles.arrow} onClick={() => dispatch(sortNewsAscending())}>
          &#x25B2;
        </span>
        <span className={styles.arrow} onClick={() => dispatch(sortNewsDescending())}>
          &#x25BC;
        </span>
      </div>
    </div>
  )
}

export default SortByDate
