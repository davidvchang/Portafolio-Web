import React, { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'

interface PropsSkill{
    icon: ReactNode,
    name: string
    id?: string
}

const SkillContainer:React.FC<PropsSkill> = ({ icon, name, id }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className='flex flex-col relative items-center'>
      <div className='flex w-[85px] h-[85px] justify-center items-center rounded-md border border-slate-300 bg-slate-200 dark:border-sky-900 dark:bg-[#1B2533]' onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
          {icon}
      </div>

      {isVisible === true && (
         <motion.div 
          initial={{ opacity: 0, y: 0}} // Empieza invisible y arriba
          animate={{ opacity: 1, y: 0 }}  // Aparece con fade y baja
          exit={{ opacity: 0, y: 0 }}   // Se oculta con fade y sube
          transition={{ duration: 0.3 }}  // Duración de la animación
          className={`h-fit px-5 rounded-full absolute -top-6 font-light bg-slate-400 dark:bg-slate-600 flex justify-center select-none ${id === "SQLServer" ? 'w-32' : 'w-fit'}`} 
          id={id}
          >
            <span className='text-white text-sm'>{name}</span>
         </motion.div>

      )}

    </div>
  )
}

export default SkillContainer
