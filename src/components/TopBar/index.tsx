import './index.css'
import { useNavigate, useLocation, Link } from 'react-router-dom'
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
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string): void => {
    setIsMenuOpen(false)
    
    // Se for home, navega para a rota principal e rola para o topo
    if (sectionId === 'home') {
      if (location.pathname !== '/') {
        navigate('/')
        // Aguarda navegação e depois rola para o topo
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
      } else {
        // Já está na home, apenas rola para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    // Para outras seções, navega para home se necessário
    if (location.pathname !== '/') {
      navigate('/')
      // Aguarda um momento para a página carregar antes de fazer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Se já estamos na home, apenas faz scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className='topBar'>
      <div className='topBar-container'>
        <Link to='/' className='logoBar' style={{ cursor: 'pointer' }} onClick={handleLogoClick}>
          <img src={PartumLogo} alt='Partum Engenharia' width="200" height="100" />
        </Link>

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
      </div>
    </nav>
  )
}

export { Topbar }
