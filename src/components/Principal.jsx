import React from "react";
import Foto from "../assets/Foto-Principal.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Principal() {

  return (
    <section className="flex flex-col w-screen justify-center items-center gap-5 md:flex-row md:justify-around md:items-center md:h-auto md:w-screen lg:w-3/4 lg:shadow lg:bg-Color-Fondo2 lg:mt-5">
      
        <div className="w-64 h-auto min-w-64 pb-5 pt-3 flex flex-col items-center">
            <img
            src={Foto}
            alt="Foto-Principal"
            className=" rounded-full p-3 w-48 h-48 md:w-48 md:h-48 lg:w-52 lg:h-52"
            />
            <div className="flex flex-row justify-center gap-2">
            <a href="https://www.linkedin.com/in/davidvchang/" target="_blank" className="w-6 h-6">
                <FaLinkedin className="w-6 h-6 text-blue-700 hover:scale-110 transition-all duration-75"/>
            </a>
            <a href="https://github.com/davidvchang" target="_blank" className="w-6 h-6">
                <FaGithubSquare className="w-6 h-6 hover:scale-110 transition-all duration-75"/>
            </a>
            </div>
            
            
        </div>
        <div className="min-w-96 pb-2 md:pb-0 md:h-60 flex flex-col items-center md:flex-col md:items-start md:justify-center">
            <h1 className="font-medium text-lg md:text-xl lg:text-2xl">Hola, mi nombre es</h1>
            <span className="text-3xl font-semibold text-red-600 md:ps-3 md:text-4xl lg:text-5xl">
            David Valenzuela
            </span>
            <br />
            <span className="text-base md:ps-5 md:text-lg lg:text-xl">
            Programador | Desarrollador Web Front - End
            </span>
            <br />

            <a href="../pdf/Curriculum Vitae.pdf" download className="max-w-48 px-6 py-3 mt-5 bg-slate-100 rounded-lg flex gap-2 md:mt-3 md:ms-5 text-red-600 font-semibold hover:bg-slate-300 border-x border-y hover:border-red-700 shadow hover:transition-colors duration-500 md:text-sm text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-700 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Descargar CV
            </a>
        </div>
    </section>
  );
}

export default Principal;
