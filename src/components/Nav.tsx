import React from 'react'

interface PropsNav{
    text: string,
    link?: string
}

const Nav:React.FC<PropsNav> = ({ text, link }) => {
  return (
    <a href={link} className='hover:text-[#1C99EC] hover:transition duration-300 hover:cursor-pointer dark:text-slate-100'>{text}</a>
  )
}

export default Nav
