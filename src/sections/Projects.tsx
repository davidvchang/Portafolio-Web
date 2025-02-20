import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import TechnologyUsed from '../components/TechnologyUsed'
import BtnProject from '../components/BtnProject'

import PelisDev from '../assets/img/Portadas/PelisDev.webp'
import SistemaBiblioteca from '../assets/img/Portadas/Sistema-Para-biblioteca.webp'
import Desarrollo from '../assets/img/Portadas/En-desarrollo-portada.webp'

import { Github, Link } from 'lucide-react';

const Projects:React.FC = () => {
  return (
    <section className='flex flex-col w-full h-full items-center justify-center px-0 md:px-0 bg-white py-14 dark:bg-[#1B2533]' id='projects'>

        <div className='flex flex-col gap-14 w-full px-5 md:px-0 md:w-[80%] dark:text-white'>
            <span className='text-3xl w-full text-center'>Proyectos</span>

            <div className='flex flex-wrap gap-6'>
                <ProjectContainer image={PelisDev} title='PelisDev' description='Página web de pelicula inspirada en Cuevana, está hecha en React y estilada con Tailwind, se realizó solo la parte Front - End, se puede buscar peliculas por nombre o por categoría, así como cambiar de página.' children={
                    <>
                        <TechnologyUsed text='React' id='react'/>
                        <TechnologyUsed text='Tailwind' id='tailwind'/>
                        <TechnologyUsed text='JavaScript' id='javascript'/>
                    </>
                } children2={
                    <>
                        <BtnProject link='https://github.com/davidvchang/PelisDev' icon={<Github className='w-5 h-5'/>} text='Ir al repositorio'/>
                        <BtnProject link='https://pelis-dev.netlify.app/' icon={<Link className='w-5 h-5'/>} text='Ir al sitio web'/>
                    </>
                }/>
                <ProjectContainer image={SistemaBiblioteca} title='Sistema Para Biblioteca' description='Sistema fullstack para una biblioteca en la cual permita prestar libros, así como agregar nuevos libros, poder editar, eliminar cada libro, de la misma forma para los clientes.' children={
                    <>
                        <TechnologyUsed text='React' id='react'/>
                        <TechnologyUsed text='Tailwind' id='tailwind'/>
                        <TechnologyUsed text='TypeScript' id='typescript'/>
                        <TechnologyUsed text='Express' id='express'/>
                        <TechnologyUsed text='PostgreSQL' id='postgresql'/>
                    </>
                } children2={
                    <>
                        <BtnProject link='https://github.com/davidvchang/Sistema-para-biblioteca' icon={<Github className='w-5 h-5'/>} text='Ir al repositorio'/>
                        {/* <BtnProject link='' icon={<Link className='w-5 h-5'/>} text='Ir al sitio web'/> */}
                    </>
                }/>
                <ProjectContainer image={Desarrollo} title='BarberShop' description='Sistema para una barberia en el cual le permite a los clientes agendar una cita y cancelarla, y al administrador le permite administrar las citas, los clientes, servicios, etc.' children={
                    <>
                        <TechnologyUsed text='Vue.js' id='vue'/>
                        <TechnologyUsed text='Tailwind' id='tailwind'/>
                        <TechnologyUsed text='TypeScript' id='typescript'/>
                        <TechnologyUsed text='Express' id='express'/>
                        <TechnologyUsed text='MongoDB' id='mongodb'/>
                    </>
                } children2={
                    <>
                        <BtnProject link='https://github.com/davidvchang/BarberShop' icon={<Github className='w-5 h-5'/>} text='Ir al repositorio'/>
                        {/* <BtnProject link='' icon={<Link className='w-5 h-5'/>} text='Ir al sitio web'/> */}
                    </>
                }/>
                <ProjectContainer image={PelisDev} title='TechQuality Ecommerce' description='Ecommerce para una tienda ficticia de tecnologia. Permite registrarse, iniciar sesón, agregar productos al carrito y comprar por medio de mercadopago' children={
                    <>
                        <TechnologyUsed text='React' id='react'/>
                        <TechnologyUsed text='Tailwind' id='tailwind'/>
                        <TechnologyUsed text='TypeScript' id='typescript'/>
                        <TechnologyUsed text='Express' id='express'/>
                        <TechnologyUsed text='PostgreSQL' id='postgresql'/>
                    </>
                } children2={
                    <>
                        <BtnProject link='https://github.com/davidvchang/TechQuality---Ecommerce' icon={<Github className='w-5 h-5'/>} text='Ir al repositorio'/>
                        {/* <BtnProject link='https://pelis-dev.netlify.app/' icon={<Link className='w-5 h-5'/>} text='Ir al sitio web'/> */}
                    </>
                }/>
            </div>

        </div>
      
    </section>
  )
}

export default Projects
