import imagemDoBanner from '../images/Sapato_Ornamento.png'
import sapatoAmarelo from '../images/sapato-amarelo.png'
import sapatoBege from '../images/sapato-bege.png'
import sapatoMarrom from '../images/sapato-marron.png'
import sapatoRosa from '../images/sapato-rosa.png'
import sapatoRoxo from '../images/sapato-roxo.png'
import sapatoVenda from '../images/sapato_azul_Dstore.png'

const products = [
    { id: 1, name: 'Nome do produto', image: sapatoVenda, price: 200, priceDiscount: 149.9, categoria: 'Tênis' },
    { id: 2, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
    { id: 3, name: 'Nome do produto', image: sapatoVenda, price: 400, priceDiscount: 149.9, categoria: 'Tênis' },
    { id: 4, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
    { id: 5, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
    { id: 6, name: 'Nome do produto', image: sapatoVenda, price: 125, priceDiscount: 35, categoria: 'Tênis' },
    { id: 7, name: 'Nome do produto', image: sapatoVenda, price: 193, priceDiscount: 85, categoria: 'Tênis' },
    { id: 8, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
    { id: 9, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
    { id: 10, name: 'Nome do produto', image: sapatoVenda, price: 149.9, priceDiscount: 49.9, categoria: 'Tênis' },
    { id: 11, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
    { id: 12, name: 'Nome do produto', image: sapatoVenda, price: 50, priceDiscount: 25, categoria: 'Tênis' },
    { id: 13, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
    { id: 14, name: 'Nome do produto', image: sapatoVenda, price: 205, priceDiscount: 149, categoria: 'Tênis' },
    { id: 15, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
    { id: 16, name: 'Nome do produto', image: sapatoVenda, price: 49.9, categoria: 'Tênis' },
]

const storefront = {
    bannerImages: [imagemDoBanner, imagemDoBanner, imagemDoBanner, imagemDoBanner],
    productDetailImages: [sapatoRoxo, sapatoAmarelo, sapatoRosa, sapatoMarrom, sapatoBege],
    produtos: products,
}

export default storefront
