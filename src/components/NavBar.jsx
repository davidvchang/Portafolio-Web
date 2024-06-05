import React, {useState} from 'react'
import Nav from './ui/Nav'
import Home from './Home'

function NavBar() {

  const [openMenu, setOpenMenu] = useState(false)


  const handleNavBar = (e) => {
    e.preventDefault();
    const navBar = document.getElementById('NavBar');
    if(navBar) {
      navBar.scrollIntoView({behavior: "smooth"});
    }
    setOpenMenu(false)
  }

  const handleAboutMe = (e) => {
    e.preventDefault();
    const aboutMe = document.getElementById('AboutMe');
    if(aboutMe) {
      aboutMe.scrollIntoView({behavior: "smooth"});
    }
    setOpenMenu(false)
  }

  const handleProjects = (e) => {
    e.preventDefault();
    const projects = document.getElementById('Projects');
    if(projects) {
      projects.scrollIntoView({behavior: "smooth"});
    }
    setOpenMenu(false)
  }

  const handleContactMe = (e) => {
    e.preventDefault();
    const contactMe = document.getElementById('ContactMe');
    if(contactMe) {
      contactMe.scrollIntoView({behavior: "smooth"});
    }
    setOpenMenu(false)
  }
  
  return (
    <section className='NavBar' id='NavBar'>
      <div className='nameNav'>
          <div className='nameLastName'>
              <span className='name'>David</span>
              <span className='lastName'>Valenzuela</span>

          </div>

          <div className='navs'>
              <Nav link='' Nav='Nav' text='Inicio' handle={handleNavBar}/>
              <Nav link='' Nav='Nav' text='Sobre mi' handle={handleAboutMe}/>
              <Nav link='' Nav='Nav' text='Proyectos' handle={handleProjects}/>
              <Nav link='' Nav='Nav' text='Contactame' handle={handleContactMe}/>
          </div>
      </div>

      <div className='navsMovil'>
            <div className='nameLastName'>
              <span className='nameMovil'>D</span>
              <span className='lastNameMovil'>V</span>
            </div>

            <button className='btnMenu' onClick={() => setOpenMenu(true)}>
              {iconMenu}
            </button>

            {/* Nav Desplegable en Movil */}
            <div className={`${openMenu ? 'navDesplegable' : 'menuCerrado'} `}>
              <div className={`${!openMenu && 'containerHiddenMenu'}`}>
                <div className='containerCloseMenu'>
                  <button className='btnCloseMenu' onClick={() => setOpenMenu(false)}>
                    {iconCloseMenu}
                  </button>
                </div>

                <div className='navsMovil'>
                  <Nav link='' NavMovil='NavMovil' text='Inicio' handle={handleNavBar}/>
                  <Nav link='' NavMovil='NavMovil' text='Sobre mi' handle={handleAboutMe}/>
                  <Nav link='' NavMovil='NavMovil' text='Proyectos' handle={handleProjects}/>
                  <Nav link='' NavMovil='NavMovil' text='Contactame' handle={handleContactMe}/>
                </div>

              </div>
            </div>
          </div>
    </section>
    
  )
}

const iconMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconMenu">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

const iconCloseMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconCloseMenu">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


export default NavBar