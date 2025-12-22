import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
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

function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='projects-section' id='projects'>
      <div className='projects-container'>
        <h2 className={`projects-title scroll-animate scroll-fade-in-right ${isVisible ? 'is-visible' : ''}`}>Nossos Projetos</h2>
        <p className={`projects-subtitle scroll-animate scroll-fade-in-right delay-100 ${isVisible ? 'is-visible' : ''}`}>Construindo experiências memoráveis</p>

        <div className={`projects-carousel-wrapper scroll-animate scroll-fade-in-right delay-200 ${isVisible ? 'is-visible' : ''}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.custom-left-arrow',
              nextEl: '.custom-right-arrow',
            }}
            pagination={{ 
              clickable: true,
              el: '.custom-dots-container'
            }}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            speed={800}
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
            className='projects-swiper'
          >
            {pageData.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className='project-card'>
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
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className='custom-arrow custom-left-arrow' aria-label='Anterior'>
            <img src={arrowLeft} alt='Anterior' />
          </button>
          <button className='custom-arrow custom-right-arrow' aria-label='Próximo'>
            <img src={arrowRight} alt='Próximo' />
          </button>
          
          <div className='custom-dots-container'></div>
        </div>
      </div>
    </section>
  )
}

export { Projects }
