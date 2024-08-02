import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features12.css'

const Features12 = (props) => {
  return (
    <div className="features12-layout349 thq-section-padding">
      <div className="features12-max-width thq-section-max-width">
        <video
          src={props.featureVideoSrc}
          loop="true"
          muted="true"
          poster={props.featureVideoPoster}
          autoPlay="true"
          className="features12-video thq-img-ratio-16-9"
        ></video>
        <div className="features12-section-title">
          <span>
            {props.featureSlogan ?? (
              <Fragment>
                <span className="features12-text3 thq-body-small">
                  Heal your mind, body, and soul in nature&apos;s embrace.
                </span>
              </Fragment>
            )}
          </span>
          <div className="thq-flex-column">
            <h2>
              {props.featureTitle ?? (
                <Fragment>
                  <h2 className="features12-text7 thq-heading-2">
                    Experience Equine Therapy and Meditation Retreats
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.featureDescription ?? (
                <Fragment>
                  <p className="features12-text4 thq-body-large">
                    Discover the transformative power of equine therapy and
                    meditation retreats in the serene Pocono Mountains.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features12-actions thq-flex-row">
            <button className="thq-button-filled features12-button">
              <span>
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features12-text6 thq-body-small">
                      Book your personalized healing retreat today!
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features12-button1">
              <span>
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features12-text5 thq-body-small">
                      Read more about our equine therapy and meditation retreat
                      experiences.
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Features12.defaultProps = {
  featureSlogan: undefined,
  featureDescription: undefined,
  featureVideoPoster:
    'https://images.pexels.com/videos/8025689/pictures/preview-0.jpeg',
  secondaryAction: undefined,
  mainAction: undefined,
  featureVideoSrc:
    'https://videos.pexels.com/video-files/8025689/8025689-hd_1080_1920_24fps.mp4',
  featureTitle: undefined,
}

Features12.propTypes = {
  featureSlogan: PropTypes.element,
  featureDescription: PropTypes.element,
  featureVideoPoster: PropTypes.string,
  secondaryAction: PropTypes.element,
  mainAction: PropTypes.element,
  featureVideoSrc: PropTypes.string,
  featureTitle: PropTypes.element,
}

export default Features12
