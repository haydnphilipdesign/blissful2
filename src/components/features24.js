import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container1 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal"
          >
            <div className="features24-divider-container">
              {activeTab === 0 && <div className="features24-container2"></div>}
            </div>
            <div className="features24-content">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features24-text4 thq-heading-2">
                      Equine Therapy
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text2 thq-body-small">
                      Experience the healing power of horses through
                      equine-assisted therapy.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 1 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features24-text1 thq-heading-2">
                      Healing Workshops
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text5 thq-body-small">
                      Healing Workshops and Seminars
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 2 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features24-text3 thq-heading-2">
                      Meditation Retreats
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text thq-body-small">
                      Guided Meditation in Nature
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3Description: undefined,
  feature3ImgAlt: 'Meditation Retreat in Pocono Mountains',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1518765397694-6178fdb62875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1518708909080-704599b19972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature3Title: undefined,
  feature2ImgAlt: 'Healing Workshop Image',
  feature1Title: undefined,
  feature1ImgAlt: 'Equine Therapy Session',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1708758455395-fd9151782f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
}

Features24.propTypes = {
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
}

export default Features24
