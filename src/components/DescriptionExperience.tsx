import React from 'react'
import { ChevronRight } from 'lucide-react';

interface PropsDescription {
    description: string
}

const DescriptionExperience:React.FC<PropsDescription> = ({description}) => {
  return (
    <div className='flex items-center gap-2'>
      <ChevronRight className='min-w-7 min-h-7 text-sky-500'/>
      <p className='text-[17px]'>{description}</p>
    </div>
  )
}

export default DescriptionExperience
