import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'
//--
import styles from './index.module.css'
import { Logo } from '../components/logo'
import { Divider } from '../components/divider'
import { Contact } from '../components/contact'
import { Portfolio } from '../components/portfolio'

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 5000)
  }, [])

  return (
    <>
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
          maxWidth: '200px',
          minWidth: '100px',
          position: 'absolute',
          top: '2%',
          left: '3%',
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
            initial={{ opacity: 0 /*, x: '100vw' */ }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              /*x: { type: 'spring', stiffness: 75 },*/
              opacity: { delay: 1, duration: 1.5 },
            }}
          >
            <div className={styles.center}>
              <div className={styles.headerDiv}>
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
                  Creating intuitively usable, aesthetically pleasing things for
                  the web
                </h1>
              </div>
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
