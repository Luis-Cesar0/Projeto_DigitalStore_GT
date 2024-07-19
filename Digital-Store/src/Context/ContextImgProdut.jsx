import  { createContext, useState } from "react"
import imagemDoBaner from '../images/Sapato_Ornamento.png'
import sapatoAmarelo from '../images/sapato-amarelo.png'
import sapatoBege from '../images/sapato-bege.png'
import sapatoMarron from '../images/sapato-marron.png'
import sapatoRosa from '../images/sapato-rosa.png'
import sapatoRoxo from '../images/sapato-roxo.png'

let ImgProduto = {
    imgBnaer:[imagemDoBaner,imagemDoBaner,imagemDoBaner,imagemDoBaner],
    imgDetalhesProdutos:[sapatoAmarelo,sapatoBege,sapatoMarron,sapatoRosa,sapatoRoxo],
    produtos:[
        {
          name: "Nome do produto",
          image: "img/sapato_azul_Dstore.png",
          price: 200,
          priceDiscount: 149.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 400,
          priceDiscount: 149.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
          
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 125,
          priceDiscount: 35
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 193,
          priceDiscount: 85
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 149.9,
          priceDiscount: 49.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 50,
          priceDiscount: 25
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 205,
          priceDiscount: 149,
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
        },
        {
          name: "Nome do produto",
          image: "public/sapato_azul_Dstore.png",
          price: 49.9
        },
        
        
      ]
}

let contextoImgProduto = createContext()

function ContextoImgProdutoProvedor({ children }) {
let [imgProduto, setImgProduto] = useState(ImgProduto) 

return (
  <contextoImgProduto.Provider value={{ imgProduto, setImgProduto }}>
    {children}
  </contextoImgProduto.Provider>
)
}
export{contextoImgProduto,ContextoImgProdutoProvedor}