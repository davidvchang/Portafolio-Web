import React from 'react'

const Home:React.FC = () => {
  return (
    <div className='flex w-full h-[100vh] items-center justify-center'>
        <div className='flex w-[70%] h-[100vh] items-center justify-between'>
            <div className='flex flex-col gap-7'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-light'>Hola, mi nombre es</h1>
                    <span className='text-6xl font-semibold text-blue-500'>David Valenzuela</span>
                    <span className='text-2xl font-light text-slate-600'>Ing. en Sistemas Computacionales</span>
                </div>
                <a href="" className='w-fit h-fit px-16 py-3 rounded bg-blue-500 text-white font-medium hover:brightness-95 hover:transition duration-300'>Ver CV</a>
            </div>

            <div className='w-60 h-60 rounded-full bg-red-300 '>
                <img src="" alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default Home
