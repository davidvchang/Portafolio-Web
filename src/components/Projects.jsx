import React from 'react'
import ProjectCard from './ui/ProjectCard'
import UsedTechnology from './ui/UsedTechnology'
import ButtonFollowLink from './ui/ButtonFollowLink'
import PortadaPortafolio from '../assets/img/Portadas/MockuUpPortafolio.webp'
import PortadaPelisDev from '../assets/img/Portadas/MockUpPelisDev.webp'
import PortadaClonX from '../assets/img/Portadas/MockUpClonX.webp'
import PortadaBiblioteca from '../assets/img/Portadas/MockUpBiblioteca.webp'

function Projects() {
  return (
    <section className='Projects' id='Projects'>
      <span className='titleProjects'>{iconProjects} Proyectos</span>
      <ProjectCard
        linkInPortada='https://biblioteca-davidvalenzuela.vercel.app/'
        image={PortadaBiblioteca}
        nameProject='Biblioteca'
        title='Biblioteca'
        description='Biblioteca creada con Express, NodeJS y MongoDB para el backend y React, JavaScript y Sass en el frontend. 
        la biblioteca consiste en la cual puedes añadir libros, editarlos y eliminarlos solamente si estás registrado e iniciaste sesión, 
        si no, solamente te deja ver los libros disponibles y buscarlos mediante género o nombre del libro.'
        btnGit={<ButtonFollowLink link='https://github.com/davidvchang/Biblioteca/' icon={iconGitHub} text='Ir al repositorio'/>}
        btnPage={<ButtonFollowLink link='https://biblioteca-davidvalenzuela.vercel.app/' icon={iconVisit} text='Ir a la página web'/>}>

        <UsedTechnology icon={iconExpressJS} text='Express' styleBG='BGJavaScript'/>
        <UsedTechnology icon={iconMongoDB} text='MongoDB' styleBG='BGMongoDB'/>
        <UsedTechnology icon={iconReact} text='React' styleBG='BGReact'/>
        <UsedTechnology icon={iconSass} text='Sass' styleBG='BGSass'/>
        <UsedTechnology icon={iconJavaScript} text='JavaScript' styleBG='BGJavaScript'/>
      </ProjectCard>

      <ProjectCard
        linkInPortada='https://davidvalenzuela.vercel.app/'
        image={PortadaPortafolio}
        nameProject='Portafolio'
        title='Portafolio'
        description='Mi portafolio web, creado con React y estilizado usando Sass, es mucho más que solo una colección de mis proyectos. 
        Aquí puedes encontrar una selección de mis trabajos más destacados, está diseñado para ser intuitivo y visualmente atractivo.'
        btnGit={<ButtonFollowLink link='https://github.com/davidvchang/Portafolio-Web' icon={iconGitHub} text='Ir al repositorio'/>}
        btnPage={<ButtonFollowLink link='https://davidvalenzuela.vercel.app/' icon={iconVisit} text='Ir a la página web'/>}>

        <UsedTechnology icon={iconReact} text='React' styleBG='BGReact'/>
        <UsedTechnology icon={iconSass} text='Sass' styleBG='BGSass'/>
        <UsedTechnology icon={iconJavaScript} text='JavaScript' styleBG='BGJavaScript'/>
      </ProjectCard>

      <ProjectCard
        linkInPortada='https://pelis-dev.netlify.app/'
        image={PortadaPelisDev}
        nameProject='PelisDev'
        title='PelisDev'
        description='Página web de pelicula inspirada en Cuevana, está hecha en React y estilada con Tailwind, 
        se realizó solo la parte Front - End, se puede buscar peliculas por nombre o por categoría, así como cambiar de página.'
        btnGit={<ButtonFollowLink link='https://github.com/davidvchang/PelisDev' icon={iconGitHub} text='Ir al repositorio'/>}
        btnPage={<ButtonFollowLink link='https://pelis-dev.netlify.app/' icon={iconVisit} text='Ir a la página web'/>}>

        <UsedTechnology icon={iconReact} text='React' styleBG='BGReact'/>
        <UsedTechnology icon={iconTailwind} text='Tailwind' styleBG='BGTailwind'/>
        <UsedTechnology icon={iconJavaScript} text='JavaScript' styleBG='BGJavaScript'/>
      </ProjectCard>

      <ProjectCard
        linkInPortada='https://clon-profile-x.netlify.app/'
        image={PortadaClonX}
        nameProject='Clon Perfil X'
        title='Clon Perfil X'
        description='Mi perfil de X(mejor conocido como Twitter), solo la parte Front end, está hecha en React y estilada con el pre-procesador Sass, 
        así como también está hecha responsiva para que se adapte a diferentes dispositivos'
        btnGit={<ButtonFollowLink link='https://github.com/davidvchang/Clon-Profile-X' icon={iconGitHub} text='Ir al repositorio'/>}
        btnPage={<ButtonFollowLink link='https://clon-profile-x.netlify.app/' icon={iconVisit} text='Ir a la página web'/>}>

        <UsedTechnology icon={iconReact} text='React' styleBG='BGReact'/>
        <UsedTechnology icon={iconTailwind} text='Sass' styleBG='BGSass'/>
        <UsedTechnology icon={iconJavaScript} text='JavaScript' styleBG='BGJavaScript'/>
      </ProjectCard>
    </section>
  )
}

const iconProjects = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 iconProjects">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

const iconReact = <svg viewBox="0 0 256 228" width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className='iconTechReact'>
    <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#2a2a2a"/>
</svg>

const iconSass = <svg viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg" width="512" height="384" className='iconTechReact'>
    <path fill="#2a2a2a" d="M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z"/>
</svg>

const iconJavaScript = <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052" className='iconTechJS'>
    <path fill="#2a2a2a" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#ffffff"/>
</svg>

const iconTailwind = <svg viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className='iconTechReact'>
<defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"><stop stop-color="#2298BD" offset="0%"></stop><stop stop-color="#0ED7B5" offset="100%"></stop></linearGradient>
</defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="#2a2a2a"></path>
</svg>

const iconMongoDB =  <svg viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid" className='iconTechReact'>
  <path fill="#2a2a2a" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"/>
</svg>
const iconExpressJS = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" className='iconTechReact'>
  <path fill="#fff" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/>
</svg>



const iconVisit = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconVisit">
<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>

const iconGitHub = <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
</svg>

export default Projects
