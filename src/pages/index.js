import React from 'react'
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor'
import Projects from './Projects.js'
import Footer from './Footer.js'
import About from './About.js'
import * as FaIconPack from 'react-icons/lib/fa'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const IndexPage = () => (
  <div className="App">
    <section id="top" className="wrapper">
      <div className="Welcome section">
        <div className="welcome-intro">
          <h1 className="about-intro">
            <strong>Ross Prehn</strong>
          </h1>
          <div>
            <h1>Full Stack Developer</h1>
            <h3 className="welcome-intro">
              Im also an advid board game player, biker, & mixologist
            </h3>
            <OutboundLink
              href="https://linkedin.com/in/rossprehn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIconPack.FaLinkedinSquare
                size={30}
                className="fas i-hov"
                aria-hidden="true"
              />
            </OutboundLink>{' '}
            <OutboundLink
              href="https://github.com/rossprehn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIconPack.FaGithubSquare
                size={30}
                className="fas i-hov"
                aria-hidden="true"
              />
            </OutboundLink>{' '}
            <OutboundLink
              href="mailto:johnross.prehn@gmail.com?Subject=Hello%20there!"
              target="_top"
            >
              <FaIconPack.FaPaperPlane
                size={30}
                className="fas i-hov"
                aria-hidden="true"
              />
            </OutboundLink>{' '}
          </div>
          <Scrollchor to="#contact">
            <button className="button">Get in touch!</button>
          </Scrollchor>
        </div>
      </div>
    </section>
    <h2 className="heading" id="projects">
      PROJECTS
    </h2>
    <Projects />
    <h2 className="heading" id="about">
      ABOUT
    </h2>
    <About />
    <h2 className="heading" id="contact">
      GET CONNECTED!
    </h2>
    <Footer />
  </div>
)
export default IndexPage
