import React from 'react'
import { Mail, Linkedin, Github, MapPin, Instagram, Twitter } from 'lucide-react';
import ContactMeCard from '../components/ContactMeCard';

const ContactMe:React.FC = () => {
  return (
    <section className='flex flex-col w-full h-full items-center justify-center bg-slate-50 py-14 dark:bg-[#101827]' id='contactme'>
        <div className='flex flex-col gap-14 w-[80%] dark:text-white items-center'>
            <span className='text-3xl w-full text-center'>Contactame</span>

            <div className='flex flex-col gap-10 items-center'>
                <span className='text-[17px]'>Puedes contactarme a traves de los siguientes medios de comunicación.</span>

                <div className='flex w-full gap-3 justify-center'>
                    <ContactMeCard link='mailto:dvalenzuelachang@gmail.com' icon={<Mail className='w-[30px] h-[30px]' strokeWidth={1.5}/>} text='dvalenzuelachang@gmail.com'/>
                    <ContactMeCard link='https://www.linkedin.com/in/davidvalenzuelac/' icon={<Linkedin className='w-[30px] h-[30px]' strokeWidth={1.5}/>} text='@davidvalenzuelac'/>
                    <ContactMeCard link='https://github.com/davidvchang' icon={<Github className='w-[30px] h-[30px]' strokeWidth={1.5}/>} text='@davidvchang'/>
                
                    <div className='flex flex-col bg-white dark:bg-gray-800 items-center p-5 rounded-md border border-slate-300 dark:border-[#1B395C] hover:text-white hover:bg-[#1D99EC] hover:transition duration-300 select-none'>
                        <MapPin className='w-[30px] h-[30px]' strokeWidth={1.5}/>
                        <span className='text-[17px] font-light'>Guamuchil, Sinaloa, México</span>
                    </div>
                </div>

                <span className='text-[17px]'>Otras redes sociales</span>

                <div className='flex gap-5'>
                    <a href="https://www.instagram.com/davidchang.dev/" target='_blank' className='hover:text-slate-500 dark:hover:brightness-80 hover:transition duration-300'>
                        <Instagram className='w-6 h-6'/>
                    </a>

                    <a href="https://x.com/DavidChangDev/" target='_blank' className='hover:text-slate-500 dark:hover:brightness-80 hover:transition duration-300'>
                        <Twitter className='w-6 h-6'/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
