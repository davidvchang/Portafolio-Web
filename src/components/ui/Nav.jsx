import React from 'react'

function Nav({link, text}) {
  return (
    <a href={link} className='Nav'>{text}</a>
  )
}

export default Nav