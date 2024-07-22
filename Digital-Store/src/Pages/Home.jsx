import Gallery from "../components/Gallery/Gallery"
import ProdutosPromocao from "../components/ProdutosPromocao/ProdutosPromocao"
import OfertaEspecial from "../components/OfertaEspecial/OfertaEspecial"
import { contextoImgProduto } from "../Context/ContextImgProdut"
import { useContext } from "react";
import ProductiListing from "../components/ProductListing/ProductListing"
import Section from "../components/Section/Section";
import Categorias from "../components/Categorias/Categorias";


export default function Home(){
    const { imgProduto, setImgProduto } = useContext(contextoImgProduto);
    let imagemBaner = imgProduto.imgBnaer
    let listadestaque =[]
    for (let i = 0; i < 8; i++) {
        listadestaque[i]= imgProduto.produtos[i]
        
        
    }
   
    
    return(
        <div>
            <Gallery images={imagemBaner}/>
            <Section title={'Coleções em destaque'}>
                <ProdutosPromocao/>
            </Section>
            <Section title={'Coleções em destaque'} titleAlign="center">
                <Categorias/>
            </Section>
            <Section title={'Produtos em alta'} link="2">
                <ProductiListing listProduto={listadestaque}/>
            </Section>
            <OfertaEspecial/>
        </div>
    )
}