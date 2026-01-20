import './index.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import pageData from '../../data/data.json'
import { Contact } from '../Contact'
import { Footer } from '../Footer'

// Importação dinâmica de todas as imagens dos projetos
const images = import.meta.glob('../../assets/projects/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

// Função auxiliar para obter a imagem do caminho do JSON
const getImageUrl = (path: string): string => {
  // Remove o prefixo /src/ se existir
  const cleanPath = path.replace(/^\/src\//, '../../')
  const imageUrl = images[cleanPath]
  return imageUrl || path
}

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [heroOpacity, setHeroOpacity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.65
      const newOpacity = Math.max(0, 1 - (scrollPosition / heroHeight) * 1.5)
      setHeroOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [id])

  const project = pageData.projects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div className='project-details-page'>
        <div className='project-not-found'>
          <h1>Projeto não encontrado</h1>
          <button onClick={() => navigate('/')}>Voltar ao início</button>
        </div>
      </div>
    )
  }

  // Array com todas as imagens do projeto (carregadas dinamicamente do JSON)
  const allImages = (project.images || [project.image]).map(img => getImageUrl(img))

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const handleGoBack = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('projects')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className='project-details-page'>
      <section 
        className='project-details-hero animate-fade-in'
        style={{ 
          backgroundImage: `url(${getImageUrl(project.image)})`,
          opacity: heroOpacity
        }}
      >
        <div className='project-hero-overlay'></div>
      </section>

      <div className='project-hero-content-wrapper'>
        <div className='project-hero-content animate-slide-up'>
          {project.logo && (
            <div className='project-logo-container'>
              <img 
                src={getImageUrl(project.logo)} 
                alt={`${project.name} logo`} 
                className='project-logo'
              />
            </div>
          )}
          <h1 className='project-details-name'>{project.name}</h1>
          <p className='project-details-location'>{project.location}</p>
        </div>
      </div>

      <section className='project-details-content'>
        <div className='project-details-container'>
          
          <div className='project-section animate-slide-up'>
            <h2 className='project-section-title'>Sobre o Projeto</h2>
            <p className='project-section-text'>{project.description}</p>
          </div>

          <div className='project-section animate-slide-up delay-100'>
            <h2 className='project-section-title'>Galeria de fotos</h2>
            <div className={`project-gallery ${showAllPhotos ? 'expanded' : ''}`}>
              {allImages.length > 0 && (
                <div className='gallery-main' onClick={() => openLightbox(0)}>
                  <img src={allImages[0]} alt={project.name} />
                </div>
              )}
              <div className='gallery-side'>
                {allImages.length > 1 && (
                  <div className='gallery-side-item' onClick={() => openLightbox(1)}>
                    <img src={allImages[1]} alt={project.name} />
                  </div>
                )}
                {allImages.length > 2 && (
                  <div className='gallery-side-item' onClick={() => openLightbox(2)}>
                    <img src={allImages[2]} alt={project.name} />
                  </div>
                )}
              </div>
              {showAllPhotos && allImages.length > 3 && (
                <div className='gallery-expanded-grid'>
                  {allImages.slice(3).map((image, index) => (
                    <div key={index + 3} className='gallery-expanded-item' onClick={() => openLightbox(index + 3)}>
                      <img src={image} alt={`${project.name} - ${index + 4}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
            {!showAllPhotos && allImages.length > 3 && (
              <div className='gallery-expand-section'>
                <button 
                  className='gallery-see-all-button'
                  onClick={() => setShowAllPhotos(true)}
                  type='button'
                >
                  Ver tudo
                </button>
                <p className='gallery-expand-hint'>Clique para ver mais fotos do projeto</p>
              </div>
            )}
            {showAllPhotos && allImages.length > 3 && (
              <button 
                className='gallery-show-less-button'
                onClick={() => setShowAllPhotos(false)}
                type='button'
              >
                Ver menos
              </button>
            )}
          </div>

          <button className='project-back-button' onClick={handleGoBack} type='button'>
            Voltar aos Projetos
          </button>
        </div>
      </section>
      <Contact />
      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className='lightbox-overlay' onClick={closeLightbox}>
          <button className='lightbox-close' onClick={closeLightbox} type='button'>
            ✕
          </button>
          <div className='lightbox-container'>
            <button className='lightbox-arrow lightbox-prev' onClick={(e) => { e.stopPropagation(); prevImage(); }} type='button'>
              ‹
            </button>
            <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
              <img src={allImages[currentImageIndex]} alt={`${project.name} - Imagem ${currentImageIndex + 1}`} />
            </div>
            <button className='lightbox-arrow lightbox-next' onClick={(e) => { e.stopPropagation(); nextImage(); }} type='button'>
              ›
            </button>
          </div>
          <div className='lightbox-counter'>
            {currentImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  )
}

export { ProjectDetails }
