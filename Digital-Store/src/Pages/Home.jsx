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
    const { imgProduto, setImgProduto } = useContext(contextoImgProduto);
    let imagemBaner = imgProduto.imgBnaer
    let listadestaque =[]
    for (let i = 0; i < 8; i++) {
        listadestaque[i]= imgProduto.produtos[i]
        
        
    }
   
    
    return(
        <div className="container_home">
            <Gallery images={imagemBaner} />
            <div className="centralizar"> 
                <Section title={'Coleções em destaque'} Width={1500}>
                    <ProdutosPromocao/>
                </Section>
                <Section title={'Coleções em destaque'} titleAlign="center" Width={1500}>
                    <Categorias/>
                </Section>
            
                <Section title={'Produtos em alta'} link="2" Width={1500}>
                    <ProductiListing listProduto={listadestaque} url={'produtos/:id'}/>
                </Section>
            </div>
            <OfertaEspecial/>
        </div>
    )
}