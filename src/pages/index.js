import React from 'react'
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor'
import Projects from './projects.js'
import Footer from './footer.js'
import About from './about.js'
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
    <h2 className="projectheading" id="projects">
      What I’ve Done
    </h2>
    <Projects />
    <h2 className="heading" id="about">
      Who I Am
    </h2>
    <About />
    <div id="contact" />
    <Footer />
  </div>
)
export default IndexPage
