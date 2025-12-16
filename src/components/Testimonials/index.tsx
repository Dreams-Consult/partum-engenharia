import './index.css'

const TESTIMONIALS_TITLE = 'O QUE NOSSOS CLIENTES DIZEM'

interface Testimonial {
  id: number
  name: string
  company: string
  project: string
  text: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo Santos',
    company: 'Guará Acqua Park',
    project: 'Parque Aquático Guará',
    text: 'A Partum Engenharia superou todas as nossas expectativas. O projeto foi entregue no prazo, com excelência técnica e total comprometimento da equipe. Nosso parque aquático é um sucesso!',
    rating: 5
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    company: 'Aqualand Resort',
    project: 'Resort Aqualand',
    text: 'Profissionais extremamente capacitados e dedicados. A qualidade das instalações e o cuidado com cada detalhe fizeram toda a diferença no resultado final. Recomendo sem hesitar!',
    rating: 5
  },
  {
    id: 3,
    name: 'João Ferreira',
    company: 'Isla Cancun Resort',
    project: 'Isla Cancun Resort',
    text: 'Trabalhar com a Partum foi uma experiência incrível. Desde o planejamento até a execução, tudo foi conduzido com profissionalismo e inovação. O resultado superou o projeto inicial!',
    rating: 5
  }
]

function Testimonials() {
  return (
    <section className='testimonials-section' id='testimonials'>
      <div className='testimonials-container'>
        <h2 className='testimonials-title'>{TESTIMONIALS_TITLE}</h2>

        <div className='testimonials-grid'>
          {TESTIMONIALS.map(testimonial => (
            <div key={testimonial.id} className='testimonial-card'>
              <div className='testimonial-stars'>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index} className='star'>★</span>
                ))}
              </div>
              <p className='testimonial-text'>"{testimonial.text}"</p>
              <div className='testimonial-author'>
                <h4 className='author-name'>{testimonial.name}</h4>
                <p className='author-company'>{testimonial.company}</p>
                <p className='author-project'>{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Testimonials }
