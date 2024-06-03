import React from 'react'

function AboutMe() {
  return (
    <section className='AboutMe'>
        <span className='titleAboutMe'>{iconAboutMe} Sobre mi</span>
        <p className='textAboutMe'><br/>Hola, soy David, <span>Ing. en Sistemas Computacionales</span> me considero alguien apasionado por el desarrollo web y la programación, 
            con una gran motivación por aprender nuevastecnologías día con día, me encanta realizar pequeños proyectos que desafíen mi creatividad y habilidades, 
            trato constantemente de mejorar y optimizar tanto el código como la experiencia del usuario. <br/>
            <br/>
            Mi meta es llegar a convertirme en un gran programador y desarrollador web el cúal pueda desarrollar 
            grandes proyectos de una manera mucho mas rapida y poder desarrollarme profesionalmente en una empresa internacional.
        </p>
    </section>
  )
}

const iconAboutMe = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 iconAboutMe">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>



export default AboutMe
