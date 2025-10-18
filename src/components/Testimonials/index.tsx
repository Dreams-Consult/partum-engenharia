import { Card } from '../Card'
import './index.css'

function Testimonials () {
  return (
    <div className='Testimonials'>
      <div className='left'>
        <div>
          <h1>POR QUE ESCOLHER A
Partum Engenharia?</h1>
          <h4>Com nossa equipe altamente qualificada, conhecimento técnico e compromisso com a excelência, garantimos que seu parque aquático seja construído com qualidade, segurança e inovação.</h4>
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
