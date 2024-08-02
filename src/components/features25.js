import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text thq-heading-2">
                      Equine Therapy
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text5 thq-body-small">
                      Experience the healing power of horses through our equine
                      therapy sessions. Our gentle and majestic horses provide a
                      unique opportunity for emotional growth and
                      self-discovery.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text4 thq-heading-2">
                      Meditation Retreats
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text3 thq-body-small">
                      Join us for meditation retreats in the tranquil
                      surroundings of the Pocono Mountains. Immerse yourself in
                      mindfulness practices to rejuvenate your mind, body, and
                      spirit.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text1 thq-heading-2">
                      Nature Walks
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text2 thq-body-small">
                      Explore the beauty of nature with guided nature walks
                      around our healing acres. Connect with the natural world
                      and find inner peace amidst the serene landscapes.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2ImgAlt: 'Meditation Retreats Image',
  feature1Title: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1712937145432-4ce68f2ac25f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature1ImgAlt: 'Equine Therapy Image',
  feature2Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1608280200244-fae9946df695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1616376392785-8e7e283571e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Nature Walks Image',
  feature1Description: undefined,
}

Features25.propTypes = {
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default Features25
