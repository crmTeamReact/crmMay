import React from 'react'
import PropTypes from 'prop-types'

const inlineError = props => {
  return (
    <div>
        <div className="alert alert-danger" role="alert">
            {props.text}
        </div>
      
    </div>
  )
}

inlineError.propTypes = {
    text: PropTypes.string.isRequired
}

export default inlineError
