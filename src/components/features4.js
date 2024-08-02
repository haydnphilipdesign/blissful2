import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features4.css'

const Features4 = (props) => {
  return (
    <div className="features4-layout301 thq-section-padding">
      <div className="features4-max-width thq-section-max-width">
        <h2>
          {props.sectionTitle ?? (
            <Fragment>
              <h2 className="features4-text01 thq-heading-2">Features</h2>
            </Fragment>
          )}
        </h2>
        <div className="features4-row thq-grid-auto-300">
          <div className="features4-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content thq-flex-column">
              <div className="features4-section-title thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="features4-text08 thq-heading-3">
                        Default value
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features4-text02 thq-body-small">
                        Default value
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action thq-flex-row">
                <button className="thq-button-flat">
                  <span>
                    {props.feature1Button ?? (
                      <Fragment>
                        <span className="features4-text05 thq-body-small">
                          Learn More
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content1 thq-flex-column">
              <div className="features4-section-title1 thq-flex-column">
                <strong>
                  {props.feature2Title ?? (
                    <Fragment>
                      <strong className="features4-text07 thq-heading-3">
                        Default value
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features4-text03 thq-body-small">
                        Default value
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action1 thq-flex-row">
                <button className="thq-button-flat">
                  <span>
                    {props.feature2Button ?? (
                      <Fragment>
                        <span className="features4-text09 thq-body-small">
                          Explore Now
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content2 thq-flex-column">
              <div className="features4-section-title2 thq-flex-column">
                <strong>
                  {props.feature3Title ?? (
                    <Fragment>
                      <strong className="features4-text11 thq-heading-3">
                        Default value
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features4-text12 thq-body-small">
                        Default value
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action2 thq-flex-row">
                <button className="thq-button-flat">
                  <span>
                    {props.feature3Button ?? (
                      <Fragment>
                        <span className="features4-text06 thq-body-small">
                          Join Us
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content3 thq-flex-column">
              <div className="features4-section-title3 thq-flex-column">
                <strong>
                  {props.feature4Title ?? (
                    <Fragment>
                      <strong className="features4-text13 thq-heading-3">
                        Personalized Treatment Plans
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features4-text10 thq-body-small">
                        Tailored plans for optimal well-being
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action3 thq-flex-row">
                <button className="thq-button-flat">
                  <span>
                    {props.feature4Button ?? (
                      <Fragment>
                        <span className="features4-text04 thq-body-small">
                          Get Started
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features4.defaultProps = {
  sectionTitle: undefined,
  feature1Description: undefined,
  feature4ImageAlt: 'Treatment Plans Image',
  feature2Description: undefined,
  feature4Button: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1666423416744-7f750ce654a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjkzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Button: undefined,
  feature3Button: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1540888747681-44f58059d761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjkzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature2ImageAlt: 'Meditation Retreats Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1496794795115-3247c050b08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjkzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature2Button: undefined,
  feature3ImageAlt: 'Nature Walks Image',
  feature4Description: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1579291465434-34f7dffd90bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjkzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature3Description: undefined,
  feature1ImageAlt: 'Equine Therapy Image',
  feature4Title: undefined,
}

Features4.propTypes = {
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature4Button: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Button: PropTypes.element,
  feature3Button: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Button: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature4Description: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
}

export default Features4
