import React from 'react'
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'
import styles from './icons.module.css'

export const GithubIcon = () => (
  <a
    href="https://github.com/zoltangy"
    title="GitHub"
    target="_blank"
    rel="noreferrer"
    className={styles.iconLink}
  >
    <FaGithub />
  </a>
)

export const LinkedinIcon = () => (
  <a
    href="https://www.linkedin.com/in/zoltangy"
    title="LinkedIn"
    target="_blank"
    rel="noreferrer"
    className={styles.iconLink}
  >
    <FaLinkedinIn />
  </a>
)

export const ContactIcon = () => (
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
)

export const ScrollIcon = () => <div className={styles.scrollIcon}></div>
