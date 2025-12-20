import './index.css'
import logo from '../../assets/SVG/LOGO-COR2-H1.svg'
import whatsappIcon from '../../assets/SVG/ICON-WHATS-NEW.svg'
import instagramIcon from '../../assets/SVG/ICON-INSTA-NEW.svg'
import siteConfig from '../../data/siteConfig.json'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <img src={logo} alt='Partum Engenharia' />
        </div>
        
        <div className='footer-info'>
          <a 
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
            target='_blank'
            rel='noopener noreferrer'
            className='footer-item footer-link'
          >
            <img src={whatsappIcon} alt='WhatsApp' className='footer-icon' />
            <span className='footer-text'>{siteConfig.contact.phone}</span>
          </a>

          <a 
            href={`mailto:${siteConfig.contact.email}`}
            className='footer-item footer-link'
          >
            <svg className='footer-icon' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
            </svg>
            <span className='footer-text'>{siteConfig.contact.email}</span>
          </a>

          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address.full)}`}
            target='_blank'
            rel='noopener noreferrer'
            className='footer-item footer-link'
          >
            <svg className='footer-icon' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/>
            </svg>
            <span className='footer-text'>{siteConfig.contact.address.full}</span>
          </a>

          <a 
            href={siteConfig.contact.instagramUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='footer-item footer-link'
          >
            <img src={instagramIcon} alt='Instagram' className='footer-icon' />
            <span className='footer-text'>{siteConfig.contact.instagram}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
