import './index.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { BREAKPOINTS, CAROUSEL_CONFIG } from '../../constants'
import type { CarouselSlide } from '../../types'

const CAROUSEL_RESPONSIVE = {
  desktop: {
    breakpoint: BREAKPOINTS.desktop,
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: BREAKPOINTS.tablet,
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: BREAKPOINTS.mobile,
    items: 1,
    slidesToSlide: 1
  }
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'slide-1',
    className: 'slide-original',
    welcome: '',
    title: 'Projetamos o futuro do lazer no Brasil.',
    subtitle: 'Descubra o que podemos construir juntos'
  },
  {
    id: 'slide-2',
    className: 'slide-2',
    welcome: '',
    title: 'Excelência em Engenharia',
    subtitle: 'Transformamos sonhos em realidade com projetos inovadores'
  },
  {
    id: 'slide-3',
    className: 'slide-3',
    welcome: '',
    title: 'Especialistas em Parques Aquáticos',
    subtitle: 'Criando experiências inesquecíveis com segurança e inovação'
  },
  {
    id: 'slide-4',
    className: 'slide-4',
    welcome: '',
    title: 'Projetos de Resorts de Luxo',
    subtitle: 'Soluções personalizadas com os mais altos padrões de qualidade'
  }
]

function Home() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="home-carousel-wrapper" id="home">
      <Carousel
        responsive={CAROUSEL_RESPONSIVE}
        autoPlay={true}
        autoPlaySpeed={CAROUSEL_CONFIG.autoPlaySpeed}
        infinite={true}
        arrows={true}
        showDots={true}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        customTransition={CAROUSEL_CONFIG.customTransition}
        transitionDuration={CAROUSEL_CONFIG.transitionDuration}
        containerClass="home-carousel"
        dotListClass="home-carousel-dots"
        itemClass="home-carousel-item"
      >
        {CAROUSEL_SLIDES.map(slide => (
          <div key={slide.id} className={`home-section ${slide.className}`}>
            <div className="home-overlay" />
            <div className="home-content">
              {slide.welcome && <h3 className="home-welcome">{slide.welcome}</h3>}
              <h1 className="home-title">{slide.title}</h1>
              <p className="home-subtitle">{slide.subtitle}</p>
              <button
                className="home-cta-button"
                onClick={scrollToContact}
                type="button"
              >
                Solicite um projeto
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export { Home }
