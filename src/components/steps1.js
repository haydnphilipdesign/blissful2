import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps1.css'

const Steps1 = (props) => {
  return (
    <div className="steps1-container thq-section-padding">
      <div className="steps1-max-width thq-section-max-width">
        <div className="steps1-container1">
          <div className="steps1-container2 thq-card">
            <img
              alt={props.step1ImageAlt}
              src={props.step1ImageSrc}
              className="steps1-image thq-img-ratio-1-1"
            />
            <h2>
              {props.step1Title ?? (
                <Fragment>
                  <h2 className="steps1-text14 thq-heading-2">Default value</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.step1Description ?? (
                <Fragment>
                  <span className="steps1-text17 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text02 thq-heading-3">01</label>
          </div>
          <div className="steps1-container3 thq-card">
            <img
              alt={props.step2Alt}
              src={props.step2ImageSrc}
              className="steps1-image1 thq-img-ratio-1-1"
            />
            <h2>
              {props.step2Title ?? (
                <Fragment>
                  <h2 className="steps1-text12 thq-heading-2">Default value</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.step2Description ?? (
                <Fragment>
                  <span className="steps1-text19 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text05 thq-heading-3">02</label>
          </div>
        </div>
        <div className="steps1-container4">
          <div className="steps1-container5 thq-card">
            <img
              alt={props.step3ImageAlt}
              src={props.step3ImageSrc}
              className="steps1-image2 thq-img-ratio-1-1"
            />
            <h2>
              {props.step3Title ?? (
                <Fragment>
                  <h2 className="steps1-text15 thq-heading-2">Default value</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.step3Description ?? (
                <Fragment>
                  <span className="steps1-text13 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text08 thq-heading-3">03</label>
          </div>
          <div className="steps1-container6 thq-card">
            <img
              alt={props.step4ImageAlt}
              src={props.step4ImageSrc}
              className="steps1-image3 thq-img-ratio-1-1"
            />
            <h2>
              {props.step4Title ?? (
                <Fragment>
                  <h2 className="steps1-text18 thq-heading-2">Default value</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.step4Description ?? (
                <Fragment>
                  <span className="steps1-text16 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text11 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps1.defaultProps = {
  step2Alt: 'Meditation retreat in the serene Pocono Mountains',
  step2Title: undefined,
  step4ImageSrc:
    'https://images.unsplash.com/photo-1707928287086-61963540d5c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzIwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  step3Description: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step1ImageSrc:
    'https://images.unsplash.com/photo-1713188828957-234fda56271b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzIwM3w&ixlib=rb-4.0.3&q=80&w=1080',
  step4Description: undefined,
  step1ImageAlt: 'Equine therapy session in progress',
  step2ImageSrc:
    'https://images.unsplash.com/photo-1654723011680-0e037c2a4f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzIwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  step3ImageAlt: 'Personalized treatment plan being discussed with a client',
  step4ImageAlt: 'Client testimonial about their positive experience',
  step1Description: undefined,
  step4Title: undefined,
  step2Description: undefined,
  step3ImageSrc:
    'https://images.unsplash.com/photo-1617080090911-91409e3496ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzIwMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Steps1.propTypes = {
  step2Alt: PropTypes.string,
  step2Title: PropTypes.element,
  step4ImageSrc: PropTypes.string,
  step3Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step1ImageSrc: PropTypes.string,
  step4Description: PropTypes.element,
  step1ImageAlt: PropTypes.string,
  step2ImageSrc: PropTypes.string,
  step3ImageAlt: PropTypes.string,
  step4ImageAlt: PropTypes.string,
  step1Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2Description: PropTypes.element,
  step3ImageSrc: PropTypes.string,
}

export default Steps1
