import React from 'react'
import Link from 'gatsby-link'
import Icon from './../assets/icon.png'
import Scrollchor from 'react-scrollchor'

const Header = () => (
  <div>
    <ul className="NavBar">
    <Scrollchor to="#top">
      <img className="nav-name" src={Icon} alt="the best dev" />
      </Scrollchor>
      <li className="nav-item nav-last">
        <Scrollchor to="#contact" className="nav-link">
          CONTACT
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor to="#about" className="nav-link" animate={{ offset: -106 }}>
          ABOUT
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor
          to="#projects"
          className="nav-link"
          animate={{ offset: -64 }}
        >
          PROJECTS
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor to="#top" className="nav-link">
          HOME
        </Scrollchor>
      </li>
    </ul>
  </div>
)

export default Header
