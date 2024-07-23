import './Header.css'
import Logo from '../Logo/Logo'
import  carinhoCompras from '../../images/carinho-compra-2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Buscar from '../Buscar/Buscar'

export default function Header() {
  let [selectLink,setSelctLink] = useState(0)
  
  function handleSelctLink (index){
    setSelctLink(index)
  }
    return(<header>
    <nav>
      <div id="top-nav" className="nav-filhos d-flex justify-content-between align-items-center">
            <Logo/>
        <Buscar/>
       <div id="cadEntraCarinho">
          <Link to={'cadastro'} className="nav-btn " id="link_cadastro">Cadastre-se</Link>
          <Link to={'loguin'} className="nav-btn btn_primary" id="btn_entra">Entrar</Link>
          <Link to={'carrinho'} id="btn-carrinho ">
            <img src={carinhoCompras} alt="carinho De compras"/>
          </Link>
       </div>
      </div>
      <div id="bot-nav" className="nav-filhos ">
        <ul id="listNavLinks">
          {['Home', 'Produtos','Categoria' , 'Meus Pedidos'].map((text, index) =>{
            return(
              <li
                key={index}
                className={selectLink ===  index ?
                  'listLinks listLinksConfirme' : 'listLinks'}
                  onClick={() => handleSelctLink(index)}
              >
                <Link to={index === 0 ? "/" : `/${text.toLocaleLowerCase()}`}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
</header>)
}