import React from 'react'

function Nav({link, text, handle}) {
  return (
    <a href={link} className='Nav' onClick={handle}>{text}</a>
  )
}

export default Nav