import './index.css'
import { Link } from 'react-router-dom'
import BgProjetos from '../../assets/svg/BG-PROJETOS.svg'
import LogoPartum from '../../assets/svg/LOGO-COR2-V2.svg'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ABOUT_TITLE = 'Quem somos nós?'
const ABOUT_SUBTITLE = 'Engenharia que cria destinos'
const ABOUT_INTRO = 'Mais do que obras, a Partum constrói experiências. Reconhecida por sua atuação em parques aquáticos e resorts, a empresa alia conhecimento técnico, gestão eficiente e visão estratégica para entregar projetos que geram valor e diversão.'

function AboutUs() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='about-section' id='about' style={{ backgroundImage: `url(${BgProjetos})` }}>
      <div className='about-container'>
        <div className={`about-content scroll-animate scroll-fade-in-left ${isVisible ? 'is-visible' : ''}`}>
          <p className='about-label'>{ABOUT_TITLE}</p>
          <h2 className='about-title'>{ABOUT_SUBTITLE}</h2>
          <p className='about-intro'>{ABOUT_INTRO}</p>
          
          <Link to='/sobre' className='about-cta-button'>
            Saiba mais
          </Link>
        </div>
        
        <div className={`about-logo scroll-animate scroll-fade-in-right ${isVisible ? 'is-visible' : ''}`}>
          <img src={LogoPartum} alt='Partum Engenharia' />
        </div>
      </div>
    </section>
  )
}

export { AboutUs }
