import React from 'react'

function BtnSocial({link ,icon}) {
  return (
    <a href={link} target='_blank' className='BtnSocial'>
        {icon}
    </a>
  )
}

export default BtnSocial