import React from 'react'
import { ErrorMessageProps } from './types'
import styles from './ErrorMessage.module.css'

const ErrorMessage: React.FC<ErrorMessageProps> = ({ category, onClick, loading }) => {
  return (
    <div className={styles.container} data-testid="errorMessage">
      <p className={styles.message}>Couldn't get {category} news from server</p>
      {loading ? <span>Loading...</span> : <button onClick={onClick}>Try again</button>}
    </div>
  )
}

export default ErrorMessage
