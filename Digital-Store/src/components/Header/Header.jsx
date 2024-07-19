import './Header.css'
import Logo from '../Logo/Logo'
import  carinhoCompras from '../../images/carinho-compra-2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  let [selectLink,setSelctLink] = useState(0)
  
  function handleSelctLink (index){
    setSelctLink(index)
  }
    return(<header>
    <nav>
      <div id="top-nav" className="nav-filhos d-flex justify-content-between align-items-center">
            <Logo/>
        <form action="#" method="get" id="form-search-nav" >
          <input type="search" name="pesProduto" id="pesProduto"  placeholder="Pesquisar produto..."/>
          <button type="submit" className="nav-btn " id="btnPesquisa"><i className="bi bi-search"></i></button>
        </form>
       <div id="cadEntraCarinho">
          <a href="#" className="nav-btn " id="link_cadastro">Cadastre-se</a>
          <a href="#" className="nav-btn btn_primary" id="btn_entra">Entrar</a>
          <a href="#" id="btn-carrinho ">
            <img src={carinhoCompras} alt="carinho De compras"/>
          </a>
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
                <Link to={index === 0 ? '/' : `/${text.toLocaleLowerCase()}`}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
</header>)
}