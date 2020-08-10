import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Div100vh from 'react-div-100vh'
//--
import styles from './index.module.css'
import { Logo } from '../components/logo'
import { Divider } from '../components/divider'
import { Contact, HiddenContactForm } from '../components/contact'
import { Portfolio } from '../components/portfolio'
import {
  GithubIcon,
  LinkedinIcon,
  ContactIcon,
  ScrollIcon,
} from '../components/icons'
import { Head } from '../components/head'

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [showScrollIcon, setShowScrollIcon] = useState(true)

  useEffect(() => {
    setTimeout(() => setVisible(true), 4900)
  }, [])

  useEffect(() => {
    const handleScrollBegin = () => {
      window.removeEventListener('scroll', handleScrollBegin)
      setShowScrollIcon(false)
    }

    window.addEventListener('scroll', handleScrollBegin)
    return () => window.removeEventListener('scroll', handleScrollBegin)
  }, [])

  return (
    <>
      <Head />
      <HiddenContactForm />
      <motion.div
        style={{ zIndex: 1000, position: 'absolute' }}
        initial={{
          width: '80%',
          maxWidth: '500px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          width: '15%',
          maxWidth: '180px',
          minWidth: '100px',
          top: '2%',
          left: '3%',
          transform: 'translate(0%, 0%)',
        }}
        transition={{
          delay: 4.0,
          duration: 0.8,
          ease: 'backIn',
        }}
      >
        <Logo />
      </motion.div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: { duration: 1.5 },
            }}
          >
            <div className={styles.center}>
              <Div100vh className={styles.headerDiv}>
                <div className={styles.icons}>
                  <GithubIcon />
                  <LinkedinIcon />
                  <ContactIcon />
                </div>
                <h1 className={styles.title}>
                  Creating intuitively usable,
                  <br /> aesthetically pleasing things
                  <br /> for web and mobile.
                </h1>
                {showScrollIcon && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '30px',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 2,
                      duration: 1,
                      ease: 'easeOut',
                      flip: Infinity,
                    }}
                  >
                    <ScrollIcon />
                  </motion.div>
                )}
              </Div100vh>
              <Divider />
              <h1 className={styles.sectionHeader}>Sample work</h1>
              <Portfolio />
              <Divider />
              <Contact />
              <div>
                <GithubIcon />
                <LinkedinIcon />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
