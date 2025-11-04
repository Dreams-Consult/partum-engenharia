import './index.css'
import { Card } from '../Card'

const TESTIMONIALS_TITLE = 'POR QUE ESCOLHER A Partum Engenharia?'
const TESTIMONIALS_TEXT = 'Com nossa equipe altamente qualificada, conhecimento técnico e compromisso com a excelência, garantimos que seu parque aquático seja construído com qualidade, segurança e inovação.'

function Testimonials() {
  return (
    <div className='Testimonials' id="testimonials">
      <div className='left'>
        <div>
          <h1>{TESTIMONIALS_TITLE}</h1>
          <h4>{TESTIMONIALS_TEXT}</h4>
        </div>
        <Card />
      </div>

      <div className='right'>
        <Card />
        <Card />
      </div>
    </div>
  )
}

export { Testimonials }
