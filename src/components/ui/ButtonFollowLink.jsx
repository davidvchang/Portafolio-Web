import React from 'react'

function ButtonFollowLink({link, icon, text}) {
  return (
    <a href={link} target='_blank'>
        {icon}
        <span>{text}</span>
    </a>
  )
}

export default ButtonFollowLink
