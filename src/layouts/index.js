import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../assets/favicon.png'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="RossPrehn - Front End Engineer"
      meta={[
        { name: 'description', content: 'Ross Portfolio Site' },
        {
          name: 'keywords',
          content: 'porfolio, developer, engineer, software, code',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
