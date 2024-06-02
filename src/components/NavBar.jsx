import React from 'react'
import Nav from './ui/Nav'

function NavBar() {
  return (
    <section className='NavBar'>
        <div className='nameNav'>
            <div className='nameLastName'>
                <span className='name'>David</span>
                <span className='lastName'>Valenzuela</span>

            </div>

            <div className='navs'>
                <Nav link='' text='Inicio'/>
                <Nav link='' text='Sobre mi'/>
                <Nav link='' text='Proyectos'/>
                <Nav link='' text='Contactame'/>
            </div>
        </div>
    </section>
  )
}

export default NavBar