import './ProductCard.css'


export default function ProductCard({img, nome, preco,precoDesconto='vazio',categoria} )
{
    let descporcento= ((preco - precoDesconto) *100)/preco
    let imgBackgraud ={
        backgroundImage: `url(${img})`
    }
    return(
        <div className="cardProduto">
            
            <div className="cont-imagem-txto" style={imgBackgraud} >
            {precoDesconto != 'vazio' && <p className='decprocento'>{descporcento.toFixed()}% OFF</p>}
           </div>
           <div className='descricao-produto'>
               <p className='categoria'>{categoria}</p>
                <h4>{nome}</h4>
                <div className='cont-preco'>
                    {precoDesconto == 'vazio' && <p className='texte-valor'>R${preco}</p> }
                    {precoDesconto != 'vazio' && <p className='texte-valor precoDesc'>R${preco}</p>}
                    {precoDesconto != 'vazio' && <p className='texte-valor'>R${precoDesconto}</p>}
                    
                </div>
           </div>
        </div>
    )
}
