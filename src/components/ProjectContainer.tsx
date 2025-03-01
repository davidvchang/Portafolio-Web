import React, { ReactNode } from 'react'

interface PropsProject {
    children: ReactNode,
    children2: ReactNode,
    image: string,
    title: string,
    description: string,
}

const ProjectContainer:React.FC<PropsProject> = ( {title, description, children, children2, image}) => {
  return (
    <div className='flex flex-col md:w-[23rem] h-full border border-slate-200 rounded-xl overflow-hidden dark:border-sky-900'>
        <div className='w-full h-52 bg-amber-200 overflow-hidden'>
            <img src={image} alt="" className='w-full h-full object-cover hover:scale-105 hover:transition duration-300'/>
        </div>

        <div className='flex flex-col flex-grow p-5 gap-3'>
            <span className='text-2xl font-medium text-center'>{title}</span>
            <p className='dark:text-slate-300 font-light text-ellipsis line-clamp-4'>{description}</p>
            
            <div className='flex flex-wrap gap-2 justify-center'>
                {children}
            </div>

            <div className='flex justify-center pt-3 gap-[18px] mt-auto'>
                {children2}
            </div>
        </div>



    </div>
  )
}

export default ProjectContainer
