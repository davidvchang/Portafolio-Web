import ContactMe from "./sections/ContactMe"
import Home from "./sections/Home"
import NavBar from "./sections/NavBar"
import ProfessionalExperience from "./sections/ProfessionalExperience"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {

  return (
    <main className="bg-slate-50 w-[100vw] min-h-screen dark:bg-[#101827]">
      <NavBar/>
      <Home/>
      <Projects/>
      <Skills/>
      <ProfessionalExperience/>
      <ContactMe/>
    </main>
  )
}

export default App
