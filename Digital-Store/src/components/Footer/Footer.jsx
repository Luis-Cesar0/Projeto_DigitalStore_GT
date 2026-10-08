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
        { text: "Meus Pedidos", link: "/meus-pedidos" }
    ];

    const infoList2 = [
        { text: "Camisetas", link: "/produtos" },
        { text: "Calças", link: "/produtos" },
        { text: "Bonés", link: "/produtos" },
        { text: "Headphones", link: "/produtos" },
        { text: "Tênis", link: "/produtos" }
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
                            <a href="https://facebook.com" aria-label="Facebook da Digital Store">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/digitalcollegebr/" aria-label="Instagram da Digital College">
                                <BsInstagram />
                            </a>
                            <a href="https://x.com" aria-label="X da Digital Store">
                                <BsTwitter />
                            </a>
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
            <div className="copyright">
                <span>&copy; {new Date().getFullYear()} Digital Store</span>
            </div>
        </div>
    );
};

export default Footer;


