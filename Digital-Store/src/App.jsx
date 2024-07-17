
import './App.css'
import Header from './components/Header/Header'
// import Section from './components/Section/Section'
import CardProduto  from './components/ProductCard/CardProduto'
// import Footer from './components/Footer/Footer'
import ProductCard  from './components/ProductCard/ProductCard'
import sapatoProduto from"./images/sapato_azul_Dstore.png"
import Filtrar from './components/Filtrar/Filtrar'

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
      {/* <ProductCard/> */}
      <CardProduto img={produtos[0].image} nome={produtos[0].name} preco={produtos[0].price} precoDesconto={produtos[0].priceDiscount}/>
      {/* <Footer/> */}

      <Filtrar/>

    </div>
  ) 
}

export default App
