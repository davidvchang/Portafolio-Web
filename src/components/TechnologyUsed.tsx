import React from 'react'

interface PropsTechnology {
    text: string
}

const TechnologyUsed:React.FC<PropsTechnology> = ({ text }) => {
  return (
    <div className='w-fit h-fit px-3 bg-slate-200 rounded-full dark:bg-slate-950 select-none'>
        <span className=' text-sm font-light'>{text}</span>
    </div>
  )
}

export default TechnologyUsed
