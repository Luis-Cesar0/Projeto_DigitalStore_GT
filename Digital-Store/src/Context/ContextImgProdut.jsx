import  { createContext, useState } from "react"
import imagemDoBaner from '../images/Sapato_Ornamento.png'
import sapatoAmarelo from '../images/sapato-amarelo.png'
import sapatoBege from '../images/sapato-bege.png'
import sapatoMarron from '../images/sapato-marron.png'
import sapatoRosa from '../images/sapato-rosa.png'
import sapatoRoxo from '../images/sapato-roxo.png'
import sapatoVenda from '../images/sapato_azul_Dstore.png'

let ImgProduto = {
    imgBnaer:[imagemDoBaner,imagemDoBaner,imagemDoBaner,imagemDoBaner],
    imgDetalhesProdutos:[sapatoRoxo,sapatoAmarelo,sapatoRosa,sapatoMarron,sapatoBege],
    produtos:[
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 200,
          priceDiscount: 149.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
          
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 400,
          priceDiscount: 149.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
          
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 125,
          priceDiscount: 35,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 193,
          priceDiscount: 85,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 149.9,
          priceDiscount: 49.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 50,
          priceDiscount: 25,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 205,
          priceDiscount: 149,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
        },
        {
          name: "Nome do produto",
          image: sapatoVenda,
          price: 49.9,
          categoria: 'Tênis'
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