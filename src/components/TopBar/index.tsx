import './index.css'
import PartumLogo from '../../assets/partum.svg';

function Topbar () {
  return (
    <div className='topBar'>
      <div className='logoBar'>
        <img src={PartumLogo} alt='Logo' width="100" height="100" />
      </div>
      <div className='navBar'>
        <a>Home</a>
        <a>Quem somos</a>
        <a>Depoimentos</a>
        <a>Parceiros</a>
        <a>Contatos</a>
      </div>
    </div>
  )
}

export {Topbar};
