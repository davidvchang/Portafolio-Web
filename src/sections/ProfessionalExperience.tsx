import React from 'react'
import Experience from '../components/Experience'

const ProfessionalExperience:React.FC = () => {
  return (
    <section className='flex flex-col w-full h-full items-center justify-center py-14 bg-white dark:bg-[#1B2533]' id='experience'>
        <div className='flex flex-col gap-14 w-full lg:w-[80%] 2xl:w-[55%] dark:text-white'>
            <span className='text-3xl w-full text-center'>Experiencia Profesional</span>

            <div className='flex flex-col w-full px-2 lg:px-0'>
                <Experience position='Desarrollador Web' company='Clever Cloud' time='Julio 2024 - Enero 2025'/>

            </div>
        </div>
    </section>
  )
}

export default ProfessionalExperience
