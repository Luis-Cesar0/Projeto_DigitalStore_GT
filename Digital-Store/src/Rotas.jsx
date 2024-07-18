import {Route, Routes} from 'react-router-dom';

import Home from './Pages/Home';
import Produto from './Pages/Produto';
import DetalheProduto from './Pages/DetalheProduto';

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="produto" element={<Produto />} />
            <Route path="produto/:id" element={<DetalheProduto />} />
        </Routes>
    );
}