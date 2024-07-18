import './Header.css'
import Logo from '../Logo/Logo'
import  carinhoCompras from '../../images/carinho-compra-2.png'
import { Link } from 'react-router-dom'

export default function Header() {
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
          <li className="listLinks listLinksConfime"><Link to="/" >Home</Link></li>
          <li className="listLinks"><Link to="/produtos">Produtos</Link></li>
          <li className="listLinks"><Link to="#">Categoria</Link></li>
          <li className="listLinks"><Link to="#">Meus Pedidos</Link></li>
        </ul>
      </div>
    </nav>
</header>)
}