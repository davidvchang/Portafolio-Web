import React, { ReactNode } from 'react'

interface PropsSkill{
    icon: ReactNode
}

const SkillContainer:React.FC<PropsSkill> = ({ icon }) => {
  return (
    <div className='flex w-20 h-40 rounded'>
        {icon}
    </div>
  )
}

export default SkillContainer
