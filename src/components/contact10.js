import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text06 thq-heading-2">
                    Get in Touch
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text11 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text08 thq-heading-3">
                    Blissful Existence Healing Acres
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text10 thq-body-large">
                    123 Serenity Way, Pocono Mountains, PA 12345
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text09 thq-heading-3">
                    Contact Form
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text07 thq-body-large">
                    Fill out the form below to send us a message.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2ImageSrc:
    'https://images.unsplash.com/photo-1719238495049-e537aad63346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  location2Description: undefined,
  location1: undefined,
  location2: undefined,
  location1Description: undefined,
  content1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1695686017932-a80a95cb7f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageAlt: 'Blissful Existence Healing Acres Location',
  location2ImageAlt: 'Contact Form Image',
}

Contact10.propTypes = {
  location2ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1: PropTypes.element,
  location2: PropTypes.element,
  location1Description: PropTypes.element,
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
