import React from 'react'
import DV from '../assets/DV.webp'

function Navegacion() {
  return (
    <nav>
      <div className='flex flex-col justify-between p-1 w-screen shadow md:flex md:flex-row md:min-w-min md:shadow'>
        <div className='flex flex-row items-center md:flex md:gap-0 md:items-center md:ms-16'>
          <img src={DV} alt="DV Logo" className='p-2 min-w-16 w-16 h-16 lg:w-20 lg:h-20'/>  
        </div>

        <div className='flex items-center mr-0 mt-1 justify-center py-3 md:justify-between lg:justify-between md:mr-10 lg:mr-36'>
          <ul>
              <li className='flex flex-col gap-2 md:flex md:flex-row md:gap-5 md:p-1 lg:gap-20'>
                  <a href="" className='hover:opacity-50 py-1 md:min-w-32 md:p-2 md:pb-1 md:hover:-mb-1 hover:transition-opacity text-xs md:text-sm lg:text-base'>Sobre mi</a>
                  <a href="" className='hover:opacity-50 py-1 md:p-2 md:pb-1 md:hover:-mb-1 hover:transition-opacity text-xs md:text-sm lg:text-base'>Habilidades</a>
                  <a href="" className='hover:opacity-50 py-1 md:min-w-24 md:p-2 md:pb-1 md:hover:-mb-1 hover:transition-opacity text-xs md:text-sm lg:text-base'>Proyectos</a>
                  <a href="" className='hover:opacity-50 py-1 md:min-w-28 md:p-2 md:pb-1 md:hover:-mb-1 hover:transition-opacity text-xs md:text-sm lg:text-base'>Contactame</a>
              </li>
              
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navegacion
