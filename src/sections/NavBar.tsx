import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Moon, Sun, AlignJustify, X } from 'lucide-react';

const NavBar:React.FC = () => {

  const [isDark, setIsDark] = useState<boolean>(false)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark)
    setIsOpenMenu(!isOpenMenu)
  }

  const toggleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({behavior: "smooth"})
    }
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <div className='w-full h-16 bg-white lg:opacity-90 flex items-center justify-between px-5 fixed z-99 shadow dark:bg-[#1B2533] dark:border-b dark:border-b-sky-950'>
        <span className='text-[44px] font-semibold text-[#1C99EC]'>DV</span>

        {/*START MENU VERSION MOVIL */}
        {isOpenMenu === true ? (
          <button onClick={toggleOpenMenu}><X className='w-9 h-9 lg:hidden dark:text-white'/></button>
        ) : (
            <button onClick={toggleOpenMenu}><AlignJustify className='w-9 h-9 lg:hidden dark:text-white'/></button>
        )}

        {isOpenMenu === true && (
          <div className='w-full flex flex-col absolute top-16 left-0 py-8 shadow bg-white dark:bg-[#1B2533] gap-10 items-center lg:hidden'>
              <Nav text='Inicio' onClick={() => handleScroll("home")}/>
              <Nav text='Proyectos' onClick={() => handleScroll("projects")}/>
              <Nav text='Habilidades' onClick={() => handleScroll("skills")}/>
              <Nav text='Experiencia' onClick={() => handleScroll("experience")}/>
              <Nav text='Contactame' onClick={() => handleScroll("contactme")}/>

              <div className='w-full flex justify-end px-5'>
                {isDark === true ? (
                  <button className='p-3 bg-slate-700 border-slate-600 text-amber-300 rounded-full cursor-pointer border hover:bg-slate-600 hover:transition duration-300' onClick={toggleMode}><Sun className='w-6 h-6'/></button>
                  
                ): (
                  <button className='p-3 bg-slate-100 rounded-full cursor-pointer border border-slate-200 hover:bg-slate-200 hover:transition duration-300' onClick={toggleMode}><Moon className='w-6 h-6'/></button>

                )}

              </div>

          </div>

        )}
        {/*END MENU VERSION MOVIL */}

        <div className='w-fit hidden gap-10 items-center lg:flex'>
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
