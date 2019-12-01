import React from 'react'
import styles from './Article.module.css'
import { formatDate } from '../../Utils/helpers/helpers'
import { ArticleProps } from './types'

const Article: React.FC<ArticleProps> = ({ article: { image, title, date } }) => {
  return (
    <article className={styles.container} data-testid="article">
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.article}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.date}>{formatDate(date)}</span>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ipsam in molestiae numquam quaerat, aperiam
          aspernatur soluta optio, rem voluptate recusandae? Quibusdam facilis quos, illo tenetur eaque possimus dolores
          ad?
        </p>
      </div>
    </article>
  )
}

export default Article
