import React from 'react'
import SobreMi from './SobreMi'
import Tecnologias from './Tecnologias'

function Forms() {
  return (
    <div className="flex w-screen gap-5 lg:gap-0 md:bg-Color-Fondo pl-0 py-5 lg:w-3/4 flex-col lg:flex-row">
      <SobreMi/>
      <Tecnologias/>
      
    </div>
  )
}

export default Forms
