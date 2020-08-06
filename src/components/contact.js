import React from 'react'
import { navigate } from 'gatsby-link'
import styles from './contact.module.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const Contact = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <div style={{ width: 400 }}>
      <h1>
        Need something done? Want to talk about a project? <br />
        Get in touch!
      </h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p className={styles.field}>
          <label>
            Your name:
            <br />
            <input
              className={styles.inputs}
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </label>
        </p>
        <p className={styles.field}>
          <label>
            Your email:
            <br />
            <input
              className={styles.inputs}
              type="email"
              name="email"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </label>
        </p>
        <p className={styles.field}>
          <label>
            Message:
            <br />
            <textarea
              className={`${styles.inputs} ${styles.textarea}`}
              name="message"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </label>
        </p>
        <p>
          <button className={styles.button} type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  )
}
