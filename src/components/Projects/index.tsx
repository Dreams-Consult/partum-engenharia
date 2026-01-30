import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useNavigate } from 'react-router-dom'
import pageData from '../../data/data.json'
import arrowLeft from '../../assets/SVG/ICON-SETA-ESQUERDA.svg'
import arrowRight from '../../assets/SVG/ICON-SETA-DIREITA.svg'

// Importação dinâmica de todas as imagens dos projetos
const images = import.meta.glob('../../assets/projects/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

// Função auxiliar para obter a imagem do caminho do JSON
const getImageUrl = (path: string): string => {
  const cleanPath = path.replace(/^\/src\//, '../../')
  const imageUrl = images[cleanPath]
  return imageUrl || path
}

// Função para gerar slug a partir do nome do projeto
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const navigate = useNavigate()

  const handleProjectClick = (projectName: string) => {
    const slug = generateSlug(projectName)
    navigate(`/projeto/${slug}`)
  }

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
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            className='projects-swiper'
          >
            {pageData.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div 
                  className='project-card' 
                  onClick={() => handleProjectClick(project.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <div
                    className='project-image'
                    style={{ 
                      backgroundImage: `url(${getImageUrl(project.image)})`,
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
