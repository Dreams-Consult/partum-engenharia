import './index.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import pageData from '../../data/data.json'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
import GuaraImg from '../../assets/projects/Guará Acqua Park/GUA-IMG-01.jpg'
import AqualandImg from '../../assets/projects/Aqualand Resort/AQL-IMG-001.jpeg'
import IslaCancunImg from '../../assets/projects/Isla Cancun/ISC-IMG-001.jpeg'
import ValeCachoeirasImg from '../../assets/projects/Vale das Cachoeiras/VLC-IMG-002.jpg'

const imageMap: Record<string, string> = {
  '/src/assets/projects/Guará Acqua Park/GUA-IMG-01.jpg': GuaraImg,
  '/src/assets/projects/Aqualand Resort/AQL-IMG-001.jpeg': AqualandImg,
  '/src/assets/projects/Isla Cancun/ISC-IMG-001.jpeg': IslaCancunImg,
  '/src/assets/projects/Vale das Cachoeiras/VLC-IMG-002.jpg': ValeCachoeirasImg,
}

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  // Array com todas as imagens do projeto
  const allImages = [
    imageMap[project.image],
    imageMap[project.image],
    imageMap[project.image],
    imageMap[project.image],
    imageMap[project.image],
    imageMap[project.image],
    imageMap[project.image],
  ]

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
        className='project-details-hero'
        style={{ backgroundImage: `url(${imageMap[project.image]})` }}
      >
        <div className='project-hero-overlay'></div>
        <div className='project-hero-content'>
          <h1 className='project-details-name'>{project.name}</h1>
          <p className='project-details-location'>{project.location}</p>
        </div>
      </section>

      <section className='project-details-content'>
        <div className='project-details-container'>
          
          <div className='project-section'>
            <h2 className='project-section-title'>Sobre o Projeto</h2>
            <p className='project-section-text'>{project.description}</p>
          </div>

          <div className='project-section'>
            <h2 className='project-section-title'>Galeria de fotos</h2>
            <div className={`project-gallery ${showAllPhotos ? 'expanded' : ''}`}>
              <div className='gallery-main' onClick={() => openLightbox(0)}>
                <img src={imageMap[project.image]} alt={project.name} />
              </div>
              <div className='gallery-side'>
                <div className='gallery-side-item' onClick={() => openLightbox(1)}>
                  <img src={imageMap[project.image]} alt={project.name} />
                </div>
                <div className='gallery-side-item' onClick={() => openLightbox(2)}>
                  <img src={imageMap[project.image]} alt={project.name} />
                </div>
              </div>
              {showAllPhotos && (
                <div className='gallery-expanded-grid'>
                  {/* Adicione mais imagens aqui conforme necessário */}
                  <div className='gallery-expanded-item' onClick={() => openLightbox(3)}>
                    <img src={imageMap[project.image]} alt={project.name} />
                  </div>
                  <div className='gallery-expanded-item' onClick={() => openLightbox(4)}>
                    <img src={imageMap[project.image]} alt={project.name} />
                  </div>
                  <div className='gallery-expanded-item' onClick={() => openLightbox(5)}>
                    <img src={imageMap[project.image]} alt={project.name} />
                  </div>
                  <div className='gallery-expanded-item' onClick={() => openLightbox(6)}>
                    <img src={imageMap[project.image]} alt={project.name} />
                  </div>
                </div>
              )}
            </div>
            {!showAllPhotos && (
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
            {showAllPhotos && (
              <button 
                className='gallery-show-less-button'
                onClick={() => setShowAllPhotos(false)}
                type='button'
              >
                Ver menos
              </button>
            )}
          </div>

          <div className='project-section'>
            <h2 className='project-section-title'>Detalhes Técnicos</h2>
            <div className='project-specs-grid'>
              <div className='spec-card'>
                <h3>Área Total</h3>
                <p>Informações a serem adicionadas</p>
              </div>
              <div className='spec-card'>
                <h3>Capacidade</h3>
                <p>Informações a serem adicionadas</p>
              </div>
              <div className='spec-card'>
                <h3>Prazo de Execução</h3>
                <p>Informações a serem adicionadas</p>
              </div>
              <div className='spec-card'>
                <h3>Status</h3>
                <p>Informações a serem adicionadas</p>
              </div>
            </div>
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
          <button className='lightbox-arrow lightbox-prev' onClick={(e) => { e.stopPropagation(); prevImage(); }} type='button'>
            ‹
          </button>
          <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
            <img src={allImages[currentImageIndex]} alt={`${project.name} - Imagem ${currentImageIndex + 1}`} />
          </div>
          <button className='lightbox-arrow lightbox-next' onClick={(e) => { e.stopPropagation(); nextImage(); }} type='button'>
            ›
          </button>
          <div className='lightbox-counter'>
            {currentImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  )
}

export { ProjectDetails }
