import './index.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { BREAKPOINTS } from '../../constants'
import BgProjetos from '../../assets/BG-PROJETOS.svg'

const CAROUSEL_RESPONSIVE = {
  desktop: {
    breakpoint: BREAKPOINTS.desktop,
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: BREAKPOINTS.tablet,
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: BREAKPOINTS.mobile,
    items: 1,
    slidesToSlide: 1
  }
}

interface Project {
  id: number
  name: string
  location: string
  gradient: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Guará Acqua Park',
    location: 'Castanhal - Pará',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    name: 'Aqualand Resort',
    location: 'Salinópolis - Pará',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    name: 'Isla Cancun Resort',
    location: 'Cardoso - SP',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    name: 'Amai Park',
    location: 'Rio Branco - Acre',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 5,
    name: 'Vale das Águas Park',
    location: 'Pitanga - Paraná',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  }
]

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className='custom-arrow custom-left-arrow' onClick={onClick} aria-label='Anterior'>
    ‹
  </button>
)

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className='custom-arrow custom-right-arrow' onClick={onClick} aria-label='Próximo'>
    ›
  </button>
)

const CustomDot = ({ onClick, active }: { onClick?: () => void; active?: boolean }) => (
  <button
    className={`custom-dot ${active ? 'active' : ''}`}
    onClick={onClick}
    aria-label='Indicador do carrossel'
  />
)

function Projects() {
  return (
    <div className='projects-section' id='projects' style={{ backgroundImage: `url(${BgProjetos})` }}>
      <div className='projects-container'>
        <h2 className='projects-title'>CONHEÇA NOSSOS PROJETOS</h2>

        <div className='projects-carousel-wrapper'>
          <Carousel
            responsive={CAROUSEL_RESPONSIVE}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition='transform 500ms ease-in-out'
            transitionDuration={500}
            containerClass='carousel-container'
            removeArrowOnDeviceType={['mobile']}
            itemClass='carousel-item'
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            showDots
            renderDotsOutside
            customDot={<CustomDot />}
          >
            {PROJECTS.map((project) => (
              <div key={project.id} className='project-card'>
                <div
                  className='project-image'
                  style={{ background: project.gradient }}
                >
                  <div className='project-overlay'>
                    <h3 className='project-name'>{project.name}</h3>
                    <p className='project-location'>{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export { Projects }
