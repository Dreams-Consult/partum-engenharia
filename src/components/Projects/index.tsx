import './index.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { BREAKPOINTS } from '../../constants'

// Importando imagens dos projetos
import GuaraImg from '../../assets/projects/Guará Acqua Park/GUA-IMG-01.jpg'
import AqualandImg from '../../assets/projects/Aqualand Resort/AQL-IMG-001.jpeg'
import IslaCancunImg from '../../assets/projects/Isla Cancun/ISC-IMG-001.jpeg'
import ValeCachoeirasImg from '../../assets/projects/Vale das Cachoeiras/VLC-IMG-002.jpg'

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
  image: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Guará Acqua Park',
    location: 'Castanhal - Pará',
    image: GuaraImg
  },
  {
    id: 2,
    name: 'Aqualand Resort',
    location: 'Salinópolis - Pará',
    image: AqualandImg
  },
  {
    id: 3,
    name: 'Isla Cancun Resort',
    location: 'Cardoso - SP',
    image: IslaCancunImg
  },
  {
    id: 4,
    name: 'Vale das Águas Park',
    location: 'Pitanga - Paraná',
    image: ValeCachoeirasImg
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
    <div className='projects-section' id='projects'>
      <div className='projects-container'>
        <h2 className='projects-title'>Nossos Projetos</h2>
        <p className='projects-subtitle'>Construindo experiências memoráveis</p>

        <div className='projects-carousel-wrapper'>
          <Carousel
            responsive={CAROUSEL_RESPONSIVE}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition='transform 500ms ease-in-out'
            transitionDuration={500}
            containerClass='carousel-container'
            removeArrowOnDeviceType={['mobile']}
            itemClass='carousel-item'
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            showDots={true}
            renderDotsOutside={true}
            customDot={<CustomDot />}
            pauseOnHover={true}
            shouldResetAutoplay={false}
            rewind={false}
            rewindWithAnimation={false}
          >
            {PROJECTS.map((project) => (
              <div key={project.id} className='project-card'>
                <div
                  className='project-image'
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
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
