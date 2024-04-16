import React from 'react'

import { Helmet } from 'react-helmet'

import './keeping-up-with-the-kardashian.css'

const KeepingUpWithTheKardashian = (props) => {
  return (
    <div className="keeping-up-with-the-kardashian-container">
      <Helmet>
        <title>Keeping-up-with-the-Kardashian - Beloved Enormous Boar</title>
        <meta
          property="og:title"
          content="Keeping-up-with-the-Kardashian - Beloved Enormous Boar"
        />
      </Helmet>
      <div className="keeping-up-with-the-kardashian-sidebar">
        <nav className="keeping-up-with-the-kardashian-nav">
          <svg
            viewBox="0 0 1024 1024"
            className="keeping-up-with-the-kardashian-icon"
          >
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
          <span className="keeping-up-with-the-kardashian-text">SHOWS</span>
          <span className="keeping-up-with-the-kardashian-text1">CAST</span>
          <span className="keeping-up-with-the-kardashian-text2">
            Documents
          </span>
        </nav>
      </div>
    </div>
  )
}

export default KeepingUpWithTheKardashian
