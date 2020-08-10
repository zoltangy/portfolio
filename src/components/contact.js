import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { navigate } from 'gatsby-link'
import styles from './contact.module.css'
import { FaPaperPlane } from 'react-icons/fa'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const Contact = () => {
  return (
    <div className={styles.wrapper} id="Contact">
      <h1 style={{ textAlign: 'center' }}>
        Need help with a project? <br />
        Get in touch!
      </h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': 'contact',
              name: values.name,
              email: values.email,
              message: values.message,
            }),
          })
            .then(() => navigate('/thanks/'))
            .catch(error => alert(error))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            name="contact"
            method="post"
            action="/thanks/"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <p className={styles.field}>
              <label htmlFor="name">
                Your name
                <br />
                <input
                  className={styles.inputs}
                  type="text"
                  name="name"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  id="name"
                />
              </label>
              <span className={styles.error}>
                {errors.name && touched.name && errors.name}
              </span>
            </p>

            <p className={styles.field}>
              <label htmlFor="email">
                Your email
                <br />
                <input
                  className={styles.inputs}
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                />
              </label>
              <span className={styles.error}>
                {errors.email && touched.email && errors.email}
              </span>
            </p>
            <p className={styles.field}>
              <label htmlFor="message">
                Message
                <br />
                <textarea
                  className={`${styles.inputs} ${styles.textarea}`}
                  name="message"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  id="message"
                />
              </label>
              <span className={styles.error}>
                {errors.message && touched.message && errors.message}
              </span>
            </p>
            <p>
              <button className={styles.button} type="submit">
                Send&nbsp;&nbsp;
                <FaPaperPlane />
              </button>
            </p>
          </form>
        )}
      </Formik>
    </div>
  )
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  name: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
})

export const HiddenContactForm = () => (
  <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message" />
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
  </form>
)
