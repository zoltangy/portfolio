import React from 'react'
import styles from './portfolioItem.module.css'

export const PortfolioItem = ({ image, description, code }) => {
  return (
    <div className={styles.item}>
      <div className={styles.imageDiv}>
        <img src={image.src} alt={image.alt} className={styles.image} />
      </div>
      <div className={styles.textDiv}>
        <Description text={description.text} link={description.link} />
        <VDivider />
        <Tech text={code.text} link={code.link} />
      </div>
    </div>
  )
}

const Description = ({ text, link }) => (
  <div className={styles.sectionDiv}>
    <div className={styles.textDivText}>{text}</div>
    {link.match(/^http/) ? (
      <a
        className={`${styles.textDivLink} link`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        View
      </a>
    ) : (
      link
    )}
  </div>
)

const Tech = ({ text, link }) => (
  <div className={styles.sectionDiv}>
    <div className={styles.textDivText}>{text}</div>
    {link.match(/^http/) ? (
      <a
        className={`${styles.textDivLink} link`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
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
