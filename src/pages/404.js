import React from 'react'
import { Link } from 'gatsby'
import styles from './404.module.css'

const Thanks = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>404 - This page does not exist</h1>
      <Link className="link" to="/">
        Go back to the website
      </Link>
    </div>
  )
}

export default Thanks
