import React, { useState } from 'react'
import DV from '../assets/DV.webp'
import SobreMi from './SobreMi';

function Navegacion() {
  
  const AbrirMenu = () => {
    const lista = document.getElementById('lista');
    lista.classList.toggle('hidden');
  };

  
  return (
    <nav>
      <div className='flex flex-row justify-between w-full shadow md:flex md:flex-row md:min-w-min md:shadow'>
        <div className='flex flex-row items-center md:flex md:gap-0 md:items-center md:ms-16'>
          <img src={DV} alt="DV Logo" className='p-1 min-w-16 w-16 h-16 lg:w-20 lg:h-20'/>  
        </div>

        <div className='flex items-center mr-0 mt-1 justify-center py-3 px-0 md:justify-between lg:justify-between md:mr-10 lg:mr-36'>
          <ul>
            <button className='pr-5 md:hidden transition ease-linear duration-1000' onClick={AbrirMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <div className='w-full shadow-2xl h-auto bg-slate-100 md:bg-Color-Fondo md:shadow-none absolute top-0 right-0 md:relative hidden md:w-auto md:block transition ease-linear duration-1000'  id='lista'>
              <button className='p-5 md:hidden float-right transition ease-linear duration-1000' onClick={AbrirMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <li className='flex flex-col w-full pb-5 gap-5 md:flex md:flex-row md:gap-5 md:p-1 lg:gap-20 items-center'>
                <a href="./SobreMi.jsx" className='w-28 p-5 hover:opacity-50 md:p-2 md:pb-1 md:hover:-mb-1 md:hover:border-b-2 md:hover:border-black hover:transition-opacity text-xs md:text-sm lg:text-base'>Sobre mi</a>
                <a href="" className='w-28 p-5 hover:opacity-50 md:p-2 md:pb-1 md:hover:-mb-1 md:hover:border-b-2 md:hover:border-black hover:transition-opacity text-xs md:text-sm lg:text-base'>Habilidades</a>
                <a href="" className='w-28 p-5 hover:opacity-50 md:min-w-24 md:p-2 md:pb-1 md:hover:-mb-1 md:hover:border-b-2 md:hover:border-black hover:transition-opacity text-xs md:text-sm lg:text-base'>Proyectos</a>
                <a href="" className='w-28 p-5 hover:opacity-50 md:min-w-28 md:p-2 md:pb-1 md:hover:-mb-1 md:hover:border-b-2 md:hover:border-black hover:transition-opacity text-xs md:text-sm lg:text-base'>Contactame</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navegacion
