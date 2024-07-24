import './Header.css'
import Logo from '../Logo/Logo'
import carinhoCompras from '../../images/carinho-compra-2.png'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Buscar from '../Buscar/Buscar'

export default function Header() {
  const location = useLocation();
  const [selectLink, setSelectLink] = useState(0);

  useEffect(() => {
    let path = location.pathname;
    path == '/produtos/:id' ? path ='/produtos': path
    const index = ['/', '/produtos', '/categoria', '/meus-pedidos'].indexOf(path);
    setSelectLink(index !== -1 ? index : 0);
  }, [location]);

  function handleSelectLink(index) {
    setSelectLink(index);
  }

  return (
    <header>
      <nav>
        <div id="top-nav" className="nav-filhos d-flex justify-content-between align-items-center">
          <Logo />
          <Buscar />
          <div id="cadEntraCarinho">
            <Link to={'/cadastro'} className="nav-btn" id="link_cadastro">Cadastre-se</Link>
            <Link to={'/loguin'} className="nav-btn btn_primary" id="btn_entra">Entrar</Link>
            <Link to={'/carrinho'} id="btn-carrinho">
              <img src={carinhoCompras} alt="carinho De compras" />
            </Link>
          </div>
        </div>
        <div id="bot-nav" className="nav-filhos">
          <ul id="listNavLinks">
            {['Home', 'Produtos', 'Categoria', 'Meus Pedidos'].map((text, index) => {
              return (
                <li
                  key={index}
                  className={selectLink === index ? 'listLinks listLinksConfirme' : 'listLinks'}
                  onClick={() => handleSelectLink(index)}
                >
                  <Link to={index === 0 ? "/" : `/${text.toLowerCase().replace(' ','-')}`}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
