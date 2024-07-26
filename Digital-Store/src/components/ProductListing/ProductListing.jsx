import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'
import { Link } from 'react-router-dom'


export default function ProductiListing({listProduto ,url}) {
    return (
        <div className="ProductiListing">
            {/* faz um loop para gera os card dentro da lista de cardes*/}
            {
                listProduto.map((item,index)=>{
                    return(
                        <Link to={url}  key={index} className='linkProductCard'>
                            <ProductCard img={item.image} 
                            nome={item.name} 
                            preco={item.price} 
                            precoDesconto={item.priceDiscount} 
                            categoria={item.categoria}/> 
                            </Link>)
                })
            }
        </div>
    )
}





  
