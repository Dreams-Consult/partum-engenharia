import './index.css'
import quoteIcon from '../../assets/SVG/ICON-ASPAS.svg'

// Importação dinâmica de todas as imagens dos avatares
const avatarImages = import.meta.glob('../../assets/avatar/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

// Função auxiliar para obter a imagem do caminho do JSON
const getImageUrl = (path: string): string => {
  const cleanPath = path.replace(/^\/src\//, '../../')
  const imageUrl = avatarImages[cleanPath]
  return imageUrl || path
}

interface QuoteCardProps {
  text: string
  authorName: string
  authorRole: string
  authorImage?: string
}

function QuoteCard({ text, authorName, authorRole, authorImage }: QuoteCardProps) {
  return (
    <div className='quote-card'>
      <div className='gradient-top-left'></div>
      <div className='gradient-bottom-right'></div>
      <div className='quote-icon'>
        <img src={quoteIcon} alt='Aspas' />
      </div>
      <p className='quote-text'>{text}</p>
      <div className='quote-author'>
        <div className='author-avatar'>
          {authorImage ? (
            <img src={getImageUrl(authorImage)} alt={authorName} className='avatar-image' />
          ) : (
            <div className='avatar-circle'></div>
          )}
        </div>
        <div className='author-info'>
          <h4 className='author-name'>{authorName}</h4>
          <p className='author-role'>{authorRole}</p>
        </div>
      </div>
    </div>
  )
}

export { QuoteCard }
