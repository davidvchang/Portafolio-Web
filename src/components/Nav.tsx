import React from 'react'

interface PropsNav{
    text: string,
    link?: string
}

const Nav:React.FC<PropsNav> = ({ text, link }) => {
  return (
    <a href={link} className='hover:text-blue-500 hover:transition duration-300 hover:cursor-pointer'>{text}</a>
  )
}

export default Nav
