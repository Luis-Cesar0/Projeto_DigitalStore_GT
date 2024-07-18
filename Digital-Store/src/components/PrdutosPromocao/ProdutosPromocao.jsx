import './PrdutosPromocao.css'

export default function PrdutosPromocao({promo,text,img}){
    return (
    <div className="cardDestaque">
        <div className="infoCard">
            <div className="descontoCard">{promo}% OFF</div>
           
            <h3>
                 {text}
            </h3>
            
            <button type="button" className="btnCard">Comprar</button>
        </div>
        <div className="imagemCard">
        
            <img src={img} alt="Camisa Supreme"/>
        </div>
    </div>
    )
}

