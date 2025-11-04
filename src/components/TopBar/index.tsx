import './index.css'
import PartumLogo from '../../assets/partum.svg'
import type { NavItem } from '../../types'

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Quem somos' },
  { id: 'testimonials', label: 'Depoimentos' },
  { id: 'projects', label: 'Parceiros' },
  { id: 'contact', label: 'Contatos' }
]

function Topbar() {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='topBar'>
      <div className='logoBar'>
        <img src={PartumLogo} alt='Partum Engenharia' width="100" height="100" />
      </div>
      
      <div className='navBar'>
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
      
      <button 
        className='mobile-menu-toggle' 
        aria-label='Abrir menu'
        type='button'
      >
        ☰
      </button>
    </nav>
  )
}

export { Topbar }