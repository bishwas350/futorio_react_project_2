import React from 'react'

function Flex({children, className}) {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default Flex