import React from 'react'
import { Link } from 'gatsby'
import styles from './thanks.module.css'

const Thanks = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Thank you, your message has been sent!</h1>
      <Link className={styles.link} to="/">
        Back to the website
      </Link>
    </div>
  )
}

export default Thanks
