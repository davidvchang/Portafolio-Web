import React from 'react'

interface PropsTechnology {
    text: string,
    id?: string
}

const TechnologyUsed:React.FC<PropsTechnology> = ({ text, id }) => {
  return (
    <div className={`w-fit h-fit px-3 rounded-full flex items-center justify-center text-white  select-none 
    ${id === "react" && "bg-sky-600"}
    ${id === "tailwind" && "bg-sky-700"}
    ${id === "typescript" && "bg-sky-600"}
    ${id === "postgresql" && "bg-blue-500"}
    ${id === "express" && "bg-green-600"}
    ${id === "mongodb" && "bg-green-700"}
    ${id === "vue" && "bg-green-800"}
    ${id === "javascript" && "bg-yellow-600"}
    `} id={id}>
        <span className=' text-sm font-light'>{text}</span>
    </div>
  )
}

export default TechnologyUsed
