import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features221.css'

const Features221 = (props) => {
  return (
    <div className="features221-layout349 thq-section-padding">
      <div className="features221-max-width thq-section-max-width">
        <div className="features221-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="features221-text19 thq-heading-2">
                  Default value
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="features221-text33 thq-body-small">
                  Default value
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features221-container1 thq-grid-auto-300">
          <div className="features221-card thq-card thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features221-image thq-img-ratio-1-1 thq-img-round"
            />
            <h2>
              {props.feature1Title ?? (
                <Fragment>
                  <h2 className="features221-text23 thq-heading-2">
                    Default value
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features221-text20 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features221-card1 thq-card thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features221-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <h2>
              {props.feature2Title ?? (
                <Fragment>
                  <h2 className="features221-text24 thq-heading-2">
                    Default value
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features221-text26 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features221-card2 thq-card thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features221-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <h1>
              {props.feature3Title ?? (
                <Fragment>
                  <h1 className="features221-text32 thq-heading-2">
                    Default value
                  </h1>
                </Fragment>
              )}
            </h1>
            <span>
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features221-text35 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features221-card3 thq-card thq-flex-column">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features221-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <h1>
              {props.feature4Title ?? (
                <Fragment>
                  <h1 className="features221-text34 thq-heading-2">
                    Default value
                  </h1>
                </Fragment>
              )}
            </h1>
            <span>
              {props.feature4Description ?? (
                <Fragment>
                  <span className="features221-text29 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features221-card4 thq-card thq-flex-column">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features221-image4 thq-img-ratio-1-1 thq-img-round"
            />
            <h1>
              {props.feature5Title ?? (
                <Fragment>
                  <h1 className="features221-text27 thq-heading-2">
                    Default value
                  </h1>
                </Fragment>
              )}
            </h1>
            <span>
              {props.feature5Description ?? (
                <Fragment>
                  <span className="features221-text28 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features221-card5 thq-card thq-flex-column">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features221-image5 thq-img-ratio-1-1 thq-img-round"
            />
            <h1>
              {props.feature6Title ?? (
                <Fragment>
                  <h1 className="features221-text21 thq-heading-2">
                    Default value
                  </h1>
                </Fragment>
              )}
            </h1>
            <span>
              {props.feature6Description ?? (
                <Fragment>
                  <span className="features221-text31 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features221-card6 thq-card thq-flex-column">
            <img
              alt={props.feature7ImageAlt}
              src={props.feature7ImageSrc}
              className="features221-image6 thq-img-ratio-1-1 thq-img-round"
            />
            <h1>
              {props.feature7Title ?? (
                <Fragment>
                  <h1 className="features221-text25 thq-heading-2">
                    Default value
                  </h1>
                </Fragment>
              )}
            </h1>
            <span>
              {props.feature7Description ?? (
                <Fragment>
                  <span className="features221-text30 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features221-card7 thq-card thq-flex-column">
            <img
              alt={props.feature8ImageAlt}
              src={props.feature8ImageSrc}
              className="features221-image7 thq-img-ratio-1-1 thq-img-round"
            />
            <h1>
              {props.feature8Title ?? (
                <Fragment>
                  <h1 className="features221-text18 thq-heading-2">
                    Default value
                  </h1>
                </Fragment>
              )}
            </h1>
            <span>
              {props.feature8Description ?? (
                <Fragment>
                  <span className="features221-text22 thq-body-small">
                    Default value
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features221.defaultProps = {
  feature2ImageAlt: 'Meditation Retreat',
  feature6ImageAlt: 'Transformative Power of Horses',
  feature8Title: undefined,
  heading1: undefined,
  feature1Description: undefined,
  feature6Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1473874564722-682056089b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjU5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1474947363373-576e7ef9eac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjU5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature8Description: undefined,
  feature1Title: undefined,
  feature1ImageAlt: 'Equine Therapy Session',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1672253290825-ea76ddc71e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjU5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature7Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1563669520161-f9291b6365cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjU5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5ImageAlt: 'Testimonials',
  feature7ImageAlt: 'Mindfulness Practices',
  feature2Description: undefined,
  feature5Title: undefined,
  feature5Description: undefined,
  feature4Description: undefined,
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1707928287106-2f65be7968d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjU5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature7Description: undefined,
  feature6Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1495001258031-d1b407bc1776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjU5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1648127543144-ff678dd07c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjU5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  feature7ImageSrc:
    'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjU5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: undefined,
  feature8ImageAlt: 'Inner Peace',
  feature3ImageAlt: 'Healing Workshop',
  feature4ImageAlt: 'Nature Walk',
  feature3Description: undefined,
}

Features221.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature8Title: PropTypes.element,
  heading1: PropTypes.element,
  feature1Description: PropTypes.element,
  feature6Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature8Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature7Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature5Title: PropTypes.element,
  feature5Description: PropTypes.element,
  feature4Description: PropTypes.element,
  feature5ImageSrc: PropTypes.string,
  feature7Description: PropTypes.element,
  feature6Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature6ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  feature7ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
  feature8ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
}

export default Features221
