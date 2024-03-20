import './App.css'
import Forms from './components/Forms'
import Navegacion from './components/Navegacion'
import Principal from './components/Principal'

function App() {
  return (
    <main className='bg-Color-Fondo h-full w-full '>
      <div className='w-full'>
        <Navegacion/>
        <div className='flex flex-col w-full md:justify-center items-center justify-center md:w-full'>
          <Principal/>
          <Forms/>
        </div>
      </div>
    </main>
  )
}

export default App
