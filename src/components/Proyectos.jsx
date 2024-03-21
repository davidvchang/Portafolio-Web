import React from 'react'
import Logos from '../Logos'
import Captura_Portafolio from '../assets/Portafolio.png'
import Randoms_Users from '../assets/Randoms_Users.png'
import Randoms_Users_Dark from '../assets/Randoms_Users_Dark.png'

function Proyectos() {

    const MostrarHoverProyecto = () => {
        const lista = document.getElementById('proyecto-hover');
        lista.classList.toggle('hidden');
      };

    const MostrarHoverGenerador = () => {
        const lista = document.getElementById('Generador-Usuarios-hover');
        lista.classList.toggle('hidden');
    }

  return (
    <section className="pb-5 lg:rounded-2xl w-full border border-slate-300 justify-center bg-Color-Fondo2 gap-5 md:h-auto md:w-screen lg:w-3/4 shadow-2xl lg:shadow lg:bg-Color-Fondo2">
      <h1 className='p-5 font-medium text-2xl text-red-600'>Proyectos</h1>
      <div className='flex flex-wrap gap-10 w-full md:w-full lg:w-full lg:gap-7 justify-center'>
        <div className='flex flex-col w-auto bg-slate-100 gap-5 shadow-xl items-center overflow-hidden h-auto' onMouseEnter={MostrarHoverProyecto} onMouseLeave={MostrarHoverProyecto}>
            <img src={Captura_Portafolio} alt="" className='h-64 w-96 min-w-96 shadow-2xl'/>
            <div className='flex flex-col justify-center items-center absolute bg-slate-700 h-64 w-96 min-w-96 opacity-90 hidden shadow-2xl transition duration-1000 ease-in-out transform' id='proyecto-hover'>
                    <a href="https://david-valenzuela.netlify.app/" target='_blank' className='w-6 h-6 absolute top-3 right-5 hover:opacity-55 hover:scale-105 hover:transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                <h3 className='text-slate-100 text-4xl'>Portafolio web</h3>
                <span className='text-slate-400 text-lg pb-3'>Portafolio web creado en React y Tailwind</span>
                <div className='flex gap-5'>
                    <img src={Logos.React} alt="React Logo" className='w-7 hover:scale-105 hover:transition-all'/>
                    <img src={Logos.Tailwind} alt="Tailwind Logo" className='w-8 hover:scale-105 hover:transition-all'/>
                </div>

            </div>
        </div>

        <div className='flex flex-col w-auto bg-slate-100 gap-5 shadow-xl items-center overflow-hidden h-auto border border-slate-300' onMouseEnter={MostrarHoverGenerador} onMouseLeave={MostrarHoverGenerador}>
            <img src={Randoms_Users} alt="Generador de usuarios" className='h-64 w-96 min-w-96 shadow-2xl'/>
            <div className='flex flex-col justify-center items-center absolute bg-slate-700 h-64 w-96 min-w-96 opacity-90 hidden shadow-2xl transition duration-1000 ease-in-out transform' id='Generador-Usuarios-hover'>
                    <a href="https://generador-usuarios-randoms.netlify.app/" target='_blank' className='w-6 h-6 absolute top-3 right-5 hover:opacity-55 hover:scale-105 hover:transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                <h3 className='text-slate-100 text-4xl'>Generador de Usuarios Randoms</h3>
                <span className='text-slate-400 text-lg pb-3'>Generador de usuarios Randoms llenado mediante una API. Creado en React y Tailwind</span>
                <div className='flex gap-5'>
                    <img src={Logos.React} alt="React Logo" className='w-7 hover:scale-105 hover:transition-all'/>
                    <img src={Logos.Tailwind} alt="Tailwind Logo" className='w-8 hover:scale-105 hover:transition-all'/>
                </div>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Proyectos
