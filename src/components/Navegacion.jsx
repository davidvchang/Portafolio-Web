import React from 'react'
import DV from '../assets/DV.webp'

function Navegacion() {
  return (
    <nav>
      <div className='sm:flex sm:flex-col sm:justify-between sm:flex-1 sm:p-1 sm:w-screen sm:shadow md:flex md:flex-row md:min-w-min md:shadow'>
        <div className='sm:flex sm:flex-row sm:items-center md:flex md:gap-0 md:items-center md:ms-16'>
          <img src={DV} alt="DV Logo" className='p-2 w-20 h-20 min-w-20 min-h-20'/>
        </div>

        <div className='sm:flex sm:items-center sm:mr-0 sm:mt-1 sm:justify-center sm: py-3 md:justify-between md:mr-32 '>
          <ul>
              <li className='sm:flex sm:flex-col sm:gap-2 md:flex md:flex-row md:gap-12 md:p-1 lg:gap-20'>
                  <a href="" className='sm:hover:opacity-50 sm:py-1 md:min-w-32 md:p-2 md:pb-1 md:hover:border-b-2  md:hover:-mb-1'>Sobre mi</a>
                  <a href="" className='sm:hover:opacity-50 sm:py-1 md:p-2 md:pb-1 md:hover:border-b-2  md:hover:-mb-1'>Habilidades</a>
                  <a href="" className='sm:hover:opacity-50 sm:py-1 md:min-w-24 md:p-2 md:pb-1 md:hover:border-b-2  md:hover:-mb-1'>Proyectos</a>
                  <a href="" className='sm:hover:opacity-50 sm:py-1 md:min-w-28 md:p-2 md:pb-1 md:hover:border-b-2  md:hover:-mb-1'>Contactame</a>
              </li>
              
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navegacion
