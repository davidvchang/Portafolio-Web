import React from 'react'
import Nav from './ui/Nav'

function NavBar() {


  const handleNavBar = (e) => {
    e.preventDefault();
    const navBar = document.getElementById('NavBar');
    if(navBar) {
      navBar.scrollIntoView({behavior: "smooth"});
    }
  }

  const handleAboutMe = (e) => {
    e.preventDefault();
    const aboutMe = document.getElementById('AboutMe');
    if(aboutMe) {
      aboutMe.scrollIntoView({behavior: "smooth"});
    }
  }

  const handleProjects = (e) => {
    e.preventDefault();
    const projects = document.getElementById('Projects');
    if(projects) {
      projects.scrollIntoView({behavior: "smooth"});
    }
  }

  const handleContactMe = (e) => {
    e.preventDefault();
    const contactMe = document.getElementById('ContactMe');
    if(contactMe) {
      contactMe.scrollIntoView({behavior: "smooth"});
    }
  }
  
  return (
    <section className='NavBar' id='NavBar'>
        <div className='nameNav'>
            <div className='nameLastName'>
                <span className='name'>David</span>
                <span className='lastName'>Valenzuela</span>

            </div>

            <div className='navs'>
                <Nav link='' text='Inicio' handle={handleNavBar}/>
                <Nav link='' text='Sobre mi' handle={handleAboutMe}/>
                <Nav link='' text='Proyectos' handle={handleProjects}/>
                <Nav link='' text='Contactame' handle={handleContactMe}/>
            </div>
        </div>
    </section>
  )
}

export default NavBar