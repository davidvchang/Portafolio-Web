import React from 'react'
import JavaScript from '../assets/JavaScript.webp'

function Tecnologias() {
  return (
    <section className=' rounded-2xl shadow md:bg-Color-Fondo lg:bg-Color-Fondo2 flex flex-col bg-Color-Fondo text-justify items-center h-auto pb-5 lg:w-full lg:h-3/4'>
      <h1 className='p-5 font-medium text-2xl text-red-600'>Tecnologias</h1> 
      <img src={JavaScript} alt="JavaScript Logo" className='w-20 hover:scale-105 transition-all'/>
    </section>
  )
}

export default Tecnologias
