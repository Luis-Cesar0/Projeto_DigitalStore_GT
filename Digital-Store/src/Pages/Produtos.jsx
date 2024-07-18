import Filtrar from "../components/Filtrar/Filtrar";
import Ordernar from "../components/MenuOrdenar/Ordenar";
import ProductiListing from "../components/ProductListing/ProductListing";
import React from 'react'

export default function Produtos() {
    let produtos= [
        {
          name: "Nome do produto 1",
          image: "./images/sapato_azul_Dstore.png",
          price: 200,
          priceDiscount: 149.9
        },
        {
          name: "Nome do produto 2",
          image: "./images/sapato_azul_Dstore.png",
          price: 49.9
        }
        ]
    return (
        <div>
            <Filtrar/>
            <Ordernar/>
            <ProductiListing listProduto={produtos}/>
        </div>
    )
}

