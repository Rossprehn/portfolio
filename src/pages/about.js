import React, { Component } from 'react'
import ross from '../assets/Ross.png'
import * as FaIconPack from 'react-icons/lib/fa'
import resume from '../assets/resume.pdf'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
class About extends Component {
  render() {
    return (
      <div className="About section">
        <div className="about-content">
          <h1 className="about-intro">
            Im about <strong>tech + teamwork + making things</strong>.
          </h1>
          <p className="about-item">
            <strong>I love to work with great people. </strong>
            Full-stack web developer passionate about writing clean, functional
            code focused on solving human problems while maintaining an eye for
            detail and design. Enjoys working with teammates toward a common
            goal.
          </p>
          <p className="about-item">
            When I’m not coding, I’m probably either biking, mixing drinks for
            friends, playing with my cats or playing board games.
          </p>
        </div>
        <div className="about-content">
          <img src={ross} className="profile" />
          <OutboundLink href={resume} target="_blank" rel="noopener noreferrer">
            <button className="button i-hov">
              <FaIconPack.FaFilePdfO size={30} aria-hidden="true" /> Resume
            </button>
          </OutboundLink>
        </div>
      </div>
    )
  }
}
export default About
