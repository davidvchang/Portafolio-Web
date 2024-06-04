import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <main className="main">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </main>
  )
}

export default App
