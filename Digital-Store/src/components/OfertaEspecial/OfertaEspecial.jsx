import './OfertaEspecial.css'
import airJordan from '../../images/doisSapatosAmarelo.png'
export default function OfertaEspecial(){
    return (
<div className="ofertaEspecial">
    <div className="conteiner">
        <div className="imgProduto">
            <img src={airJordan} alt="Air Jordan"/>
        </div>

        <div className="descricaoOferta">
            <strong>Oferta especial</strong>
            <h2>
                Air Jordan edição de colecionador
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <input type="button" value="Ver Oferta"/>
        </div>
    </div>
</div>
    )
}