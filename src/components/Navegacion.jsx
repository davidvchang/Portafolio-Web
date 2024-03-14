import React from 'react'

function Navegacion() {
  return (
    <nav>
      <div className='flex justify-between flex-1'>
        <div className='flex items-center flex-1'>
          <span className='ml-10 p-2'>Logo</span>
        </div>

        <div className='lg:flex md-flex lg:flex-1 items center justify-between'>
          <ul>
              <li className='flex gap-10 p-1'>
                  <a href="" className='p-2 hover:border-b-2'>Sobre mi</a>
                  <a href="" className='p-2 hover:border-b-2'>Habilidades</a>
                  <a href="" className='p-2 hover:border-b-2'>Proyectos</a>
                  <a href="" className='p-2 hover:border-b-2'>Contactame</a>
              </li>
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navegacion
