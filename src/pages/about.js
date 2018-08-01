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
            <strong>Collaboration + Creation + Connection</strong>
          </h1>
          <p className="about-item">
            I’m a full-stack web developer who is passionate about writing
            clean, functional code that provides elegant solutions to common
            problems. I maintain a close focus on detail and design in
            everything I create, and I love to work with great people toward a
            common goal.
          </p>
          <p className="about-item">
            When I’m not coding, I’m likely biking, mixing drinks for friends,
            entertaining my cats or playing board games.
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
