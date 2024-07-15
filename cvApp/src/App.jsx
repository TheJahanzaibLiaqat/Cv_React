
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import Resume from './Pages/Resume/Resume'
import Services from './Pages/Services/Services'
import Skills from './Pages/Skills/Skills'

function App() {
  

  return (
    <>
    <Navbar />
    <Home />
   <About />
   <Services />
   <Skills />
   <Resume />
   <Portfolio />
   <Contact />
   <Header />
  
   
  
    </>
  )
}

export default App
