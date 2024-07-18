import React from 'react';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";
import Logo from '../Logo/Logo';
import Informacoes from './Informacoes';
import './Footer.css';

const Footer = () => {
    const infoList1 = [
        { text: "Sobre Drip Store", link: "/about" },
        { text: "Segurança", link: "/security" },
        { text: "Wishlist", link: "/wishlist" },
        { text: "Blog", link: "/blog" },
        { text: "Trabalhe conosco", link: "/careers" },
        { text: "Meus Pedidos", link: "/orders" }
    ];

    const infoList2 = [
        { text: "Camisetas", link: "/shirts" },
        { text: "Calças", link: "/pants" },
        { text: "Bonés", link: "/caps" },
        { text: "Headphones", link: "/headphones" },
        { text: "Tênis", link: "/shoes" }
    ];

    return (
        <div className="footercontainer">
            <div className="subcontainer">
                <div className="subgrup1">
                    <div className="logo-container">
                        <Logo cor='branca'/>
                        
                    </div>
                    <div className="description">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span>
                    </div>
                    <div className="subgrupicons">
                        <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
                            <div onClick={() => window.location.href = 'https://facebook.com'}>
                                <FaFacebookF />
                            </div>
                            <div onClick={() => window.location.href = "https://www.instagram.com/digitalcollegebr/"}>
                                <BsInstagram />
                            </div>
                            <div onClick={() => window.location.href = 'https://x.com'}>
                                <BsTwitter />
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <Informacoes title="Informações" informations={infoList1} />
                <Informacoes title="Categorias" informations={infoList2} />
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
            <div className='retangulo' style={{
              width: '1240px',
              height: '1px',
              left: '100px',
              top: '384px',
              background: '#FFFFFF',
              opacity: 0.3
            }}>
            </div>
            <div className="copyright">
                <span>&copy; {new Date().getFullYear()} Digital Store</span>
            </div>
        </div>
    );
};

export default Footer;


