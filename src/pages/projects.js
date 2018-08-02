import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as FaIconPack from 'react-icons/lib/fa'
import Modal from 'react-responsive-modal'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import FSmind from '../assets/full-mindtime.png'
import FSroom from '../assets/full-roominate.png'
import FSlol from '../assets/full-lol.png'
import FSwear from '../assets/full-weredar.png'

import Lmind from '../assets/logo-mindtime.png'
import Lroom from '../assets/logo-roominate.png'
import Llol from '../assets/logo-lol.png'
import Lwear from '../assets/weredarLogo.png'

class Projects extends React.Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  }

  onOpenModal1 = () => {
    this.setState({ modal1: true })
  }

  onCloseModal1 = () => {
    this.setState({ modal1: false })
  }

  onOpenModal2 = () => {
    this.setState({ modal2: true })
  }

  onCloseModal2 = () => {
    this.setState({ modal2: false })
  }

  onOpenModal3 = () => {
    this.setState({ modal3: true })
  }

  onCloseModal3 = () => {
    this.setState({ modal3: false })
  }

  onOpenModal4 = () => {
    this.setState({ modal4: true })
  }

  onCloseModal4 = () => {
    this.setState({ modal4: false })
  }

  render() {
    const { modal1, modal2, modal3, modal4 } = this.state
    return (
      <div>
        <h2 className="heading">What I’ve Done</h2>
        <div className="Projects section flex-container">
          <div className="item">
            <img src={FSmind} className="thumb" onClick={this.onOpenModal1} />
            <div className="overlay">
              <img src={Lmind} rel="ClimaStatus" height={200} />
            </div>
            <Modal open={modal1} onClose={this.onCloseModal1} little>
              <div className="text">
                <h1>Mind Time</h1>
                <strong>A native meditation application</strong>
                <p>
                  Browse or answer questions to find the perfect meditation for
                  your needs and chat with other users in a native phone app.
                </p>
                <p>
                  <strong>Technologies: </strong>React Native, Expo, Socket.IO,
                  Knex.js, PostgreSQL, Heroku & CSS.
                </p>
                <ul>
                  <li>
                    <button className="button i-hov">
                      <OutboundLink
                        href="https://youtu.be/OQbGKI5RDhY"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo <FaIconPack.FaYoutube size={25} />
                      </OutboundLink>
                    </button>{' '}
                  </li>
                  <li>
                    <button className="button i-hov">
                      <OutboundLink
                        href="https://github.com/Rossprehn/mind-time"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code <FaIconPack.FaGithub size={15} />
                      </OutboundLink>
                    </button>{' '}
                  </li>
                </ul>
              </div>
            </Modal>
          </div>

          <div className="item">
            <img src={FSroom} className="thumb" onClick={this.onOpenModal2} />
            <div className="overlay">
              <img src={Lroom} rel="ClimaStatus" height={200} />
            </div>
            <Modal open={modal2} onClose={this.onCloseModal2} little>
              <div className="text">
                <h1>ROOMIATE</h1>
                <strong>Question game for friends</strong>
                <p>
                  Collaborative group game that provides the user with an
                  intriguing hypothetical situation to be debated by the group.
                </p>
                <p>
                  <strong>Technologies: </strong>React, HMTL5, CSS3, JavaScript,
                  Node,.js, PostgreSQL, Knex.js, Express.js, Heroku, Cypress,
                  Anime.js
                </p>
                <ul>
                  <li>
                    <button className="button i-hov">
                      <OutboundLink
                        href="https://roominate-af37c.firebaseapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo App <FaIconPack.FaExternalLink size={15} />
                      </OutboundLink>
                    </button>{' '}
                    <button className="button i-hov">
                      <OutboundLink
                        href="https://github.com/chasfricke/wwyd-FE/blob/master/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code <FaIconPack.FaGithub size={15} />
                      </OutboundLink>
                    </button>
                  </li>
                </ul>
              </div>
            </Modal>
          </div>

          <div className="item">
            <img src={FSlol} className="thumb" onClick={this.onOpenModal3} />
            <div className="overlay">
              <img src={Llol} rel="Smart-Trak" height={200} />
            </div>
            <Modal open={modal3} onClose={this.onCloseModal3} little>
              <div className="text">
                <h1>League of Legends planner</h1>
                <strong>
                  Used to help friends organize times to play together
                </strong>
                <p>
                  <strong>Technologies: </strong>AntD. React. Express + Node.
                  Knex. PostgreSQL.
                </p>
                <ul>
                  <li>
                    <button className="button i-hov">
                      <OutboundLink
                        href="oops"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo App <FaIconPack.FaExternalLink size={15} />
                      </OutboundLink>
                    </button>{' '}
                    <button className="button i-hov">
                      <OutboundLink
                        href="oops"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code <FaIconPack.FaGithub size={15} />
                      </OutboundLink>
                    </button>
                  </li>
                </ul>
              </div>
            </Modal>
          </div>

          <div className="item">
            <img src={FSwear} className="thumb" onClick={this.onOpenModal4} />
            <div className="overlay">
              <img src={Lwear} rel="MapIt App" height={200} />
            </div>
            <Modal open={modal4} onClose={this.onCloseModal4} little>
              <div className="text">
                <h1>MapIt</h1>
                <strong>
                  Report werewolf sightings and map reports. Created in one-day
                  hackathon group project.{' '}
                </strong>
                <p>
                  <strong>Technologies: </strong>JavaScript, Leaflet, US Navy
                  Lunar API, HTML, CSS
                </p>
                <ul>
                  <li>
                    <button className="button i-hov">
                      <OutboundLink
                        href="https://weredar-1.firebaseapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo App <FaIconPack.FaExternalLink size={15} />
                      </OutboundLink>
                    </button>{' '}
                    <button className="button i-hov">
                      <OutboundLink
                        href="https://github.com/TheMoonMoth/WEREDAR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code <FaIconPack.FaGithub size={15} />
                      </OutboundLink>
                    </button>
                  </li>
                </ul>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
