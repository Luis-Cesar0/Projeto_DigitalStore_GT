import './ProductCard.css'
import camisaSupreme from './assets/camisa_supreme_carde.png'
export default function ProductCard(){
    return (
    <div className="cardDestaque">
        <div className="infoCard">
            <div className="descontoCard">30% OFF</div>
           
            <h3>
                 Novo drop Supreme
            </h3>
            
            <button type="button" className="btnCard">Comprar</button>
        </div>
        <div className="imagemCard">
        
            <img src={camisaSupreme} alt="Camisa Supreme"/>
        </div>
    </div>
    )
}

