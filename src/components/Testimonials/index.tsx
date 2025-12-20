import './index.css'
import { QuoteCard } from '../QuoteCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import pageData from '../../data/data.json'

const TESTIMONIALS_TITLE = 'Depoimentos'

function Testimonials() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='testimonials-section' id='testimonials'>
      <div className='testimonials-container'>
        <div className='testimonials-grid'>
          {/* Título no primeiro espaço */}
          <div className={`testimonials-header-card scroll-animate scroll-fade-in-left ${isVisible ? 'is-visible' : ''}`}>
            <p className='testimonials-label'>{TESTIMONIALS_TITLE}</p>
            <h2 className='testimonials-title'>Histórias de confiança</h2>
            <h2 className='testimonials-title-highlight'>construídas juntos</h2>
          </div>

          {/* Cards de depoimentos */}
          {pageData.testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`scroll-animate scroll-fade-in-right delay-${(index + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
            >
              <QuoteCard
                text={testimonial.text}
                authorName={testimonial.name}
                authorRole={`${testimonial.description} - ${testimonial.company}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Testimonials }
