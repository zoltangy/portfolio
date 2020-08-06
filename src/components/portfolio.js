import React from 'react'
import { PortfolioItem } from './portfolioItem'
import pomo from '../images/pomo.png'
import mock from '../images/mock.png'
import pwaInstall from '../images/pwa_install.png'
import foodstash from '../images/foodstash.png'
import portfolio from '../images/portfolio.png'
import calculator from '../images/calculator.png'

const data = [
  {
    image: {
      src: mock,
      alt: 'dietitian app',
    },
    description: {
      text:
        'Full stack solution for a digital dietitian app with personalized meal plans.',
      link: 'In development',
    },
    code: {
      text:
        'TypeScript, React Native, Redux, Apollo \n-\nTypeScript, Express, GraphQL, MongoDB',
      link: '',
    },
  },
  {
    image: {
      src: pomo,
      alt: 'pomodoro timer',
    },
    description: {
      text:
        'Customizable pomodoro timer with progress indicators. Installable PWA.',
      link: 'https://zoltangy.github.io/pomo-timer/',
    },
    code: {
      text: 'CRA, TypeScript, React, Redux, Material-UI',
      link: 'https://github.com/zoltangy/pomo-timer',
    },
  },
  {
    image: {
      src: foodstash,
      alt: 'foodstash app',
    },
    description: {
      text:
        'An installable PWA to help you keep track of what food you have stored where and when they expire.',
      link: 'https://foodstash-e4417.web.app/',
    },
    code: {
      text:
        'CRA, React, Redux, React Router, Firebase, Firestore, Material-UI, Formik',
      link: 'https://github.com/zoltangy/foodstash',
    },
  },
  {
    image: {
      src: pwaInstall,
      alt: 'PWA installer package',
    },
    description: {
      text: 'An npm package to aid the install process for React PWAs.',
      link: 'https://www.npmjs.com/package/react-pwa-install',
    },
    code: {
      text: 'NWB, React,\n Material-UI',
      link: 'https://github.com/zoltangy/react-pwa-install',
    },
  },
  {
    image: {
      src: portfolio,
      alt: 'portfolio website',
    },
    description: {
      text: 'This very website you are viewing!',
      link: 'https://zoltangy.netlify.app',
    },
    code: {
      text: 'Gatsby, React,\n Framer motion',
      link: 'https://github.com/zoltangy/portfolio',
    },
  },
  {
    image: {
      src: calculator,
      alt: 'calculator',
    },
    description: {
      text:
        'A rebound on a classic calculator. Formula and single-step mode. Light and dark themes.',
      link: 'https://zoltangy.github.io/web-calculator/',
    },
    code: {
      text: 'CRA, JavaScript, React, Styled components',
      link: 'https://github.com/zoltangy/web-calculator',
    },
  },
]

export const Portfolio = () => {
  return data.map(item => (
    <PortfolioItem
      key={item.description.text}
      image={item.image}
      description={item.description}
      code={item.code}
    />
  ))
}
