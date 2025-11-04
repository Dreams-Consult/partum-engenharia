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
    welcome: 'Bem-vindo a',
    title: 'PARTUM ENGENHARIA',
    subtitle: 'Sua parceira especializada em projeto e construção de<br />parques aquáticos e resorts.'
  },
  {
    id: 'slide-2',
    className: 'slide-2',
    welcome: 'Excelência em',
    title: 'ENGENHARIA',
    subtitle: 'Transformamos sonhos em realidade com<br />projetos inovadores e sustentáveis'
  },
  {
    id: 'slide-3',
    className: 'slide-3',
    welcome: 'Especialistas em',
    title: 'PARQUES AQUÁTICOS',
    subtitle: 'Criando experiências inesquecíveis com<br />segurança e inovação'
  },
  {
    id: 'slide-4',
    className: 'slide-4',
    welcome: 'Projetos de',
    title: 'RESORTS DE LUXO',
    subtitle: 'Soluções personalizadas com os mais<br />altos padrões de qualidade'
  }
]

function Home() {
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
              <h3 className="home-welcome">{slide.welcome}</h3>
              <h1 className="home-title">{slide.title}</h1>
              <p 
                className="home-subtitle"
                dangerouslySetInnerHTML={{ __html: slide.subtitle }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export { Home }