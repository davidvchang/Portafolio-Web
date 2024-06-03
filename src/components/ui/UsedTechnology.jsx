import React from 'react'

function UsedTechnology({icon, text}) {
  return (
    <div className='userTech'>
        {icon}
        <span>{text}</span>
    </div>
  )
}

export default UsedTechnology
