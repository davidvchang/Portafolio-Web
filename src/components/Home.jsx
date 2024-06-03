import React from 'react'
import ProfilePhoto from '../assets/img/FotoPerfil.webp'
import CV from '../pdf/CV_David_Valenzuela.pdf'
import BtnSocial from './ui/BtnSocial'



function Home() {
  return (
    <section className='Home'>
        <div className='PhotoPresentation'>


            <div className='photoSocialNetwork'>
                <div className='photo'>
                    <img src={ProfilePhoto} alt="Foto de perfil" />
                </div>

                <div className='buttonsSocialNetwork'>
                    <BtnSocial link='https://www.linkedin.com/in/davidvalenzuelac/' icon={iconLinkedin}/>
                    <BtnSocial link='https://github.com/davidvchang' icon={iconGitHub}/>
                    <BtnSocial link='mailto:dvalenzuelachang@gmail.com' icon={iconMail}/>
                </div>

            </div>

            <div className='presentation'>
                <div className='presentationInfo'>
                    <span className='hello'>Hola, mi nombre es</span>
                    <div className='nameLastNamePresentation'>
                        <span className='namePresentation'>David</span>
                        <span className='lastNamePresentation'>Valenzuela</span>
                    </div>
                    <span className='ocupation'>Programador | Desarrollador Web Front - End</span>

                </div>

                <a href='' download={CV} className='DownloadCV'>
                    {iconDownloadCV}
                    <span>Descargar CV</span>
                </a>
            </div>

        </div>
    </section>
  )
}

const iconDownloadCV = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconDownload">
<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

const iconLinkedin = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin iconSocial">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
</svg>

const iconGitHub = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github iconSocial">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
</svg>

const iconMail = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail iconSocial">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
</svg>


export default Home
