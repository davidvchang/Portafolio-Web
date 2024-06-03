import React from 'react'

function UsedTechnology({icon, text, styleBG}) {
  return (
    <div className={`userTech ${styleBG}`}>
        {icon}
        <span>{text}</span>
    </div>
  )
}

export default UsedTechnology
