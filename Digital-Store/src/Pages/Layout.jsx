import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Rotas from "../Rotas";
import { BrowserRouter } from "react-router-dom";

export default function Layout() {
    <>
        <BrowserRouter>
            <Header />
            <Rotas />
            <Footer />
        </BrowserRouter>   
    
    </>
}