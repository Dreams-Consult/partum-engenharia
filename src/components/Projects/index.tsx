import './index.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { BREAKPOINTS } from '../../constants'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import pageData from '../../data/data.json'
import arrowLeft from '../../assets/SVG/ICON-SETA-ESQUERDA.svg'
import arrowRight from '../../assets/SVG/ICON-SETA-DIREITA.svg'

// Importando imagens dos projetos
import GuaraImg from '../../assets/projects/Guará Acqua Park/GUA-IMG-01.jpg'
import AqualandImg from '../../assets/projects/Aqualand Resort/AQL-IMG-001.jpeg'
import IslaCancunImg from '../../assets/projects/Isla Cancun/ISC-IMG-001.jpeg'
import ValeCachoeirasImg from '../../assets/projects/Vale das Cachoeiras/VLC-IMG-002.jpg'

// Mapeamento de imagens
const imageMap: Record<string, string> = {
  '/src/assets/projects/Guará Acqua Park/GUA-IMG-01.jpg': GuaraImg,
  '/src/assets/projects/Aqualand Resort/AQL-IMG-001.jpeg': AqualandImg,
  '/src/assets/projects/Isla Cancun/ISC-IMG-001.jpeg': IslaCancunImg,
  '/src/assets/projects/Vale das Cachoeiras/VLC-IMG-002.jpg': ValeCachoeirasImg,
}

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

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className='custom-arrow custom-left-arrow' onClick={onClick} aria-label='Anterior'>
    <img src={arrowLeft} alt='Anterior' />
  </button>
)

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className='custom-arrow custom-right-arrow' onClick={onClick} aria-label='Próximo'>
    <img src={arrowRight} alt='Próximo' />
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='projects-section' id='projects'>
      <div className='projects-container'>
        <h2 className={`projects-title scroll-animate scroll-fade-in-right ${isVisible ? 'is-visible' : ''}`}>Nossos Projetos</h2>
        <p className={`projects-subtitle scroll-animate scroll-fade-in-right delay-100 ${isVisible ? 'is-visible' : ''}`}>Construindo experiências memoráveis</p>

        <div className={`projects-carousel-wrapper scroll-animate scroll-fade-in-right delay-200 ${isVisible ? 'is-visible' : ''}`}>
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
            {pageData.projects.map((project) => (
              <div key={project.id} className='project-card'>
                <div
                  className='project-image'
                  style={{ 
                    backgroundImage: `url(${imageMap[project.image]})`,
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
    </section>
  )
}

export { Projects }
