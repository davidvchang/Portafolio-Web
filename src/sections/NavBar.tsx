import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Moon, Sun } from 'lucide-react';

const NavBar:React.FC = () => {

  const [isDark, setIsDark] = useState<boolean>(false)

  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark)
  }

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <div className='w-full h-16 bg-white opacity-90 flex items-center justify-between px-5 fixed z-99 shadow dark:bg-[#1B2533] dark:border-b dark:border-b-sky-950'>
        <span className='text-[44px] font-semibold text-[#1C99EC]'>DV</span>

        <div className='w-fit flex gap-10 items-center'>
            <Nav text='Inicio' onClick={() => handleScroll("home")}/>
            <Nav text='Proyectos' onClick={() => handleScroll("projects")}/>
            <Nav text='Habilidades' onClick={() => handleScroll("skills")}/>
            <Nav text='Experiencia' onClick={() => handleScroll("experience")}/>
            <Nav text='Contactame' onClick={() => handleScroll("contactme")}/>

            {isDark === true ? (
              <button className='p-2 bg-slate-700 border-slate-600 text-amber-300 rounded cursor-pointer border hover:bg-slate-600 hover:transition duration-300' onClick={toggleMode}><Sun className='w-5 h-5'/></button>
              
            ): (
              <button className='p-2 bg-slate-100 rounded cursor-pointer border border-slate-200 hover:bg-slate-200 hover:transition duration-300' onClick={toggleMode}><Moon className='w-5 h-5'/></button>

            )}
        </div>
    </div>
  )
}

export default NavBar
