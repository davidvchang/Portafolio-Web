import React from 'react'

function Nav({link, Nav, NavMovil, text, handle}) {
  return (
    <a href={link} className={`${Nav} ${NavMovil}`} onClick={handle}>{text}</a>
  )
}

export default Nav