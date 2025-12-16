import './index.css'

const ABOUT_TITLE = 'A PARTUM ENGENHARIA'
const ABOUT_INTRO = 'Somos uma empresa de engenharia experiente, sediada em São José do Rio Preto – SP, especializada na criação e construção de Parques aquáticos e Resorts, atrações como Piscina de ondas, Rio lento, Piscinas Kids, Toboáguas e Piscinas Tematizadas.'

interface Service {
  id: number
  icon: string
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    id: 1,
    icon: '🏗️',
    title: 'Projetos Completos',
    description: 'Desenvolvimento de projetos executivos de parques aquáticos e resorts com soluções personalizadas'
  },
  {
    id: 2,
    icon: '🎢',
    title: 'Atrações Aquáticas',
    description: 'Piscinas de ondas, rios lentos, toboáguas e piscinas tematizadas de última geração'
  },
  {
    id: 3,
    icon: '🔧',
    title: 'Engenharia Especializada',
    description: 'Equipe técnica altamente qualificada com experiência em grandes empreendimentos'
  },
  {
    id: 4,
    icon: '✅',
    title: 'Qualidade e Segurança',
    description: 'Cumprimento rigoroso de normas técnicas e padrões internacionais de segurança'
  },
  {
    id: 5,
    icon: '💡',
    title: 'Inovação',
    description: 'Tecnologias inovadoras e sustentáveis aplicadas em cada projeto'
  },
  {
    id: 6,
    icon: '🤝',
    title: 'Consultoria',
    description: 'Acompanhamento completo desde a concepção até a entrega do empreendimento'
  }
]

function AboutUs() {
  return (
    <section className='about-section' id='about'>
      <div className='about-container'>
        <h2 className='about-title'>{ABOUT_TITLE}</h2>
        <p className='about-intro'>{ABOUT_INTRO}</p>

        <div className='services-grid'>
          {SERVICES.map(service => (
            <div key={service.id} className='service-card'>
              <div className='service-icon'>{service.icon}</div>
              <h3 className='service-title'>{service.title}</h3>
              <p className='service-description'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { AboutUs }
