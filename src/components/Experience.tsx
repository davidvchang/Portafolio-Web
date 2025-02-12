import React from 'react'
import { ChevronDown, BriefcaseBusiness, CalendarDays } from 'lucide-react';

interface PropsExperience {
    position: string,
    company: string,
    time: string
}

const Experience:React.FC<PropsExperience> = ({position, company, time}) => {
  return (
    <div className='w-full h-full flex justify-center'>
        <div className='flex flex-col p-8 w-[80%] bg-gray-700 rounded-lg border border-slate-600'>
            <div className='flex justify-between'>
                <span className='text-[28px] font-normal'>{position}</span>

                <button className='w-fit h-fit p-2 bg-white rounded hover:brightness-90 hover:transition duration-300 cursor-pointer'>
                    <ChevronDown className='w-6 h-6 text-black'/>
                </button>

            </div>

            <div className='flex items-center gap-2'>
                <BriefcaseBusiness className='w-[1.40rem] h-[1.40rem] text-sky-500' strokeWidth={1.5}/>
                <span className='text-sky-500 text-lg'>{company}</span>
            </div>

            <div className='flex items-center gap-2'>
                <CalendarDays className='w-[1.40rem] h-[1.40rem] text-[#9498A0]' strokeWidth={1.5}/>
                <span className='text-[#9498A0] text-lg'>{time}</span>
            </div>
        </div>
    </div>
  )
}

export default Experience
