import './index.css'
import BgProjetos from '../../assets/BG-PROJETOS.svg'
import LogoPartum from '../../assets/SVG/LOGO-COR2-V2.svg'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ABOUT_TITLE = 'Sobre a Partum'
const ABOUT_SUBTITLE = 'Engenharia que cria destinos'
const ABOUT_INTRO = 'Mais do que obras, a Partum constrói experiências. Reconhecida por sua atuação em parques aquáticos e resorts, a empresa alia conhecimento técnico, gestão eficiente e visão estratégica para entregar projetos que geram valor e diversão.'

function AboutUs() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='about-section' id='about' style={{ backgroundImage: `url(${BgProjetos})` }}>
      <div className={`about-container scroll-animate scroll-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
        <div className='about-content'>
          <p className='about-label'>{ABOUT_TITLE}</p>
          <h2 className='about-title'>{ABOUT_SUBTITLE}</h2>
          <p className='about-intro'>{ABOUT_INTRO}</p>
          
          <button className='about-cta-button' onClick={scrollToContact} type='button'>
            Saiba mais
          </button>
        </div>
        
        <div className='about-logo'>
          <img src={LogoPartum} alt='Partum Engenharia' />
        </div>
      </div>
    </section>
  )
}

export { AboutUs }
