import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq5.css'

const FAQ5 = (props) => {
  return (
    <div className="faq5-faq13 thq-section-padding">
      <div className="faq5-max-width thq-section-max-width thq-flex-column">
        <div className="thq-flex-column">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="faq5-text21 thq-heading-2">FAQs</h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="faq5-text06 thq-body-large">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="thq-flex-row faq5-content">
          <div className="thq-flex-column">
            <div className="faq5-list-item1">
              <p>
                {props.faq1Question ?? (
                  <Fragment>
                    <p className="faq5-text18 thq-body-large">
                      What is equine therapy?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq1Answer ?? (
                  <Fragment>
                    <span className="faq5-text15 thq-body-small">
                      Equine therapy is a form of experiential therapy that
                      involves interactions between patients and horses. It can
                      help individuals build confidence, improve communication
                      skills, and develop emotional awareness.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq5-list-item2">
              <p>
                {props.faq2Question ?? (
                  <Fragment>
                    <p className="faq5-text14 thq-body-large">
                      What can I expect during a meditation retreat?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq2Answer ?? (
                  <Fragment>
                    <span className="faq5-text25 thq-body-small">
                      During a meditation retreat at Blissful Existence Healing
                      Acres, you can expect guided meditation sessions,
                      mindfulness practices, nature walks, and opportunities for
                      self-reflection and relaxation.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq5-list-item3">
              <p>
                {props.faq3Question ?? (
                  <Fragment>
                    <p className="faq5-text12 thq-body-large">
                      Are the treatment plans personalized?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq3Answer ?? (
                  <Fragment>
                    <span className="faq5-text10 thq-body-small">
                      Yes, at Blissful Existence Healing Acres, we provide
                      personalized treatment plans tailored to each
                      individual&apos;s specific needs and goals for healing and
                      growth.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq5-list-item4">
              <p>
                {props.faq4Question ?? (
                  <Fragment>
                    <p className="faq5-text24 thq-body-large">
                      How can equine therapy benefit me?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq4Answer ?? (
                  <Fragment>
                    <span className="faq5-text26 thq-body-small">
                      Equine therapy can benefit individuals by promoting
                      emotional regulation, building trust and empathy,
                      enhancing self-awareness, and providing opportunities for
                      personal growth and healing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq5-list-item5">
              <p>
                {props.faq5Question ?? (
                  <Fragment>
                    <p className="faq5-text17 thq-body-large">
                      Do you offer accommodation at the Pocono Mountains
                      retreat?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq5Answer ?? (
                  <Fragment>
                    <span className="faq5-text05 thq-body-small">
                      Yes, we offer comfortable accommodation options at our
                      retreat center in the picturesque Pocono Mountains,
                      providing a peaceful and serene environment for healing
                      and relaxation.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq5-list-item6">
              <p>
                {props.faq6Question ?? (
                  <Fragment>
                    <p className="faq5-text23 thq-body-large">
                      How are the meditation retreats structured?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq6Answer ?? (
                  <Fragment>
                    <span className="faq5-text22 thq-body-small">
                      Our meditation retreats are structured to include a
                      balance of guided meditation sessions, mindfulness
                      practices, group activities, individual reflection time,
                      and opportunities to connect with nature in the beautiful
                      surroundings of the Pocono Mountains.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq5-list-item7">
              <p>
                {props.faq7Question ?? (
                  <Fragment>
                    <p className="faq5-text16 thq-body-large">
                      Can I combine equine therapy with meditation retreats?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq7Answer ?? (
                  <Fragment>
                    <span className="faq5-text30 thq-body-small">
                      Yes, we offer programs that integrate equine therapy
                      sessions with meditation retreat experiences to provide a
                      holistic approach to healing and personal development.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq5-list-item8">
              <p>
                {props.faq8Question ?? (
                  <Fragment>
                    <p className="faq5-text04 thq-body-large">
                      Are the staff members experienced in equine therapy and
                      meditation practices?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq8Answer ?? (
                  <Fragment>
                    <span className="faq5-text19 thq-body-small">
                      Yes, our staff members are highly experienced in equine
                      therapy techniques and meditation practices. They are
                      dedicated to creating a supportive and nurturing
                      environment for our clients&apos; healing journey.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq5-list-item9">
              <p>
                {props.faq9Question ?? (
                  <Fragment>
                    <p className="faq5-text13 thq-body-large">
                      How can I book a session at Blissful Existence Healing
                      Acres?
                    </p>
                  </Fragment>
                )}
              </p>
              <span>
                {props.faq9Answer ?? (
                  <Fragment>
                    <span className="faq5-text20 thq-body-small">
                      To book a session or inquire about our services at
                      Blissful Existence Healing Acres, please contact us
                      through our website or give us a call. We look forward to
                      assisting you on your path to healing and well-being.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq5-content2">
            <h2>
              {props.heading2 ?? (
                <Fragment>
                  <h2 className="faq5-text11 thq-heading-2">
                    Still have a question?
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <Fragment>
                  <p className="faq5-text27 thq-body-large">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
          <button className="thq-button-outline">
            <span>
              {props.action ?? (
                <Fragment>
                  <span className="faq5-text09 thq-body-small">Contact</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

FAQ5.defaultProps = {
  faq8Question: undefined,
  faq5Answer: undefined,
  content1: undefined,
  action: undefined,
  faq3Answer: undefined,
  heading2: undefined,
  faq3Question: undefined,
  faq9Question: undefined,
  faq2Question: undefined,
  faq1Answer: undefined,
  faq7Question: undefined,
  faq5Question: undefined,
  faq1Question: undefined,
  faq8Answer: undefined,
  faq9Answer: undefined,
  heading1: undefined,
  faq6Answer: undefined,
  faq6Question: undefined,
  faq4Question: undefined,
  faq2Answer: undefined,
  faq4Answer: undefined,
  content2: undefined,
  faq7Answer: undefined,
}

FAQ5.propTypes = {
  faq8Question: PropTypes.element,
  faq5Answer: PropTypes.element,
  content1: PropTypes.element,
  action: PropTypes.element,
  faq3Answer: PropTypes.element,
  heading2: PropTypes.element,
  faq3Question: PropTypes.element,
  faq9Question: PropTypes.element,
  faq2Question: PropTypes.element,
  faq1Answer: PropTypes.element,
  faq7Question: PropTypes.element,
  faq5Question: PropTypes.element,
  faq1Question: PropTypes.element,
  faq8Answer: PropTypes.element,
  faq9Answer: PropTypes.element,
  heading1: PropTypes.element,
  faq6Answer: PropTypes.element,
  faq6Question: PropTypes.element,
  faq4Question: PropTypes.element,
  faq2Answer: PropTypes.element,
  faq4Answer: PropTypes.element,
  content2: PropTypes.element,
  faq7Answer: PropTypes.element,
}

export default FAQ5
