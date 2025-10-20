import './App.css'
import LogoWhatsapp from './assets/whatsapp-svgrepo-com.svg'
import { Topbar } from './components/TopBar'
import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'
import { Testimonials } from './components/Testimonials'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
      <a href='https://wa.me/5517996542563?text=Olá+gostaria+de+saber+mais+sobre+o+serviço.' target='_blank' >
        <img className='whatsapp-icon' src={LogoWhatsapp} alt='LogoWhatsapp' width="50" height="50" />
      </a>
      <Topbar />
      <Home />
      <AboutUs />
      <Testimonials />
      <Projects />
      <Contact />
    </>
  )
}

export default App
