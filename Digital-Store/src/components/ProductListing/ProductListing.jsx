import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'


export default function ProductiListing({listProduto}) {
    return (
        <div className="ProductiListing">
            {
                listProduto.map((item,index)=>{
                    return(<ProductCard img={item.image} nome={item.name} preco={item.price} precoDesconto={item.priceDiscount} categoria={item.categoria} key={index}/>)
                })
            }
        </div>
    )
}





// let produtos= [
//   {
//     name: "Nome do produto 1",
//     image: sapatoProduto,
//     price: 200,
//     priceDiscount: 149.9,
//     categoria: 'Tênis'
//   },
//   {
//     name: "Nome do produto 2",
//     image: "./images/sapato_azul_Dstore.png",
//     price: 49.9,
//     categoria: 'Blusa'
//   }
//   ]
