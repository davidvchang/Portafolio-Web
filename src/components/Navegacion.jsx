import React from 'react'
import DV from '../assets/DV.webp'

function Navegacion() {
  return (
    <nav>
      <div className='lg:flex md-flex justify-between flex-1 p-1 w-screen'>
        <div className='flex gap-16 items-center ms-16'>
          <img src={DV} alt="DV Logo" className='p-2 w-20 h-20'/>
        </div>

        <div className='lg:flex md-flex items center justify-between mr-48 mt-1'>
          <ul>
              <li className='flex gap-32 p-1'>
                  <a href="" className='p-2 pb-1 hover:border-b-2'>Sobre mi</a>
                  <a href="" className='p-2 pb-1 hover:border-b-2'>Habilidades</a>
                  <a href="" className='p-2 pb-1 hover:border-b-2'>Proyectos</a>
                  <a href="" className='p-2 pb-1 hover:border-b-2'>Contactame</a>
              </li>
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navegacion
