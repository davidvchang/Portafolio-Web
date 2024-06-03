import React from 'react'

function Technology({icon, text}) {
  return (
    <div className='Technology'>
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default Technology
