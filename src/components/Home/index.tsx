import './index.css'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import arrowLeft from '../../assets/SVG/ICON-SETA-ESQUERDA.svg'
import arrowRight from '../../assets/SVG/ICON-SETA-DIREITA.svg'
import siteConfig from '../../data/siteConfig.json'

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
        {siteConfig.banner.slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div 
              className="home-section"
              style={{
                backgroundImage: `url(/src/assets/${slide.image})`
              }}
            >
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
