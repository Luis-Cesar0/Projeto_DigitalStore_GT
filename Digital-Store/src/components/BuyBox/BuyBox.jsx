import { useState } from 'react'
import './BuyBox.css'

export default function BuyBox({name,reference,Marca,categoria,stars,rating,prece,priceDiscount,description}) {
    const items = [0,1,2,3,4]

    const [activeColor, setActiveColor] = useState('azul');

    const handleClickColor= (color) => {
        setActiveColor(color);
    };
    const [activeBtn, setActiveBtn] = useState('azul');

    const handleClickBtn = (numero) => {
        setActiveBtn(numero);
    };
    return(
        <div className="BuyBox">
            <div className="BoxTextReference">
                <h1>{name}</h1>
                <div className='cont-catMarcaRef'>
                    <p>{categoria} |</p>
                    <p>{Marca} |</p>
                    <p>REF:{reference}</p>
                </div>
            </div>
                <div className="estrelas">
                    {
                        items.map((index) => {
                            
                           return (
                            index < Math.trunc(stars) ?
                           <i className="bi bi-star-fill amarelo" key={index}></i>
                           :
                           <i className="bi bi-star amarelo " key={index}></i>
                        )
                        })
                    }
                    <span className='qtdEstrelas'>{stars}<i className="bi bi-star-fill"></i></span>
                    <span className='qtdAvalia'>{`(${rating} avaliações)`}</span>
                </div>
                
                    {
                        priceDiscount ? 
                        <div className='cont-preceDesc'>
                            <p className='precodesc'>R$<strong>{priceDiscount}</strong></p>
                            <p className='preco'>{`R$${prece}`}</p>
                        </div>
                        :
                        <div className='cont-prece'>
                            <p className='preco'>{`R$${prece}`}</p>
                        </div>
                        
                    }
                    <div className='descricao'>
                        <h5>Descrição do produto</h5>
                        <p>{description}</p>
                    </div>
                    <div className="tamanho">
                        <h5>Tamanho</h5>
                        <button className={activeBtn === '39' ? 'acticolor' : ''} onClick={() => handleClickBtn('39')}>39</button>
                        <button className={activeBtn === '40' ? 'acticolor' : ''} onClick={() => handleClickBtn('40')}>40</button>
                        <button className={activeBtn === '41' ? 'acticolor' : ''} onClick={() => handleClickBtn('41')}>41</button>
                        <button className={activeBtn === '42' ? 'acticolor' : ''}onClick={() => handleClickBtn('42')}>42</button>
                        <button className={activeBtn === '43' ? 'acticolor' : ''} onClick={() => handleClickBtn('43')}>43</button>
                    </div>
                    <div className='cores'>
                        <h5>Tamanho</h5>
                        <button className={activeColor === 'azul' ? 'acticolor' : ''} onClick={() => handleClickColor('azul')}><p className='azul'></p></button>
                <button className={activeColor === 'vermelho' ? 'acticolor' : ''} onClick={() => handleClickColor('vermelho')}><p className='vermelho'></p></button>
                <button className={activeColor === 'cinza' ? 'acticolor' : ''} onClick={() => handleClickColor('cinza')}><p className='cinza'></p></button>
                <button className={activeColor === 'roxo' ? 'acticolor' : ''} onClick={() => handleClickColor('roxo')}><p className='roxo'></p></button>
                    </div>
                    <a href="#" className='btncomprar'>COMPRAR</a>
            
        </div>
    )
}