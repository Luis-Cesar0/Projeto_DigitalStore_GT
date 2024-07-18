import './Header.css'
import Logo from '../Logo/Logo'
import  carinhoCompras from '../../images/carinho-compra-2.png'

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
          <li className="listLinks listLinksConfime"><a href="#" >Home</a></li>
          <li className="listLinks"><a href="#">Produtos</a></li>
          <li className="listLinks"><a href="#">Categoria</a></li>
          <li className="listLinks"><a href="#">Meus Pedidos</a></li>
        </ul>
      </div>
    </nav>
</header>)
}