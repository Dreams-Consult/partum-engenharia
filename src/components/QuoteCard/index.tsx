import './index.css'
import quoteIcon from '../../assets/SVG/ICON-ASPAS.svg'

interface QuoteCardProps {
  text: string
  authorName: string
  authorRole: string
}

function QuoteCard({ text, authorName, authorRole }: QuoteCardProps) {
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
          <div className='avatar-circle'></div>
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
