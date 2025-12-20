import './index.css'
import { useState, type FormEvent } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import siteConfig from '../../data/siteConfig.json'

const CONTACT_TITLE = 'Contato'
const CONTACT_DESCRIPTION = 'Preencha o formulário e entre em contato e receba um atendimento especializado para o seu projeto. Ou entre em contato pelo whatsapp'

function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    type: 'success' | 'error'
    message: string
  }>({
    isOpen: false,
    type: 'success',
    message: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://n8n.fehshop.com/webhook/partum-engenharia/captura', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          mensagem: formData.message
        })
      })

      if (response.ok) {
        setModalState({
          isOpen: true,
          type: 'success',
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setModalState({
          isOpen: true,
          type: 'error',
          message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
        })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setModalState({
        isOpen: true,
        type: 'error',
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='contact-section' id='contact'>
      <div className={`contact-container scroll-animate scroll-fade-in ${isVisible ? 'is-visible' : ''}`}>
        <div className='contact-content'>
          <form className='contact-form' onSubmit={handleSubmit}>
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

            <div className='form-group'>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Mensagem'
                rows={6}
              />
            </div>

            <div className='form-actions'>
              <button
                type='submit'
                className='submit-button'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>

          <div className='contact-info'>
            <p className='contact-label'>{CONTACT_TITLE}</p>
            <h2 className='contact-title'>
              Estamos prontos <span className='contact-title-highlight'>para o seu desafio</span>
            </h2>
            <p className='contact-description'>{CONTACT_DESCRIPTION}</p>
            <div className='contact-whatsapp'>
              <svg className='whatsapp-icon-contact' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
              </svg>
              <span className='whatsapp-number'>{siteConfig.contact.whatsapp}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmação */}
      {modalState.isOpen && (
        <div className='modal-overlay' onClick={() => setModalState({ ...modalState, isOpen: false })}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className={`modal-icon ${modalState.type}`}>
              {modalState.type === 'success' ? (
                <svg viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/>
                </svg>
              ) : (
                <svg viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/>
                </svg>
              )}
            </div>
            <h3 className='modal-title'>
              {modalState.type === 'success' ? 'Sucesso!' : 'Ops!'}
            </h3>
            <p className='modal-message'>{modalState.message}</p>
            <button 
              className='modal-button'
              onClick={() => setModalState({ ...modalState, isOpen: false })}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export { Contact }
