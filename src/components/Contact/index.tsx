import './index.css'
import { Card } from '../Card'

const CONTACT_TITLE = 'ENTRE EM CONTATO'
const CONTACT_DESCRIPTION = 'Preencha o formulário abaixo, ou clique no ícone do WhatsApp no canto da tela para que possamos conversar'

function Contact() {
  return (
    <div className='Contact' id="contact">
      <h1>{CONTACT_TITLE}</h1>
      <h3>{CONTACT_DESCRIPTION}</h3>
      <Card />
    </div>
  )
}

export { Contact }
