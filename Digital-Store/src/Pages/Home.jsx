import Gallery from "../components/Gallery/Gallery"
import OfertaEspecial from "../components/OfertaEspecial/OfertaEspecial"
import SapatoBaner from '../images/Sapato_Ornamento.png'
import ProductiListing from "../components/ProductListing/ProductListing"
import sapatoProduto from '../images/sapato_azul_Dstore.png'
// import Sapatoroxo from '../images/sapato-roxo.png'
// import Sapatobege from '../images/sapato-bege.png'
// import Sapatorosa from '../images/sapato-rosa.png'
// import Sapatomarron from '../images/sapato-marron.png'
// import Sapatoamarelo from '../images/sapato-amarelo.png'

// const listspatos = [Sapatoroxo,Sapatobege,Sapatorosa,Sapatomarron,Sapatoamarelo]
 const listaimg =[SapatoBaner,SapatoBaner,SapatoBaner,SapatoBaner,SapatoBaner]
 let produtos= [
    {
      name: "Nome do produto 1",
      image: sapatoProduto,
      price: 200,
      priceDiscount: 149.9,
      categoria: 'Tênis'
    },
    {
      name: "Nome do produto 1",
      image: sapatoProduto,
      price: 200,
      priceDiscount: 149.9,
      categoria: 'Tênis'
    },
    {
      name: "Nome do produto 1",
      image: sapatoProduto,
      price: 200,
      priceDiscount: 149.9,
      categoria: 'Tênis'
    },
    {
      name: "Nome do produto 1",
      image: sapatoProduto,
      price: 200,
      priceDiscount: 149.9,
      categoria: 'Tênis'
    },

]
export default function Home(){
    return(
        <main>
            <Gallery images={listaimg} />
            <ProductiListing listProduto={produtos}/>
            <OfertaEspecial/>
        </main>
    )
}