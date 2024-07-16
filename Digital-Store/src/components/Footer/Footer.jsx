import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons";
import logoDigital from '../../images/logo-digital.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footercontainer">
            <div className="subcontainer">
                <div className="subgrup1">
                    <div className="logo-container">
                        <img src={logoDigital} alt="logo-digital" />
                        <span className="subgruptitle">Digital Store</span>
                    </div>
                    <div className="description">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span>
                    </div>
                    <div className="subgrupicons">
                        <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
                            <div>
                                <FaFacebookF />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
                            <div>
                                <BsInstagram />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
                            <div>
                                <BsTwitter />
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="subgrup2">
                    <div className="subgruplists">
                        <h3 className="subtitle">Informações</h3>
                        <ul>
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe conosco</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </div>
                    <div className="subgruplists">
                        <h3 className="subtitle">Categorias</h3>
                        <ul>
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </div>
                </div>
                <div className="subgrup3">
                    <h3 className="subtitle">Contato</h3>
                    <div className="address">
                        <span>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</span>
                    </div>
                    <div className="phone-container">
                        <div className="phone">(85) 3051-3411</div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <span>&copy; 2022 Digital college</span>
            </div>
        </div>
    );
};

export default Footer;
