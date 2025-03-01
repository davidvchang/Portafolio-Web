import React from 'react'
import ProfilePhoto from '../assets/img/FotoPerfil.webp'

const Home:React.FC = () => {
  return (
    <div className='flex w-full h-[100vh] items-center justify-center' id='home'>
        <div className='flex w-full flex-col-reverse pt-16 lg:pt-0 gap-10 lg:gap-0 items-center justify-center  lg:w-[70%] 2xl:w-[65%] h-[100vh] lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex flex-col gap-7'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-light dark:text-white text-center lg:text-start'>Hola, mi nombre es</h1>
                    <span className='text-6xl font-semibold text-[#1C99EC] text-center lg:text-start'>David Valenzuela</span>
                    <span className='text-2xl font-light text-slate-600 dark:text-slate-300 text-center lg:text-start'>Ing. en Sistemas Computacionales</span>
                </div>
                <div className='flex justify-center lg:justify-start'>
                    <a href="https://drive.google.com/file/d/1YAkwZtXxrJ_fO1OVyi9_shz-eEe8-XJK/view?usp=sharing" target='_blank' className='w-fit h-fit px-16 py-3 rounded bg-[#1C99EC] text-white font-medium hover:brightness-95 hover:transition duration-300'>Ver CV</a>

                </div>
            </div>

            <div className='min-w-72 min-h-72 rounded-full relative border-4 border-blue-500 bg-[#7193BE]'>
                <img src={ProfilePhoto} alt="FotoPerfil" className='w-full h-80 object-cover absolute rounded-full bottom-0'/>
            </div>

        </div>
      
    </div>
  )
}

export default Home
