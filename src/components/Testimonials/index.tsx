import './index.css'
import { QuoteCard } from '../QuoteCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const TESTIMONIALS_TITLE = 'Depoimentos'

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo Santos',
    role: 'CEO Guará Acqua Park',
    text: 'A Partum Engenharia superou todas as nossas expectativas. O projeto foi entregue no prazo, com excelência técnica e total comprometimento da equipe. Nosso parque aquático é um sucesso!',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    role: 'CEO Aqualand Resort',
    text: 'Profissionais extremamente capacitados e dedicados. A qualidade das instalações e o cuidado com cada detalhe fizeram toda a diferença no resultado final. Recomendo sem hesitar!',
  },
  {
    id: 3,
    name: 'João Ferreira',
    role: 'CEO Isla Cancun',
    text: 'Trabalhar com a Partum foi uma experiência incrível. Desde o planejamento até a execução, tudo foi conduzido com profissionalismo e inovação. O resultado superou o projeto inicial!',
  },
  {
    id: 4,
    name: 'Ana Silva',
    role: 'CEO Vale das Cachoeiras',
    text: 'Equipe profissional, comprometida e extremamente técnica. A Partum entregou um projeto que transformou nosso empreendimento em referência na região!',
  },
  {
    id: 5,
    name: 'Carlos Mendes',
    role: 'CEO Aqua Park Brasil',
    text: 'Excelente trabalho! Desde o início do projeto até a entrega final, a Partum demonstrou compromisso com a qualidade e com os prazos estabelecidos.',
  }
]

function Testimonials() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='testimonials-section' id='testimonials'>
      <div className='testimonials-container'>
        <div className={`testimonials-header scroll-animate scroll-fade-in-left ${isVisible ? 'is-visible' : ''}`}>
          <p className='testimonials-label'>{TESTIMONIALS_TITLE}</p>
          <h2 className='testimonials-title'>Histórias de confiança</h2>
          <h2 className='testimonials-title-highlight'>construídas juntos</h2>
        </div>

        <div className='testimonials-grid'>
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`scroll-animate scroll-fade-in-right delay-${(index + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
            >
              <QuoteCard
                text={testimonial.text}
                authorName={testimonial.name}
                authorRole={testimonial.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Testimonials }
