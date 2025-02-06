import React from 'react'
import Nav from './Nav'
import { Moon } from 'lucide-react';

const NavBar:React.FC = () => {
  return (
    <div className='w-full h-16 bg-white flex items-center justify-between px-5'>
        <span className='text-4xl font-semibold text-blue-500'>DV</span>

        <div className='w-fit flex gap-10 items-center'>
            <Nav text='Inicio'/>
            <Nav text='Proyectos'/>
            <Nav text='Habilidades'/>
            <Nav text='Experiencia'/>
            <Nav text='Contactame'/>

            <button className='p-2 bg-slate-100 rounded cursor-pointer border border-slate-200 hover:bg-slate-200 hover:transition duration-300'><Moon className='w-5 h-5'/></button>
        </div>
    </div>
  )
}

export default NavBar
