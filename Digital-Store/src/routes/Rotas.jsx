import {Route, Routes} from 'react-router-dom';

import Home from '../Pages/Home';
import ProductViewPage from '../Pages/ProductViewPage';
import ProductListingPage from '../Pages/ProductListingPage';

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="produtos" element={<ProductListingPage/>} />
            <Route path="produtos/:id" element={<ProductViewPage/>} />
        </Routes>
    );
}