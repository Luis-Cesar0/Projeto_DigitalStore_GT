import Gallery from "../components/Gallery/Gallery"
import ProdutosPromocao from "../components/ProdutosPromocao/ProdutosPromocao"
import OfertaEspecial from "../components/OfertaEspecial/OfertaEspecial"
import { contextoImgProduto } from "../Context/ContextImgProdut"
import React, { useContext } from "react";
import ProductiListing from "../components/ProductListing/ProductListing"

export default function Home(){
    const { imgProduto, setImgProduto } = useContext(contextoImgProduto);
    let imagemBaner = imgProduto.imgBnaer
    let produtos8 = imgProduto.produtos
    
    return(
        <main>
            <Gallery images={imagemBaner}/>
            <ProdutosPromocao/>
            <OfertaEspecial/>
        </main>
    )
}