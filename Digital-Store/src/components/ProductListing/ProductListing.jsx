import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'
import { Link } from 'react-router-dom'


export default function ProductiListing({listProduto}) {
    return (
        <div className="ProductiListing">
            {
                listProduto.map((item,index)=>{
                    return(
                        <Link to={'produtos/:id'}  key={index} className='linkProductCard'>
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





  
