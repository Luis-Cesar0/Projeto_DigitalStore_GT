import Footer from "../components/Footer/Footer"; 
import Header from "../components/Header/Header";
import Rotas from "../routes/Rotas";
import { BrowserRouter } from "react-router-dom";
import { ContextoImgProdutoProvedor } from "../Context/ContextImgProdut";

export default function Layout() {
  return(  <>
        <BrowserRouter>
            <ContextoImgProdutoProvedor>
                <Header/>
                    <Rotas/>
                <Footer/>
            </ContextoImgProdutoProvedor>
        </BrowserRouter>   
    
    </>)
}