import './index.css'
import { useState, type FormEvent } from 'react'

const CONTACT_TITLE = 'Contato'
const CONTACT_SUBTITLE = 'Estamos prontos para o seu desafio'
const CONTACT_DESCRIPTION = 'Preencha o formulário e entre em contato e receba um atendimento especializado para o seu projeto. Ou entre em contato pelo whatsapp'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
        <h3 className='contact-subtitle'>{CONTACT_SUBTITLE}</h3>
        <p className='contact-description'>{CONTACT_DESCRIPTION}</p>

        <div className='contact-content'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-row'>
              <div className='form-group'>
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
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='Seu Email'
                />
              </div>

              <div className='form-group'>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder='Seu Telefone'
                />
              </div>
            </div>

            <div className='form-group'>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='Mensagem'
                rows={6}
              />
            </div>

            <button
              type='submit'
              className='submit-button'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>

          <div className='contact-info'>
            <div className='contact-phone'>
              <h3>(17) 99775-1918</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Contact }
