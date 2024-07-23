import {Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home'
import ProductListingPage from '../Pages/ProductListingPage'
import ProductViewPage from '../Pages/ProductViewPage'
import PaginaemConstrucao from '../Pages/PaginaConstru';
import PaginaNaoEncotrada from '../Pages/PaginaNaoEncontrada';

export default function Rotas() {
    return (
       <>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="produtos" element={<ProductListingPage/>} />
                <Route path="produtos/:id" element={<ProductViewPage/>} />
                <Route path="categoria" element={<PaginaemConstrucao/>} />
                <Route path="meus pedidos" element={<PaginaemConstrucao/>} />
                <Route path="*" element={<PaginaNaoEncotrada/>}/>
                <Route path='2' element={<ProductListingPage/>} />
                <Route path='produtos/2' element={<ProductListingPage/>} />
            </Routes>
       </>
    );
}