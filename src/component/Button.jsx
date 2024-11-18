import React from 'react'

function Button({btnText, className}) {
  return (
    <button className={`${className}`}>{btnText}</button>
  )
}

export default Button