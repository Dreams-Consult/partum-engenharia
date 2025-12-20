import './index.css'
import PartumLogo from '../../assets/SVG/LOGO-COR2-H2.svg'
import type { NavItem } from '../../types'
import { useState } from 'react'

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projetos' },
  { id: 'about', label: 'A Partum' },
  { id: 'testimonials', label: 'Depoimentos' },
  { id: 'contact', label: 'Contato' }
]

function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='topBar'>
      <div className='logoBar' onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
        <img src={PartumLogo} alt='Partum Engenharia' width="200" height="100" />
      </div>

      <div className={`navBar ${isMenuOpen ? 'nav-open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            role='button'
            tabIndex={0}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className='mobile-actions'>
        <button
          className='mobile-menu-toggle'
          aria-label='Abrir menu'
          type='button'
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export { Topbar }
