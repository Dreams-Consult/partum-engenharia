import './index.css'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import type { CarouselSlide } from '../../types'
import arrowLeft from '../../assets/SVG/ICON-SETA-ESQUERDA.svg'
import arrowRight from '../../assets/SVG/ICON-SETA-DIREITA.svg'
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
  const [bannerOpacity, setBannerOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      const newOpacity = Math.max(0, 1 - (scrollPosition / heroHeight) * 1.5)
      setBannerOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="home-carousel-wrapper" id="home" style={{ opacity: bannerOpacity }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.home-custom-left-arrow',
          nextEl: '.home-custom-right-arrow'
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className="home-carousel"
      >
        {CAROUSEL_SLIDES.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className={`home-section ${slide.className}`}>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="home-custom-left-arrow custom-arrow">
        <img src={arrowLeft} alt="Anterior" />
      </button>
      <button className="home-custom-right-arrow custom-arrow">
        <img src={arrowRight} alt="Próximo" />
      </button>
    </section>
  )
}

export { Home }
