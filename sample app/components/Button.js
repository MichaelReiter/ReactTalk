import React from 'react'

const Button = props => {
  return (
    <button type='button' onClick={props.onClick}>
      {props.label}
    </button>
  )
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Button
