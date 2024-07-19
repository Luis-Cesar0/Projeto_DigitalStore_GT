import {Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import ProductListingPage from '../Pages/ProductListingPage'
import ProductViewPage from '../Pages/ProductViewPage'


export default function Rotas() {
    return (
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="produtos" element={<ProductListingPage/>} />
            <Route path="produtos/:id" element={<ProductViewPage/>} />
        </Routes>
    );
}