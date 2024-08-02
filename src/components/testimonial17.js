import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text18 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text27 thq-body-small">
                  Read what our clients have to say about their experiences at
                  Blissful Existence Healing Acres.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text20 thq-body-large">
                            Emily Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text15 thq-body-small">
                            Yoga Instructor
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        I found peace and healing through the equine therapy
                        sessions at Blissful Existence Healing Acres. The serene
                        environment and caring staff made my experience truly
                        transformative.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text22 thq-body-large">
                            Michael Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25 thq-body-small">
                            Mindfulness Coach
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text16 thq-body-small">
                        The meditation retreat at Blissful Existence Healing
                        Acres was exactly what I needed to recharge and
                        reconnect with myself. I highly recommend it to anyone
                        looking for a peaceful getaway.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text21 thq-body-large">
                            Sarah Adams
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26 thq-body-small">
                            Therapist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text17 thq-body-small">
                        The equine therapy sessions helped me overcome my
                        anxiety and build confidence. The horses are amazing
                        healers, and the team at Blissful Existence made me feel
                        supported throughout my journey.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text19 thq-body-large">
                            David Roberts
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text14 thq-body-small">
                            Retreat Participant
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text23 thq-body-small">
                        Attending the retreat in the Pocono Mountains was a
                        life-changing experience. The combination of nature,
                        meditation, and equine therapy was truly magical. I
                        can&apos;t wait to visit again!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Position: undefined,
  author1Position: undefined,
  review2: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1544784179-ae1535e9f013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  heading1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1516906736502-5d3fedc3019a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author1Name: undefined,
  author2Alt: 'Image of Michael Johnson',
  author3Alt: 'Image of Sarah Adams',
  author3Name: undefined,
  author4Alt: 'Image of David Roberts',
  author2Name: undefined,
  review4: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1484588168347-9d835bb09939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  author2Position: undefined,
  author3Position: undefined,
  author1Alt: 'Image of Emily Smith',
  content1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1706804358308-2eb237ae13f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNjI4NHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author4Position: PropTypes.element,
  author1Position: PropTypes.element,
  review2: PropTypes.element,
  author4Src: PropTypes.string,
  review3: PropTypes.element,
  heading1: PropTypes.element,
  author1Src: PropTypes.string,
  author4Name: PropTypes.element,
  author1Name: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Name: PropTypes.element,
  review4: PropTypes.element,
  author2Src: PropTypes.string,
  review1: PropTypes.element,
  author2Position: PropTypes.element,
  author3Position: PropTypes.element,
  author1Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Src: PropTypes.string,
}

export default Testimonial17
