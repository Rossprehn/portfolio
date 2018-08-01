import React from 'react'
import Link from 'gatsby-link'
import * as FaIconPack from 'react-icons/lib/fa'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
}
const view = 'list' // or 'coverart'
const theme = 'black' // or 'white'

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer" href="#CONTACT">
        <div className="footer-2">
          <h2 className="heading">How to Reach Me</h2>
          <p>
            <OutboundLink
              href="mailto:johnross.prehn@gmail.com?Subject=Hello%20there!"
              target="_top"
            >
              <FaIconPack.FaPaperPlane
                size={20}
                className="fas i-hov"
                aria-hidden="true"
              />{' '}
              johnross.prehn@gmail.com
            </OutboundLink>
          </p>
          <p>
            <OutboundLink
              href="https://www.linkedin.com/in/rossprehn/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaIconPack.FaLinkedinSquare
                size={20}
                className="fas i-hov"
                aria-hidden="true"
              />{' '}
              Linkedin
            </OutboundLink>
          </p>
          <p>
            <OutboundLink
              href="https://github.com/rossprehn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIconPack.FaGithubSquare
                size={20}
                className="fas i-hov"
                aria-hidden="true"
              />{' '}
              Github
            </OutboundLink>
          </p>
        </div>
        <div className="footer-full">
          <p>
            ©2018. <strong>Ross Prehn</strong> using{' '}
            <strong>
              <OutboundLink href="https://github.com/AustinGreen/gatsby-starter-netlify-cms">
                React + Gatsby + Netlify
              </OutboundLink>
            </strong>, JSX, CSS, and other cool tools.
          </p>
          <p>
            Check out the repo on{' '}
            <strong>
              <OutboundLink
                href="https://github.com/rossprehn"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </OutboundLink>
            </strong>.{' '}
          </p>
        </div>
      </div>
    )
  }
}
export default Footer
