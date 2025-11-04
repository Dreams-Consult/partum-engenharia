import './index.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { Card } from '../Card'
import { BREAKPOINTS } from '../../constants'

const CAROUSEL_RESPONSIVE = {
  desktop: {
    breakpoint: BREAKPOINTS.desktop,
    items: 2
  },
  mobile: {
    breakpoint: BREAKPOINTS.mobile,
    items: 1
  }
}

const PROJECTS_DESCRIPTION = 'Atuamos em diversos outros projetos pelo Brasil como do Amai Park em Rio Branco no Acre, Vale das Águas Park em Pitanga no Paraná e Águas de Olimpia em Olimpia-SP, sempre buscando a melhor solução visando qualidade para os usuários e menor custo de manutenção e operação para o Parque e Resort.'

const CARD_COUNT = 5

function Projects() {
  const renderCards = () => {
    return Array.from({ length: CARD_COUNT }, (_, index) => (
      <div key={`card-${index}`}>
        <Card />
      </div>
    ))
  }

  return (
    <div className='Projects' id="projects">
      <div>
        <h2>Confira abaixo</h2>
        <h1>ALGUNS DE NOSSOS PROJETOS</h1>
        
        <div>
          <Carousel
            centerMode
            infinite
            focusOnSelect
            responsive={CAROUSEL_RESPONSIVE}
          >
            {renderCards()}
          </Carousel>
        </div>
      </div>

      <div>
        <h1>OUTROS PROJETOS</h1>
        <h3>{PROJECTS_DESCRIPTION}</h3>
        
        <h2>OBRAS EM ANDAMENTO</h2>
        <div>
          <Carousel
            centerMode
            infinite
            focusOnSelect
            responsive={CAROUSEL_RESPONSIVE}
          >
            {renderCards()}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export { Projects }