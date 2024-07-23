import { contextoImgProduto } from "../Context/ContextImgProdut"
import { useContext } from "react";


import React from 'react';
// import DetalhesProduto from '../components/DetalhesProduto/DetalhesProduto';
// import DescProduto from '../components/DescProduto/DescProduto';
// import SlideProduto from '../components/SlideProduto/SlideProduto';
import Gallery from '../components/Gallery/Gallery'
import BuyBox from "../components/BuyBox/BuyBox";

import './ProductViewPage.css'

export default function ProductViewPage(){
    const { imgProduto, setImgProduto } = useContext(contextoImgProduto);
    let imagemBaner = imgProduto.imgDetalhesProdutos
    return (
        <div className="princial-detalhes">
            {/* <DetalhesProduto /> */} 
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

 
    );
}