import './index.css'
import { Card } from "../Card"

function AboutUs () {
  return (
    <>
      <h1>Quem somos?</h1>
      <h3>Somos uma empresa de engenharia experiente, sediada em São José do Rio Preto – SP, especializada na criação e construção de Parques aquáticos e Resorts, atrações como Piscina de ondas, Rio lento, Piscinas Kids e Toboáguas e Piscinas Tematizadas.</h3>
      <div className="Skill">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="Skill" style={{'marginTop': '100px'}}>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export { AboutUs }
