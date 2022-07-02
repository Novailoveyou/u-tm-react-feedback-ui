import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbaclList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

FeedbaclList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbaclList
