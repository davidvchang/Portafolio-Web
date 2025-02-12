import React from 'react'
import SkillContainer from '../components/SkillContainer.tsx'
import Icons from '../assets/icon.tsx'

const Skills:React.FC = () => {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center py-14'>
        <div className='flex flex-col gap-14 w-[80%] dark:text-white'>
            <span className='text-3xl w-full text-center'>Habilidades</span>

            <div className='flex flex-wrap gap-10 justify-center'>
                <SkillContainer icon={Icons.React} name='React'/>
                <SkillContainer icon={Icons.Vue} name='Vue.js'/>
                <SkillContainer icon={Icons.JS} name='JavaScript'/>
                <SkillContainer icon={Icons.TypeScript} name='TypeScript'/>
                <SkillContainer icon={Icons.HTML} name='HTML'/>
                <SkillContainer icon={Icons.CSS} name='CSS'/>
                <SkillContainer icon={Icons.Sass} name='Sass'/>
                <SkillContainer icon={Icons.Tailwind} name='Tailwind'/>
                <SkillContainer icon={Icons.Bootstrap} name='Bootstrap'/>
                <SkillContainer icon={Icons.Node} name='Node.js'/>
                <SkillContainer icon={Icons.Express} name='Express.js'/>
                <SkillContainer icon={Icons.MongoDB} name='MongoDB'/>
                <SkillContainer icon={Icons.PostgreSQL} name='PostgreSQL'/>
                <SkillContainer icon={Icons.SQL_Server} name='SQL Server' id='SQLServer'/>
                <SkillContainer icon={Icons.MySQL} name='MySQL'/>
                <SkillContainer icon={Icons.Git} name='Git'/>
                <SkillContainer icon={Icons.GitHub} name='GitHub'/>
                <SkillContainer icon={Icons.SourceTree} name='SourceTree'/>
                <SkillContainer icon={Icons.Python} name='Python'/>
                <SkillContainer icon={Icons.Postman} name='Postman'/>
            </div>
        
        </div>

    </div>
  )
}

export default Skills
