import './index.css'
import { useEffect } from 'react'
import BgImage from '../../assets/IMAGEM-SOBRE.png'
import IconCrescer from '../../assets/SVG/ICONE-MISSAO-CRESCER.svg'
import IconReduzir from '../../assets/SVG/ICONE-MISSAO-REDUZIR.svg'
import IconFortalecer from '../../assets/SVG/ICONE-MISSAO-FORTALECER.svg'

function AboutUsDetails() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='about-details-page'>
      <section className='about-details-hero' style={{ backgroundImage: `url(${BgImage})` }}>
        <div className='about-details-hero-content'>
        </div>
      </section>

      <section className='about-details-content'>
        <div className='about-details-container'>
          <div className='about-details-section'>
            <h2 className='about-details-title'>Nossa História</h2>
            <p className='about-details-text'>
              A história da Partum Engenharia começou com dois engenheiros — Paulo e Eduardo — que compartilhavam o 
              mesmo propósito: transformar ideias em grandes realizações.
            </p>
            <p className='about-details-text'>
              No início, o foco era construir casas em Ouro Preto (MG), incluindo diversos projetos do programa Minha Casa 
              Minha Vida. Com o tempo, eles passaram a atuar também em condomínios, sempre com o olhar voltado à 
              qualidade e à inovação.
            </p>
            <p className='about-details-text'>
              Foi então que um novo desafio cruzou o caminho da dupla: o dono de um hotel em Olímpia (SP), interessado em 
              construir um parque aquático, recebeu a indicação de Paulo e Eduardo para desenvolver o projeto de uma 
              piscina de ondas. Mesmo sem experiência nesse tipo de obra, eles enxergaram na oportunidade um convite para crescer — e 
              aceitaram o desafio.
            </p>
            <p className='about-details-text'>
              A partir daí, buscaram parcerias e contatos com especialistas na área, adquirindo conhecimento técnico e 
              desenvolvendo soluções inovadoras. Embora aquele primeiro projeto não tenha saído do papel, ele abriu portas: uma empresa referência em 
              equipamentos aquáticos passou a indicar a Partum para novos projetos do setor. Assim, os engenheiros 
              começaram a atuar em projetos e obras de piscinas por todo o Brasil — e logo expandiram seu portfólio para 
              incluir também áreas infantis e play kids.
            </p>
            <p className='about-details-text'>
              O primeiro grande projeto de um parque aquático completo veio com o Parque Isla Cancún. Depois dele, vieram 
              outros nomes de peso, como o Aqualand e o Guará Park, consolidando a Partum como uma empresa 
              especializada em projetos e obras para parques aquáticos e resorts.
            </p>
            <p className='about-details-text'>
              Hoje, a Partum Engenharia é reconhecida por desenvolver empreendimentos completos, do conceito ao projeto 
              executivo, unindo técnica, criatividade e paixão pelo que faz. Entre seus grandes desafios atuais está o Vale das Minas Park, o maior parque aquático do Norte do Brasil, um 
              marco que simboliza o quanto a Partum cresceu e o quanto ainda está pronta para conquistar.
            </p>
          </div>

          <div className='about-details-section'>
            <h2 className='about-details-title'>Nossa Missão</h2>
            <div className='mission-cards-grid'>
              <div className='mission-card'>
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

              <div className='mission-card'>
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

              <div className='mission-card'>
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

          <div className='about-details-section'>
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

          <div className='about-details-section'>
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
    </div>
  )
}

export { AboutUsDetails }
