import React from 'react'
import SobreMi from './SobreMi'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'

function Forms() {
  return (
    <>
      <div className="flex flex-col w-full gap-5 pl-0 py-5 md:bg-Color-Fondo lg:w-3/4 lg:flex-row lg:gap-0">
        <SobreMi/>
        <Tecnologias/>
      </div>
      <Proyectos/>
    </>
  )
}

export default Forms
