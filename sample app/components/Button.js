import React from 'react'

const Button = props => {
  return (
    <button type='button' onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default Button
