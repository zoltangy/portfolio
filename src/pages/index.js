import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './index.module.css'
import { Logo } from '../components/logo'
import { Divider } from '../components/divider'
import { Contact } from '../components/contact'
import { Portfolio } from '../components/portfolio'

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 6000)
  }, [])

  return (
    <>
      <motion.div
        initial={{
          width: '80%',
          maxWidth: '500px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          width: '15%',
          maxWidth: '200px',
          minWidth: '100px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          transform: 'translate(0%, 0%)',
        }}
        transition={{
          delay: 4.0,
          duration: 1.5,
          ease: 'backIn',
        }}
      >
        <Logo />
      </motion.div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              x: { type: 'spring', stiffness: 75 },
              opacity: { duration: 1 },
            }}
          >
            <div className={styles.center}>
              <div style={{ height: 600 }}></div>
              <Divider />
              <h1>Sample work</h1>
              <Portfolio />
              <Divider />
              <Contact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
