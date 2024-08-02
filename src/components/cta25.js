import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta25.css'

const CTA25 = (props) => {
  const [link4Selector, setLink4Selector] = useState(false)
  const [link1Selector, setLink1Selector] = useState(true)
  const [link2Selector, setLink2Selector] = useState(false)
  const [link3Selector, setLink3Selector] = useState(false)
  return (
    <div className="cta25-container thq-section-padding">
      <div className="cta25-max-width thq-section-max-width">
        <div className="cta25-container01">
          <div className="cta25-content">
            {link1Selector && (
              <div className="cta25-container02 thq-heading-2">
                <span className="thq-body-small">01</span>
                <h2>
                  {props.link1 ?? (
                    <Fragment>
                      <h2 className="cta25-text16 thq-heading-2">
                        Hover over link one
                      </h2>
                    </Fragment>
                  )}
                </h2>
              </div>
            )}
            {!link1Selector && (
              <div
                onMouseEnter={() => {
                  setLink3Selector(false)
                  setLink4Selector(false)
                  setLink1Selector(true)
                  setLink2Selector(false)
                }}
                className="cta25-container03 thq-heading-2"
              >
                <span className="thq-body-small">01</span>
                <h2>
                  {props.link11 ?? (
                    <Fragment>
                      <h2 className="cta25-text19 thq-heading-2">
                        Hover over link one
                      </h2>
                    </Fragment>
                  )}
                </h2>
              </div>
            )}
            {link2Selector && (
              <div className="cta25-container04 thq-heading-2">
                <span className="thq-body-small">02</span>
                <h2>
                  {props.link2 ?? (
                    <Fragment>
                      <h2 className="cta25-text18 thq-heading-2">
                        Hover over link two
                      </h2>
                    </Fragment>
                  )}
                </h2>
              </div>
            )}
            {!link2Selector && (
              <div
                onMouseEnter={() => {
                  setLink2Selector(true)
                  setLink3Selector(false)
                  setLink1Selector(false)
                  setLink4Selector(false)
                }}
                className="cta25-container05 thq-heading-2"
              >
                <span className="thq-body-small">02</span>
                <h2>
                  {props.link21 ?? (
                    <Fragment>
                      <h2 className="cta25-text22 thq-heading-2">
                        Hover over link two
                      </h2>
                    </Fragment>
                  )}
                </h2>
              </div>
            )}
            {link3Selector && (
              <div className="cta25-container06 thq-heading-2">
                <span className="thq-body-small">03</span>
                <h2>
                  {props.link3 ?? (
                    <Fragment>
                      <h2 className="cta25-text17 thq-heading-2">
                        Hover over link three
                      </h2>
                    </Fragment>
                  )}
                </h2>
              </div>
            )}
            {!link3Selector && (
              <div
                onMouseEnter={() => {
                  setLink3Selector(true)
                  setLink2Selector(false)
                  setLink4Selector(false)
                  setLink1Selector(false)
                }}
                className="cta25-container07 thq-heading-2"
              >
                <span className="thq-body-small">03</span>
                <span>
                  {props.link31 ?? (
                    <Fragment>
                      <span className="cta25-text21 thq-heading-2">
                        Hover over link three
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            )}
            {link4Selector && (
              <div className="cta25-container08 thq-heading-2">
                <span className="thq-body-small">04</span>
                <span>
                  {props.link4 ?? (
                    <Fragment>
                      <span className="cta25-text23 thq-heading-2">
                        Hover over link four
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            )}
            {!link4Selector && (
              <div
                onMouseEnter={() => {
                  setLink3Selector(false)
                  setLink1Selector(false)
                  setLink4Selector(true)
                  setLink2Selector(false)
                }}
                className="cta25-container09 thq-heading-2"
              >
                <span className="thq-body-small">04</span>
                <h2>
                  {props.link41 ?? (
                    <Fragment>
                      <h2 className="cta25-text20 thq-heading-2">
                        Hover over link four
                      </h2>
                    </Fragment>
                  )}
                </h2>
              </div>
            )}
          </div>
          {link1Selector && (
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="cta25-image thq-img-ratio-1-1"
            />
          )}
          {link2Selector && (
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="cta25-image1 thq-img-ratio-1-1"
            />
          )}
          {link3Selector && (
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="cta25-image2 thq-img-ratio-1-1"
            />
          )}
          {link4Selector && (
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="cta25-image3 thq-img-ratio-1-1"
            />
          )}
        </div>
      </div>
    </div>
  )
}

CTA25.defaultProps = {
  image3Alt: 'image3Alt',
  image1Src:
    'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjc3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  link1: undefined,
  image4Src:
    'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjc3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'image1Alt',
  link3: undefined,
  link2: undefined,
  link11: undefined,
  image4Alt: 'image1Alt',
  link41: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1538240175502-ec4eb4455f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjc3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1721313576645-8cd9909bef2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjc3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  link31: undefined,
  image2Alt: 'image1Alt',
  link21: undefined,
  link4: undefined,
}

CTA25.propTypes = {
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  link1: PropTypes.element,
  image4Src: PropTypes.string,
  image1Alt: PropTypes.string,
  link3: PropTypes.element,
  link2: PropTypes.element,
  link11: PropTypes.element,
  image4Alt: PropTypes.string,
  link41: PropTypes.element,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  link31: PropTypes.element,
  image2Alt: PropTypes.string,
  link21: PropTypes.element,
  link4: PropTypes.element,
}

export default CTA25
