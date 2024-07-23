import React from 'react';
import './DetalhesProduto.css';
import SlideProduto from '../SlideProduto/SlideProduto';
import DescProduto from '../DescProduto/DescProduto';
import ProductCard from '../ProductCard/ProductCard';
export default function DetalhesProduto() {

    return (
        <div className="container">
            <div className="caminho">
                Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
            </div>
            <div className="produto">
                <div>
                    <SlideProduto />
                </div>
                <div>
                    <DescProduto />
                </div>
            </div>
            <div className="relacionados">
                <div className="containerTitulo">
                    <div className="Titulo">
                        Produtos Relacionados
                    </div>
                    <a href="" style={{ color: '#C92071', textDecoration: 'none' }}>Ver todos -&gt;</a>
                </div>
                <div className="produtosRelacionados">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}
