import { useState } from 'react'
import PropTypes from 'prop-types'
import './BuyBox.css'

const formatPrice = (price) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function BuyBox({ name, reference, categoria, stars, rating, price, priceDiscount, description }) {
    const [activeColor, setActiveColor] = useState('azul')
    const [activeSize, setActiveSize] = useState('39')
    const sizes = ['39', '40', '41', '42', '43']
    const colors = [
        { name: 'azul', label: 'Azul' },
        { name: 'vermelho', label: 'Vermelho' },
        { name: 'cinza', label: 'Cinza' },
        { name: 'roxo', label: 'Roxo' },
    ]
    const hasDiscount = Number.isFinite(priceDiscount) && priceDiscount < price

    return (
        <section className="BuyBox" aria-labelledby="product-name">
            <div className="BoxTextReference">
                <h1 id="product-name">{name}</h1>
                <div className="cont-catMarcaRef">
                    <p>{categoria}</p>
                    <p>Ref: {reference}</p>
                </div>
            </div>

            {Number.isFinite(stars) && Number.isFinite(rating) && (
                <div className="estrelas" aria-label={`Avaliação ${stars} de 5, ${rating} avaliações`}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <i className={`bi ${index < Math.trunc(stars) ? 'bi-star-fill' : 'bi-star'} amarelo`} key={index} aria-hidden="true" />
                    ))}
                    <span className="qtdEstrelas">{stars}<i className="bi bi-star-fill" aria-hidden="true" /></span>
                    <span className="qtdAvalia">({rating} avaliações)</span>
                </div>
            )}

            <div className={hasDiscount ? 'cont-preceDesc' : 'cont-prece'}>
                {hasDiscount && <p className="preco">{formatPrice(price)}</p>}
                <p className={hasDiscount ? 'precodesc' : 'preco'}>{formatPrice(hasDiscount ? priceDiscount : price)}</p>
            </div>

            <div className="descricao">
                <h2>Descrição do produto</h2>
                <p>{description}</p>
            </div>

            <div className="tamanho">
                <h2>Tamanho</h2>
                {sizes.map((size) => (
                    <button
                        type="button"
                        className={activeSize === size ? 'actiBtn' : ''}
                        onClick={() => setActiveSize(size)}
                        aria-pressed={activeSize === size}
                        key={size}
                    >
                        {size}
                    </button>
                ))}
            </div>

            <div className="cores">
                <h2>Cor</h2>
                {colors.map(({ name: color, label }) => (
                    <button
                        type="button"
                        className={activeColor === color ? 'actiColor' : ''}
                        onClick={() => setActiveColor(color)}
                        aria-label={label}
                        aria-pressed={activeColor === color}
                        key={color}
                    >
                        <span className={color} aria-hidden="true" />
                    </button>
                ))}
            </div>

            <button
                className="btncomprar"
                type="button"
                disabled
                title="Fluxo de compra não disponível nesta demonstração"
                aria-label="Compra desativada nesta demonstração"
            >
                COMPRAR
            </button>
        </section>
    )
}

BuyBox.propTypes = {
    name: PropTypes.string.isRequired,
    reference: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    categoria: PropTypes.string.isRequired,
    stars: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.number.isRequired,
    priceDiscount: PropTypes.number,
    description: PropTypes.string.isRequired,
}
