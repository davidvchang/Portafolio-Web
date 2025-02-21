import React, { useState } from 'react'
import { ChevronDown, BriefcaseBusiness, CalendarDays } from 'lucide-react';
import DescriptionExperience from './DescriptionExperience';
import { motion, AnimatePresence } from 'framer-motion';

interface PropsExperience {
    position: string,
    company: string,
    time: string
}

const Experience:React.FC<PropsExperience> = ({position, company, time}) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

  return (
    <div className='w-full h-full flex justify-center'>
        <div className='flex flex-col p-8 w-full md:w-[80%] 2xl:w-full bg-slate-100 border-slate-300 dark:bg-gray-700 rounded-lg border dark:border-slate-600'>
            <div className='flex justify-between'>
                <span className='text-[28px] font-normal'>{position}</span>

                <button className='w-fit h-fit p-2 bg-white rounded border border-slate-200 hover:brightness-95 dark:hover:brightness-90 hover:transition duration-300 cursor-pointer' onClick={toggleVisibility}>
                    <ChevronDown className={`w-6 h-6 text-black transition-transform duration-300 ${
                                isVisible ? "rotate-180" : ""
                            }`}/>
                </button>

            </div>

            <div className='flex items-center gap-2'>
                <BriefcaseBusiness className='w-[1.40rem] h-[1.40rem] text-blue-600 dark:text-sky-500' strokeWidth={1.5}/>
                <span className='text-blue-600 dark:text-sky-500 text-lg'>{company}</span>
            </div>

            <div className='flex items-center gap-2 pt-1'>
                <CalendarDays className='w-[1.40rem] h-[1.40rem] text-slate-500 dark:text-[#9498A0]' strokeWidth={1.5}/>
                <span className='text-slate-500 dark:text-[#9498A0] text-lg'>{time}</span>
            </div>

            {/* DESCRIPTION */}
            <AnimatePresence> 
                {isVisible === true && (
                    <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className='flex flex-col pt-5 gap-2'>
                        <DescriptionExperience description='Desarrollo de aplicaciones web utilizando Vue.js, PHP, JavaScript, CSS y Bootstrap.'/>
                        <DescriptionExperience description='Mantenimiento y mejoras en las aplicaciones web según los requisitos de los clientes.'/>
                        <DescriptionExperience description='Implementación de nuevas funcionalidades y corrección de errores en respuesta a feedback recibido.'/>
                        <DescriptionExperience description='Colaboración en equipo para asegurar la correcta entrega y actualización del proyecto.'/>
                    </div>

                </motion.div>
                )}

            </AnimatePresence>
        </div>
    </div>
  )
}

export default Experience
