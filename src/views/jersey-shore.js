import React from 'react'

import { Helmet } from 'react-helmet'

import './jersey-shore.css'

const JerseyShore = (props) => {
  return (
    <div className="jersey-shore-container">
      <Helmet>
        <title>Jersey-Shore - Beloved Enormous Boar</title>
        <meta
          property="og:title"
          content="Jersey-Shore - Beloved Enormous Boar"
        />
      </Helmet>
      <div className="jersey-shore-sidebar">
        <nav className="jersey-shore-nav">
          <svg viewBox="0 0 1024 1024" className="jersey-shore-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
          <span className="jersey-shore-text">SHOWS</span>
          <span className="jersey-shore-text1">CAST</span>
          <span className="jersey-shore-text2">Documents</span>
        </nav>
      </div>
    </div>
  )
}

export default JerseyShore
