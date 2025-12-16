import './index.css'
import { useState, FormEvent } from 'react'

const CONTACT_TITLE = 'ENTRE EM CONTATO'
const CONTACT_DESCRIPTION = 'Preencha o formulário abaixo ou clique no ícone do WhatsApp no canto da tela para entrarmos em contato com você'

interface ContactInfo {
  icon: string
  title: string
  content: string
  link?: string
}

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: '📍',
    title: 'Endereço',
    content: 'São José do Rio Preto - SP'
  },
  {
    icon: '📧',
    title: 'E-mail',
    content: 'contato@partumengenharia.com.br',
    link: 'mailto:contato@partumengenharia.com.br'
  },
  {
    icon: '📱',
    title: 'Telefone',
    content: '(17) 9999-9999',
    link: 'tel:+5517999999999'
  }
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Aqui você pode integrar com um serviço de email ou API
    console.log('Form submitted:', formData)

    // Simular envio
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className='contact-section' id='contact'>
      <div className='contact-container'>
        <h2 className='contact-title'>{CONTACT_TITLE}</h2>
        <p className='contact-description'>{CONTACT_DESCRIPTION}</p>

        <div className='contact-content'>
          <div className='contact-info'>
            {CONTACT_INFO.map((info, index) => (
              <div key={index} className='info-card'>
                <div className='info-icon'>{info.icon}</div>
                <h3 className='info-title'>{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className='info-content'>{info.content}</a>
                ) : (
                  <p className='info-content'>{info.content}</p>
                )}
              </div>
            ))}
          </div>

          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='name'>Nome completo *</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Seu nome'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>E-mail *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='seu@email.com'
                />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='phone'>Telefone *</label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder='(00) 00000-0000'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='subject'>Assunto *</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder='Qual o motivo do contato?'
                />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Mensagem *</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='Conte-nos mais sobre seu projeto...'
                rows={6}
              />
            </div>

            <button
              type='submit'
              className='submit-button'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export { Contact }
