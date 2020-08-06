import React from 'react'
import styles from './portfolioItem.module.css'

export const PortfolioItem = ({ image, description, code }) => {
  return (
    <div className={styles.item}>
      <div className={styles.imageDiv}>
        <img src={image.src} alt={image.alt} className={styles.image} />
      </div>
      <Description text={description.text} link={description.link} />
      <VDivider />
      <Tech text={code.text} link={code.link} />
    </div>
  )
}

const Description = ({ text, link }) => (
  <div className={styles.textDiv}>
    <div className={styles.textDivText}>{text}</div>
    {link.match(/^http/) ? (
      <a className={styles.textDivLink} href={link}>
        View
      </a>
    ) : (
      link
    )}
  </div>
)

const Tech = ({ text, link }) => (
  <div className={styles.textDiv}>
    <div className={styles.textDivText}>{text}</div>
    {link.match(/^http/) ? (
      <a className={styles.textDivLink} href={link}>
        Code
      </a>
    ) : (
      link
    )}
  </div>
)

const VDivider = ({ text = '</>' }) => (
  <div className={styles.divider}>
    <div className={styles.dividerLine}></div>
    <div className={styles.dividerText}>{text}</div>
    <div className={styles.dividerLine}></div>
  </div>
)
