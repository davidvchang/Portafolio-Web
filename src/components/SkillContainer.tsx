import React, { ReactNode } from 'react'

interface PropsSkill{
    icon: ReactNode
}

const SkillContainer:React.FC<PropsSkill> = ({ icon }) => {
  return (
    <div className='flex w-20 h-20 justify-center items-center rounded-md border border-slate-300 bg-slate-200 dark:border-sky-900 dark:bg-[#1B2533]'>
        {icon}
    </div>
  )
}

export default SkillContainer
