import React from 'react'

function Menu({mText, className}) {
  return (
    <ul>
        <li className={`${className}`}>
            <a href="#">
            {mText}
            </a>
        </li>
    </ul>
  )
}

export default Menu