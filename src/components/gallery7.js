import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery7.css'

const Gallery7 = (props) => {
  return (
    <div className="gallery7-gallery3 thq-section-padding">
      <div className="gallery7-max-width">
        <div className="gallery7-section-title">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="gallery7-text2 thq-heading-2">Gallery</h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="gallery7-text3 thq-body-large">
                  Explore images from our equine therapy and meditation retreats
                  at Blissful Existence Healing Acres.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery7-container">
          <div className="gallery7-content">
            <div className="gallery7-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery7-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery7-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery7-container2">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery7-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery7-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery7-image5 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery7-container3">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery7-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery7-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery7.defaultProps = {
  image7Src:
    'https://images.unsplash.com/photo-1649834925385-6a59dd577131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzM4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Beautiful landscape of the Pocono Mountains',
  image3Src:
    'https://images.unsplash.com/photo-1654738763690-2feaac0263e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzM4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1446488614340-2d1a68d662f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzM4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Happy client bonding with a therapy horse',
  image5Alt: 'Group meditation session in a serene setting',
  image2Src:
    'https://images.unsplash.com/photo-1606437522882-408372b28791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzM4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1578496479763-c21c718af028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzM4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1713371613801-2e7eed5650f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzM4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Equine therapy session in progress',
  heading1: undefined,
  image5Src:
    'https://images.unsplash.com/photo-1528129550655-5123a0cd0c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjYwNzM4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Peaceful sunrise over the Healing Acres',
  content1: undefined,
  image2Alt: 'Meditation retreat participants enjoying nature',
  image7Alt: 'Client testimonial sharing their positive experience',
}

Gallery7.propTypes = {
  image7Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image6Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image4Src: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  image5Src: PropTypes.string,
  image6Alt: PropTypes.string,
  content1: PropTypes.element,
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
}

export default Gallery7
