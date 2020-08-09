import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Div100vh from 'react-div-100vh'
//--
import styles from './index.module.css'
import { Logo } from '../components/logo'
import { Divider } from '../components/divider'
import { Contact, HiddenContactForm } from '../components/contact'
import { Portfolio } from '../components/portfolio'

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 4900)
  }, [])

  return (
    <>
      <HiddenContactForm />
      <motion.div
        style={{ zIndex: 1000 }}
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
          maxWidth: '180px',
          minWidth: '100px',
          position: 'absolute',
          top: '2%',
          left: '3%',
          transform: 'translate(0%, 0%)',
        }}
        transition={{
          delay: 4.0,
          duration: 0.7,
          ease: 'backIn',
        }}
      >
        <Logo />
      </motion.div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 1.0 },
            }}
          >
            <div className={styles.center}>
              <Div100vh className={styles.headerDiv}>
                <div className={styles.icons}>
                  <a
                    href="https://github.com/zoltangy"
                    title="GitHub"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconLink}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zoltangy"
                    title="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconLink}
                  >
                    <FaLinkedinIn />
                  </a>
                  <Link
                    className={styles.iconLink}
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    title="Contact"
                  >
                    <FaRegEnvelope />
                  </Link>
                </div>
                <h1 className={styles.title}>
                  Creating intuitively usable,
                  <br /> aesthetically pleasing things
                  <br /> for web and mobile.
                </h1>
              </Div100vh>
              <Divider />
              <h1 className={styles.sectionHeader}>Sample work</h1>
              <Portfolio />
              <Divider />
              <Contact />
              <div>
                <a
                  href="https://github.com/zoltangy"
                  title="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconLink}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/zoltangy"
                  title="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconLink}
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
