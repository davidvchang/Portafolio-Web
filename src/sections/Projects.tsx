import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import TechnologyUsed from '../components/TechnologyUsed'
import BtnProject from '../components/BtnProject'

import { Github, Link } from 'lucide-react';

const Projects:React.FC = () => {
  return (
    <section className='flex flex-col w-full h-full items-center justify-center bg-white py-14 dark:bg-[#1B2533]'>

        <div className='flex flex-col gap-14 w-[80%] dark:text-white'>
            <span className='text-3xl w-full text-center'>Proyectos</span>

            <div className='flex flex-wrap gap-6'>
                <ProjectContainer children={
                    <>
                        <TechnologyUsed text='React'/>
                        <TechnologyUsed text='Tailwind'/>
                        <TechnologyUsed text='TypeScript'/>
                    </>
                } children2={
                    <>
                        <BtnProject link='' icon={<Github className='w-5 h-5'/>} text='Ir al repositorio'/>
                        <BtnProject link='' icon={<Link className='w-5 h-5'/>} text='Ir al sitio web'/>
                    </>
                }/>
                <ProjectContainer children={
                    <>
                        <TechnologyUsed text='React'/>
                        <TechnologyUsed text='Tailwind'/>
                        <TechnologyUsed text='TypeScript'/>
                    </>
                } children2={
                    <>
                        <BtnProject link='' icon={<Github className='w-5 h-5'/>} text='Ir al repositorio'/>
                        <BtnProject link='' icon={<Link className='w-5 h-5'/>} text='Ir al sitio web'/>
                    </>
                }/>
                <ProjectContainer children={
                    <>
                        <TechnologyUsed text='React'/>
                        <TechnologyUsed text='Tailwind'/>
                        <TechnologyUsed text='TypeScript'/>
                    </>
                } children2={
                    <>
                        <BtnProject link='' icon={<Github className='w-5 h-5'/>} text='Ir al repositorio'/>
                        <BtnProject link='' icon={<Link className='w-5 h-5'/>} text='Ir al sitio web'/>
                    </>
                }/>
            </div>

        </div>
      
    </section>
  )
}

export default Projects
