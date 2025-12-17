import './App.css'
import './styles/animations.css'
import LogoWhatsapp from './assets/whatsapp-svgrepo-com.svg'
import { Topbar } from './components/TopBar'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { AboutUs } from './components/AboutUs'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WHATSAPP_URL } from './constants'

function App() {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Contato via WhatsApp'
      >
        <img
          className='whatsapp-icon'
          src={LogoWhatsapp}
          alt='WhatsApp'
          width="50"
          height="50"
        />
      </a>

      <Topbar />
      <Home />
      <Projects />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
