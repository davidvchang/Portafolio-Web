import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <main className="bg-slate-50 w-[100vw] min-h-screen dark:bg-[#101827]">
      <NavBar/>
      <Home/>
      <Projects/>
      <Skills/>
    </main>
  )
}

export default App
