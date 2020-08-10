import React from 'react'
import { Helmet } from 'react-helmet'

export const Head = () => (
  <Helmet>
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Zoltan's portfolio</title>
    <meta name="author" content="Zoltan Gyarmati" />
    <meta name="description" content="Portfolio page" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  </Helmet>
)
