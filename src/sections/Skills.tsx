import React from 'react'
import SkillContainer from '../components/SkillContainer.tsx'
import Icons from '../assets/icon.tsx'

const Skills:React.FC = () => {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center py-14'>
        <div className='flex flex-col gap-14 w-[80%] dark:text-white'>
            <span className='text-3xl w-full text-center'>Habilidades</span>

            <div className='flex flex-wrap gap-10 justify-center'>
                <SkillContainer icon={Icons.React}/>
                <SkillContainer icon={Icons.Vue}/>
                <SkillContainer icon={Icons.JS}/>
                <SkillContainer icon={Icons.TypeScript}/>
                <SkillContainer icon={Icons.HTML}/>
                <SkillContainer icon={Icons.CSS}/>
                <SkillContainer icon={Icons.Sass}/>
                <SkillContainer icon={Icons.Tailwind}/>
                <SkillContainer icon={Icons.Bootstrap}/>
                <SkillContainer icon={Icons.Node}/>
                <SkillContainer icon={Icons.Express}/>
                <SkillContainer icon={Icons.MongoDB}/>
                <SkillContainer icon={Icons.PostgreSQL}/>
                <SkillContainer icon={Icons.SQL_Server}/>
                <SkillContainer icon={Icons.MySQL}/>
                <SkillContainer icon={Icons.Git}/>
                <SkillContainer icon={Icons.GitHub}/>
                <SkillContainer icon={Icons.SourceTree}/>
                <SkillContainer icon={Icons.Python}/>
                <SkillContainer icon={Icons.Postman}/>
            </div>
        
        </div>

    </div>
  )
}

export default Skills
