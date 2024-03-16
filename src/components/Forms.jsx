import React from 'react'
import Tarjetas from './Tarjetas'

function Forms() {
  return (
    <div className="grid w-screen md:bg-Color-Fondo lg:bg-Color-Fondo2 p-7 shadow grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-5  lg:w-3/4  lg:grid-cols-4 gap-5 justify-center">
      <Tarjetas/>
      
    </div>
  )
}

export default Forms
