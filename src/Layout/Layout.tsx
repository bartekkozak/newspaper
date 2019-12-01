import React from 'react'
import FilterBar from '../FilterBar/FilterBar'
import News from '../News/News'
import SortByDate from '../SortByDate/SortByDate'

import styles from './Layout.module.css'

const Layout: React.FC = () => (
  <div className={styles.container} data-testid="layout">
    <SortByDate />
    <FilterBar />
    <News />
  </div>
)

export default Layout
