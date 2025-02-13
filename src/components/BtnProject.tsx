import React, { ReactNode } from 'react'

interface PropsBtn {
    link: string,
    icon: ReactNode,
    text: string
}

const BtnProject:React.FC<PropsBtn> = ({link, text, icon}) => {
  return (
    <a href={link} target='_blank' className='flex items-center gap-2 px-3 py-3 md:px-3 md:py-2 border border-slate-300 rounded font-light bg-slate-50 hover:border-[#1D99EC] hover:bg-[#1D99EC] hover:text-white hover:transition duration-300 dark:bg-[#101827] dark:border-sky-900'>
        {icon}
        {text}
    </a>
  )
}

export default BtnProject
