// componenetes
import Filtrar from "../components/FilterGroup/FilterGroup ";
import ProductiListing from "../components/ProductListing/ProductListing";
import Section from "../components/Section/Section";
import { contextoImgProduto } from "../Context/ContextImgProdut"
import { useContext } from "react";

// estilo
import './ProductListingPage.css'



export default function ProductListingPage() {
    let Marca =[
            {text: "Adiddas", value: "Adiddas"},
            {text: "Calenciaga" ,value: "Calenciaga"},
            {text: "K-Swiss", value: "KSwiss"},
            {text: "Nike", value: "Nike"},
            {text: "Puma", value: "Puma"},        
    ]
    let Categoria = [
            {text: "Esporte e lazer", value: "EsporteLazer"},
            {text: "Casual", value: "Casual"},
            {text: "Utilitário", value: "Utilitário"},
            {text: "Corrida", value: "Corrida"},
    ]
    let Genero =[
            {text: "Masculino", value: "M"},
            {text: "Feminino", value: "F"},
            {text: "Unisex", value: "U"},
    ]
    let Estado=[
            {text: "Novo", value: "novo"},
            {text: "Usado", value: "usado"},
    ]

    const { imgProduto} = useContext(contextoImgProduto);
    let Produtos = imgProduto.produtos
   
    return (
        <div className="cont-principal">
            <div className="cont-orden">
                <p><strong>Resultados para “Tênis”</strong> - 389 ordutos</p>
                <div className="selct-orden">
                    <label htmlFor="ordenProduto">Ordenar por</label>
                    <select name="ordenProduto" id="ordenProduto">
                        <option value="">Menor preço</option>
                        <option value="">Maior preço</option>
                    </select>
                </div>
            </div>
          
               <div className="cont-lista-filtro">
                    <div className="cont-filtro">
                        <p>Filtrar por:</p>
                        <Filtrar listaOpcos={Marca} titulo={'Marka'}/>
                        <Filtrar listaOpcos={Categoria} titulo={'Categoria'}/>
                        <Filtrar listaOpcos={Genero} titulo={'Gênero'}/>
                        <Filtrar listaOpcos={Estado} titulo={'Estado'} Radio RadioName={'teste'}/>
                    </div>

                    <Section Width={1500}>
                        <ProductiListing listProduto={Produtos} url={':id'}/>
                    </Section>
               </div>
            
            
        </div>
    )
}

