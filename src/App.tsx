import './App.css'
import { Topbar } from './components/TopBar'
import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'
import { Testimonials } from './components/Testimonials'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
      <Topbar />
      <Home />
      <AboutUs />
      <Testimonials />
      <Projects />
    </>
  )
}

export default App
