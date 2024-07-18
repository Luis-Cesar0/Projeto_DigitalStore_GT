
import './App.css'
import Header from './components/Header/Header'
// import CardProduto  from './components/ProductCard/CardProduto'
import Footer from './components/Footer/Footer'
// import ProductCard  from './components/ProductCard/ProductCard'
import sapatoProduto from"./images/sapato_azul_Dstore.png"
import Filtrar from './components/Filtrar/Filtrar'
import Gallery from './components/Gallery/Gallery'
import Ordernar from './components/MenuOrdenar/Ordenar'
import Section from './components/Section/Section'
import ProductiListing from './components/ProductListing/ProductListing'


function App() {
  
let produtos= [
  {
    name: "Nome do produto 1",
    image: sapatoProduto,
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
      <Header/>
      <Gallery />
      <Filtrar/>
      
            <Section title="Coleções em destaque" titleAlign="left">
                <img src="src/images/collection-1.png" alt="Coleção 1" />
                <img src="src/images/collection-2.png" alt="Coleção 2" />
                <img src="src/images/collection-3.png" alt="Coleção 3" />
            </Section>
            <Section title="Coleções em destaque" titleAlign="center">
                <img src="src/images/camisetaImg.png" alt="camiseta" />
                <img src="src/images/calcaImg.png" alt="calca" />
                <img src="src/images/headphoneImg.png" alt="headphone" />
                <img src="src/images/tenisImg.png" alt="tenis" />
            </Section>

      {/* <ProductCard/> */}
      <ProductiListing listProduto={produtos}/>
      <Footer/>


    </div>
  ) 
}

export default App
