import React, { ReactNode } from 'react'

interface PropsProject {
    children: ReactNode,
    children2: ReactNode,
}

const ProjectContainer:React.FC<PropsProject> = ( {children, children2}) => {
  return (
    <div className='flex flex-col w-[23rem] h-full border border-slate-200 rounded-xl overflow-hidden dark:border-sky-900'>
        <div className='w-full h-52 bg-amber-200'>

        </div>

        <div className='flex flex-col p-5 gap-3'>
            <span className='text-2xl font-medium'>Title</span>
            <p className='dark:text-slate-300 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis vitae incidunt repellat.</p>
            
            <div className='flex flex-wrap gap-2 justify-center'>
                {children}
            </div>

            <div className='flex justify-between pt-3'>
                {children2}
            </div>
        </div>



    </div>
  )
}

export default ProjectContainer
