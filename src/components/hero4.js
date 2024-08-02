import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero4.css'

const Hero4 = (props) => {
  return (
    <div className="hero4-header13">
      <video
        src={props.video1Src}
        loop="true"
        muted="true"
        poster={props.video1Poster}
        autoPlay="true"
        className="hero4-video"
      ></video>
      <div className="hero4-content thq-section-padding">
        <div className="hero4-max-width thq-section-max-width thq-flex-row">
          <div className="hero4-column">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero4-text6 thq-heading-1">Default value</h1>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="hero4-column1">
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero4-text7 thq-body-large">Default value</p>
                </Fragment>
              )}
            </p>
            <div className="hero4-actions">
              <button className="thq-button-filled hero4-button">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero4-text4 thq-body-small">
                        Default value
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero4-button1">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero4-text5 thq-body-small">
                        Default value
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero4.defaultProps = {
  video1Src:
    'https://videos.pexels.com/video-files/5174040/5174040-hd_1920_1080_30fps.mp4',
  action1: undefined,
  action2: undefined,
  heading1: undefined,
  content1: undefined,
  video1Poster:
    'https://images.pexels.com/videos/5174040/pictures/preview-0.jpg',
}

Hero4.propTypes = {
  video1Src: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  video1Poster: PropTypes.string,
}

export default Hero4
