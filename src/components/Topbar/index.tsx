import './index.css'
// import ReactComponent
import PartumLogo from '../../assets/partum.svg';

function Topbar () {
  return (
    <div className='topBar'>
      <div className='logoBar'>
        <img src={PartumLogo} alt='Logotipo do App' />
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
