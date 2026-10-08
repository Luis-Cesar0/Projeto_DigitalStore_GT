import { contextoImgProduto } from "../Context/ContextImgProdut"
import { useContext } from "react";


import Gallery from "../components/Gallery/Gallery"
import ProdutosPromocao from "../components/ProdutosPromocao/ProdutosPromocao"
import OfertaEspecial from "../components/OfertaEspecial/OfertaEspecial"
import ProductiListing from "../components/ProductListing/ProductListing"
import Section from "../components/Section/Section";
import Categorias from "../components/Categorias/Categorias";


// estilo
import './Home.css'

export default function Home(){
    // puxa os produtos e as imagens do contexto
    const { imgProduto } = useContext(contextoImgProduto);
    const imagemBaner = imgProduto.bannerImages
    const listadestaque = imgProduto.produtos.slice(0, 8)
   
    
    return(
        <div className="container_home">
            <Gallery images={imagemBaner} />
            <div className="centralizar"> 
                <Section title={'Coleções em destaque'} Width={1500}>
                    <ProdutosPromocao/>
                </Section>
                <Section title={'Categorias em destaque'} titleAlign="center" Width={1500}>
                    <Categorias/>
                </Section>
            
                <Section title={'Produtos em alta'} link="produtos" Width={1500}>
                    <ProductiListing listProduto={listadestaque}/>
                </Section>
            </div>
            <OfertaEspecial/>
        </div>
    )
}
