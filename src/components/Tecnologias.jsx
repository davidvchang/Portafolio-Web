import React from 'react'
import Logos from '../Logos'

function Tecnologias() {

  return (
    <section className='w-full rounded-2xl lg:shadow md:w-full md:bg-Color-Fondo lg:bg-Color-Fondo2 flex flex-col bg-Color-Fondo text-justify items-center h-auto pb-5 lg:w-full lg:h-3/4'>
      <h1 className='p-5 font-medium text-2xl text-red-600'>Tecnologias</h1> 
      <div className='flex flex-wrap gap-5 w-screen md:w-11/12 lg:w-11/12 lg:gap-5 justify-center '>
        <div className='grid grid-cols-2 gap-5 p-5 shadow w-1/5 bg-slate-100 min-w-56 justify-items-center'>
          <img src={Logos.Csharp} alt="C# Logo" className='w-10'/>
          <img src={Logos.CPlusPlus} alt="C++ Logo" className='w-10'/>
          <img src={Logos.JS} alt="JavaScript Logo" className='w-10 scale-110'/>
          <img src={Logos.Python} alt="Python Logo" className='w-10 scale-90'/>
        </div>
        <div className='grid grid-cols-2 gap-5 p-5 shadow w-1/5 bg-slate-100 min-w-56 justify-items-center'>
          <img src={Logos.SQL} alt="SQL Server Logo" className='w-12 '/>
          <img src={Logos.MySQL} alt="MySql Logo" className='w-12 '/>
          <img src={Logos.PostgreSQL} alt="PostgreSQL Logo" className='w-12'/>
          <img src={Logos.MongoDB} alt="MongoDB Logo" className='w-12 scale-125'/>
        </div>
        <div className='grid grid-cols-3 gap-5 p-5 shadow w-1/5 bg-slate-100 min-w-56 justify-items-center'>
          <img src={Logos.HTML} alt="HTML Logo" className='w-12'/>
          <img src={Logos.CSS} alt="CSS Logo" className='w-12'/>
          <img src={Logos.SASS} alt="SASS Logo" className='w-16'/>
          <img src={Logos.Tailwind} alt="Tailwind Logo" className='w-16 scale-90'/>
          <img src={Logos.Bootstrap} alt="Bootstrap Logo" className='w-16 scale-105'/>
        </div>
        <div className='grid grid-cols-3 gap- p-5 shadow w-1/5 bg-slate-100 min-w-56 justify-items-center items-center'>
          <img src={Logos.GitHub} alt="Git Logo" className='w-9'/>
          <img src={Logos.VS} alt="Visual Studio Logo" className='w-9'/>
          <img src={Logos.VSCode} alt="Visual Studio Code Logo" className='w-9'/>
        </div>
      </div>
    </section>
  )
}

export default Tecnologias
