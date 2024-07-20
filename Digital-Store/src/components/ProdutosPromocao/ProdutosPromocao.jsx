import './ProdutosPromocao.css'
import CamisaSupreme from '../../images/camisa_supreme_carde.png'
import TenisAdidas from '../../images/sapato_preto_carde.png'
import BeatBass from '../../images/foneDeOuvido.png'
import Camisetas from '../../images/camisetas.png'
import Calcas from '../../images/calcas.png'
import Headphones from '../../images/headphones.png'
import Tenis from '../../images/tenis.png'

const ProdutosPromocao = () => {
    const cards = [
        {
            promo: '30',
            text: 'Novo drop Supreme',
            img: CamisaSupreme,
            nome: 'Camisa Supreme'
        },
        {
            promo: '30',
            text: 'Coleção Adidas',
            img: TenisAdidas,
            nome: 'Tênis Adidas'
        },
        {
            promo: '30',
            text: 'Novo Beats Bass',
            img: BeatBass,
            nome: 'Beat Bass'
        }
    ];

    const destaques = [
        {
            img:Camisetas,
            titulo:'Camisetas'
        },
        {
            img:Calcas,
            titulo:'Calças'
        },
        {
            img:Calcas,
            titulo:'Bonés'
        },
        {
            img:Headphones,
            titulo:'Headphones'
        },
        {
            img:Tenis,
            titulo:'Tênis'
        }


    ]

    return (
        <div className="cardsEmDestaque">
            <div className="listaCardDestaque">
                {cards.map((produto, index) => (
                    <div key={index} className="cardDestaque">
                        <div className="infoCard">
                            <div className="descontoCard">{produto.promo}% OFF</div>
                            <h3>{produto.text}</h3>
                            <button type="button" className="btnCard">Comprar</button>
                        </div>
                        <div className="imagemCard">
                            <img src={produto.img} alt={produto.nome} />
                        </div>
                    </div>
                ))}
            </div>
            <strong style={{ textAlign:'center'}}>Coleções em destaque</strong>
            <div className="itensEmDestaque">
            {destaques.map((destaque) => (
                <div className="itensColecoes">
                    <div className="imgColecoes">
                        <img src={destaque.img} alt={destaque.titulo}/>
                    </div>
                    <p>{destaque.titulo}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ProdutosPromocao;