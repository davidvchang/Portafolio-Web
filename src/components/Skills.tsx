import React from 'react'
import SkillContainer from './SkillContainer'
import Icons from '../assets/icon.tsx'

const Skills:React.FC = () => {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center py-14'>
        <div className='flex flex-col gap-14 w-[80%]'>
            <span className='text-3xl w-full text-center'>Habilidades</span>

            <div className='flex flex-wrap gap-10'>
                <SkillContainer icon={Icons.JS}/>
            </div>
        
        </div>

    </div>
  )
}

export default Skills
