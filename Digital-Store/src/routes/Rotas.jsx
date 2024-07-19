import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import ProductListingPage from '../pages/ProductListingPage'
import ProductViewPage from '../pages/ProductViewPage'


export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="produtos" element={<ProductListingPage/>} />
            <Route path="produtos/:id" element={<ProductViewPage/>} />
        </Routes>
    );
}