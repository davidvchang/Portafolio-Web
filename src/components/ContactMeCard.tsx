import React, { ReactNode } from 'react'

interface PropsContactMe {
    link: string,
    icon: ReactNode,
    text: string
}

const ContactMeCard:React.FC<PropsContactMe> = ({link, icon, text}) => {
  return (
    <a href={link} target='_blank' className='flex flex-col bg-white dark:bg-gray-800 items-center p-5 rounded-md border border-slate-300 dark:border-[#1B395C] hover:bg-[#1D99EC] hover:text-white hover:transition duration-300'>
        {icon}
        <span className='text-[17px] font-light'>{text}</span>
    </a>
  )
}

export default ContactMeCard
