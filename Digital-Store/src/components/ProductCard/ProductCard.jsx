import PropTypes from 'prop-types'
import './ProductCard.css'

export default function ProductCard({ img, nome, preco, precoDesconto, categoria }) {
    const descontoValido = Number.isFinite(precoDesconto) && precoDesconto < preco
    const descporcento = descontoValido ? Math.round(((preco - precoDesconto) / preco) * 100) : 0
    const imgBackgraud = { backgroundImage: `url(${img})` }

    return (
        <div className="cardProduto">
            <div className="cont-imagem-txto" style={imgBackgraud} role="img" aria-label={nome}>
                {descontoValido && <p className="decprocento">{descporcento}% OFF</p>}
            </div>
            <div className="descricao-produto">
                <p className="categoria">{categoria}</p>
                <h4>{nome}</h4>
                <div className="cont-preco">
                    {!descontoValido && <p className="texte-valor">{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>}
                    {descontoValido && <>
                        <p className="texte-valor precoDesc">{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <p className="texte-valor">{precoDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </>}
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    precoDesconto: PropTypes.number,
    categoria: PropTypes.string.isRequired,
}
