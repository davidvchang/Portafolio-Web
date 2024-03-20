import './App.css'
import Forms from './components/Forms'
import Navegacion from './components/Navegacion'
import Principal from './components/Principal'

function App() {
  return (
    <main className='bg-Color-Fondo h-full'>
      <div className='container'>
        <Navegacion/>
        <div className='flex flex-col w-screen md:justify-center items-center justify-center md:w-screen'>
          <Principal/>
          <Forms/>
        </div>
      </div>
    </main>
  )
}

export default App
