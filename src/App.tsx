import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {

  return (
    <main className="bg-slate-50 w-[100vw] min-h-screen dark:bg-[#101827]">
      <NavBar/>
      <Home/>
    </main>
  )
}

export default App
