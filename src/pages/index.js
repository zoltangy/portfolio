import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Div100vh from 'react-div-100vh'
//--
import styles from './index.module.css'
import { Logo } from '../components/logo'
import { Divider } from '../components/divider'
import { Contact, HiddenContactForm } from '../components/contact'
import { Portfolio } from '../components/portfolio'
import { GithubIcon, LinkedinIcon, ContactIcon } from '../components/icons'
import { ScrollIcon } from '../components/scrollIcon'
import { Head } from '../components/head'

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 4900)
  }, [])

  return (
    <>
      <Head />
      <HiddenContactForm />
      <Logo />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
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
                <div className={styles.scrollIconDiv}>
                  <ScrollIcon />
                </div>
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
