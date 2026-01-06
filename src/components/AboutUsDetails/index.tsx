import './index.css'
import { useEffect, useState } from 'react'
import BgImage from '../../assets/IMAGEM-SOBRE.png'
import IconCrescer from '../../assets/SVG/ICONE-MISSAO-CRESCER.svg'
import IconReduzir from '../../assets/SVG/ICONE-MISSAO-REDUZIR.svg'
import IconFortalecer from '../../assets/SVG/ICONE-MISSAO-FORTALECER.svg'
import { Contact } from '../Contact'
import { Footer } from '../Footer'

function AboutUsDetails() {
  const [heroOpacity, setHeroOpacity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      const newOpacity = Math.max(0, 1 - (scrollPosition / heroHeight) * 1.5)
      setHeroOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='about-details-page'>
      <section 
        className='about-details-hero animate-fade-in' 
        style={{ 
          backgroundImage: `url(${BgImage})`,
          opacity: heroOpacity
        }}
      >
      </section>

      <div className='about-details-hero-content-wrapper'>
        <div className='about-details-hero-content'>
        </div>
      </div>

      <section className='about-details-content'>
        <div className='about-details-container'>
          <div className='about-details-section animate-slide-up'>
            <h2 className='about-details-title'>A História da Partum Engenharia: Da Visão Individual à Grande Realização</h2>
            <p className='about-details-text'>
              A jornada da Partum Engenharia começou com a visão e o propósito de um engenheiro: Paulo. Sua atuação teve início em São José do Rio Preto (SP), focado na construção de casas – incluindo diversos projetos do programa Minha Casa Minha Vida – e, logo, expandindo para condomínios. Desde o princípio, o compromisso era inabalável com a qualidade e a inovação.
            </p>
            <p className='about-details-text'>
              Foi então que um novo e desafiador horizonte se abriu: o dono de um hotel em Olímpia (SP), interessado em construir um parque aquático, recebeu a indicação de Paulo para desenvolver o projeto de uma piscina de ondas. Mesmo sem experiência específica nesse tipo de obra, Paulo enxergou na oportunidade um convite irrecusável para crescer – e aceitou o desafio.
            </p>
            <p className='about-details-text'>
              A partir daí, ele buscou parcerias e contatos com especialistas na área, adquirindo conhecimento técnico e desenvolvendo soluções inovadoras. Embora aquele primeiro projeto não tenha saído do papel, ele abriu portas: uma empresa referência em equipamentos aquáticos passou a indicar a Partum para novos empreendimentos do setor. Assim, Paulo e sua equipe começaram a atuar em projetos e obras de piscinas por todo o Brasil – e logo expandiram seu portfólio para incluir também áreas infantis e play kids.
            </p>
            <p className='about-details-text'>
              O primeiro grande projeto de um parque aquático completo veio com o Parque Isla Cancún. Depois dele, vieram outros nomes de peso, como o Aqualand e o Guará Park, consolidando a Partum como uma empresa especializada em projetos e obras para parques aquáticos e resorts de excelência.
            </p>
            <p className='about-details-text'>
              À medida que a empresa ganhava destaque, assumia projetos de maior envergadura e a demanda por gestão de obras complexas crescia, Paulo identificou a necessidade de um parceiro estratégico, alguém com vasta experiência em empreendimentos de grande porte. Foi então que Eduardo, um engenheiro com um currículo sólido em construções de shoppings centers e hipermercados, forjado em grandes construtoras do país, juntou-se à Partum. Paulo, reconhecendo o valor inestimável dessa expertise, o convidou para ser sócio, solidificando uma parceria que seria a base para escalar ainda mais o sucesso da empresa.
            </p>
            <p className='about-details-text'>
              Hoje, a Partum Engenharia é reconhecida por desenvolver empreendimentos completos, do conceito ao projeto executivo, unindo técnica, criatividade e uma paixão inabalável pelo que faz. Entre seus grandes desafios atuais está o Vale das Minas Park, o maior parque aquático do Norte do Brasil, e o Guará Forest Resort o Maior Resort de Floresta do Brasil, um marco que simboliza o quanto a Partum cresceu e o quanto ainda está pronta para conquistar novos horizontes.
            </p>
          </div>

          <div className='about-details-section animate-slide-up delay-100'>
            <h2 className='about-details-title'>Nossa Missão</h2>
            <div className='mission-cards-grid'>
              <div className='mission-card animate-slide-from-right'>
                <div className='gradient-top-left'></div>
                <div className='gradient-bottom-right'></div>
                <div className='mission-icon'>
                  <img src={IconCrescer} alt='Crescer com qualidade' />
                </div>
                <h3 className='mission-card-title'>Crescer com qualidade</h3>
                <p className='mission-card-text'>
                  Foco em gerar valor real, aumentando rentabilidade e produtividade, com entregas 
                  organizadas e investimentos estratégicos no essencial.
                </p>
              </div>

              <div className='mission-card animate-slide-from-right delay-100'>
                <div className='gradient-top-left'></div>
                <div className='gradient-bottom-right'></div>
                <div className='mission-icon'>
                  <img src={IconReduzir} alt='Reduzir riscos' />
                </div>
                <h3 className='mission-card-title'>Reduzir riscos</h3>
                <p className='mission-card-text'>
                  Atuação preventiva para minimizar riscos jurídicos, financeiros e de mercado, 
                  garantindo sustentabilidade no longo prazo.
                </p>
              </div>

              <div className='mission-card animate-slide-from-right delay-200'>
                <div className='gradient-top-left'></div>
                <div className='gradient-bottom-right'></div>
                <div className='mission-icon'>
                  <img src={IconFortalecer} alt='Fortalecer a marca' />
                </div>
                <h3 className='mission-card-title'>Fortalecer a marca</h3>
                <p className='mission-card-text'>
                  Estratégias para ampliar visibilidade, consolidar o posicionamento da Partum e 
                  impulsionar seu crescimento no mercado.
                </p>
              </div>
            </div>
          </div>

          <div className='about-details-section animate-slide-from-left delay-200'>
            <h2 className='about-details-title'>Nossa Visão</h2>
            <p className='about-details-text'>
              Transformar paisagens em destinos de felicidade, criando espaços que geram experiências memoráveis para as 
              famílias. Cada projeto nasce do equilíbrio entre técnica e emoção, unindo engenharia, criatividade e propósito 
              para construir lugares que inspiram e conectam pessoas.
            </p>
            <p className='about-details-text'>
              Nosso objetivo é tornar-nos a maior empresa de construção de parques aquáticos do Brasil, reconhecida pela 
              excelência, inovação e capacidade de transformar ideias em empreendimentos sólidos, rentáveis e 
              inesquecíveis.
            </p>
          </div>

          <div className='about-details-section animate-slide-up delay-300'>
            <h2 className='about-details-title'>Nossos Valores</h2>
            <ul className='about-details-list'>
              <li><strong>Não temos braço curto.</strong> Fazemos o que tem que ser feito.</li>
              <li><strong>Jogamos o jogo abertamente.</strong></li>
              <li><strong>Focamos no resultado.</strong></li>
              <li><strong>Segurança em primeiro lugar.</strong></li>
              <li><strong>Inovação.</strong></li>
            </ul>
          </div>

          <button className='about-details-back-button' onClick={handleGoBack} type='button'>
            Voltar ao topo
          </button>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  )
}

export { AboutUsDetails }
