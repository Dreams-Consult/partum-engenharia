import './index.css'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { Card } from '../Card';

function Projects () {

  const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2
  // },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className='Projects'>
      <div>
        <h2>Confira abaixo</h2>
      <h1>ALGUNS DE NOSSOS PROJETOS</h1>
      <div>
        <Carousel
          centerMode
          infinite
          focusOnSelect
          responsive={responsive}>

            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
        </Carousel>
      </div>
      </div>

      <div>
        <h1>OUTROS PROJETOS</h1>
      <h3>Atuamos em diversos outros projetos pelo Brasil como do Amai Park em Rio Branco no Acre, Vale das Águas Park em Pitanga no Paraná e Águas de Olimpia em Olimpia-SP, sempre buscando a melhor solução visando qualidade para os usuários e menor custo de manutenção e operação para o Parque e Resort.</h3>
      <h2>OBRAS EM ANDAMENTO</h2>
      <div>
        <Carousel
          centerMode
          infinite
          focusOnSelect
          responsive={responsive}>

            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
        </Carousel>
      </div>
      </div>
    </div>
  )
}

export { Projects }
