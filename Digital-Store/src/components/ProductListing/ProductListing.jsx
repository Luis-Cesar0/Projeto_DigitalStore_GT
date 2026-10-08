import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'

export default function ProductiListing({ listProduto }) {
    return (
        <div className="ProductiListing">
            {listProduto.map((item) => (
                <Link
                    to={`/produtos/${item.id}`}
                    key={item.id}
                    className="linkProductCard"
                    aria-label={`Ver detalhes: ${item.name}`}
                >
                    <ProductCard
                        img={item.image}
                        nome={item.name}
                        preco={item.price}
                        precoDesconto={item.priceDiscount}
                        categoria={item.categoria}
                    />
                </Link>
            ))}
        </div>
    )
}

ProductiListing.propTypes = {
    listProduto: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        priceDiscount: PropTypes.number,
        categoria: PropTypes.string.isRequired,
    })).isRequired,
}
