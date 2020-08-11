import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './scrollIcon.module.css'

export const ScrollIcon = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true)

  useEffect(() => {
    const handleScrollBegin = () => {
      window.removeEventListener('scroll', handleScrollBegin)
      setShowScrollIcon(false)
    }

    window.addEventListener('scroll', handleScrollBegin)
    return () => window.removeEventListener('scroll', handleScrollBegin)
  }, [])

  if (showScrollIcon) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
          ease: 'easeOut',
          flip: Infinity,
        }}
      >
        <div className={styles.scrollIcon}></div>
      </motion.div>
    )
  } else {
    return null
  }
}
