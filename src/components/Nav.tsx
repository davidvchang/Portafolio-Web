import React from 'react'

interface PropsNav{
    text: string,
    onClick?: () => void
}

const Nav:React.FC<PropsNav> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='hover:text-[#1C99EC] hover:transition duration-300 hover:cursor-pointer dark:text-slate-100'>{text}</button>
  )
}

export default Nav
