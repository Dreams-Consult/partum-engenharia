import './index.css'
import { Card } from '../Card'

const ABOUT_TEXT = 'Somos uma empresa de engenharia experiente, sediada em São José do Rio Preto – SP, especializada na criação e construção de Parques aquáticos e Resorts, atrações como Piscina de ondas, Rio lento, Piscinas Kids e Toboáguas e Piscinas Tematizadas.'

function AboutUs() {
  return (
    <div className='AboutUs' id="about">
      <h1>Quem somos?</h1>
      <h3>{ABOUT_TEXT}</h3>

      <div className="Skill">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="Skill">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export { AboutUs }
