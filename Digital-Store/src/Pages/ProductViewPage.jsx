import { contextoImgProduto } from "../Context/ContextImgProdut"
import { useContext } from "react";
import { Link } from "react-router-dom";


import React from 'react';
// import DetalhesProduto from '../components/DetalhesProduto/DetalhesProduto';
// import DescProduto from '../components/DescProduto/DescProduto';
// import SlideProduto from '../components/SlideProduto/SlideProduto';
import Gallery from '../components/Gallery/Gallery'
import BuyBox from "../components/BuyBox/BuyBox";
import ProductiListing from "../components/ProductListing/ProductListing";
import Section from "../components/Section/Section";

import './ProductViewPage.css'

export default function ProductViewPage(){
    const { imgProduto, setImgProduto } = useContext(contextoImgProduto);
    let imagemBaner = imgProduto.imgDetalhesProdutos

    let listadestaque =[]
    for (let i = 0; i < 4; i++) {
        listadestaque[i]= imgProduto.produtos[i]
        
    }
    return (
        <div className="principal-detlhes" >
              <div className="caminho">
                <Link to={'/'} className="Homelink caminhoLink">Home</Link>
                <span>/</span>
                <Link to={'/produtos'} className="ProdutosLink caminhoLink"> Produtos</Link>
                <span>/</span>
                <Link to={'/produtos'} className="ModeloLink caminhoLink"> Tênis</Link>
                <span>/</span>
                <Link to={'/produtos'} className="MarcaLink caminhoLink"> Nike</Link>
                <span>/</span>
                <Link to={'/produtos'} className="NomeLink caminhoLink "> Tênis Nike Revolution 6 Next Nature Masculino</Link>
              </div>
            <div className="detalhes">
                <Gallery images={imagemBaner} showThumbs ClassName="container-preview" radius={5} height={600}/>
                <BuyBox stars={4.7} 
                categoria={'Casual'} 
                Marca={'Nike'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'} 
                name={'Tênis Nike Revolution 6 Next Nature Masculino'} 
                prece={219} 
                priceDiscount={119} 
                rating={90} 
                reference={'38416711'}/>
            </div>
            <Section title={'Produtos em alta'} link="2" Width={1800}>
                    <ProductiListing listProduto={listadestaque} url={'produtos/:id'}/>
            </Section>
        </div>

 
    );
}