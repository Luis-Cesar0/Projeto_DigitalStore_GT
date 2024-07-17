import './CardProduto.css'


export default function CardProduto({img, nome, preco,precoDesconto='vazio'} )
{
    let descporcento= ((preco - precoDesconto) *100)/preco
    const divStyle = {
        backgroundImage: `url(${img})`,
    };
    return(
        <div className="cardProduto">
            
            <div className="cont-imagem-txto" style={divStyle}>
            <p className='decprocento'>{descporcento.toFixed()}</p>
            </div>
            <h4>{nome}</h4>
            <div className='cont-preco'>
                {precoDesconto != 'vazio' && <p>R${precoDesconto}</p>}
                {precoDesconto == 'vazio' && <p>R${preco}</p> }
                {precoDesconto != 'vazio' && <p>R${preco}</p>}
                </div>
        </div>
    )
}
