import './ProdutosPromocao.css'
import CamisaSupreme from '../../images/camisa_supreme_carde.png'
import TenisAdidas from '../../images/sapato_preto_carde.png'
import BeatBass from '../../images/foneDeOuvido.png'

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

    return (
        <div className='colecoesEmDestaque'>
            <strong>Coleções em destaque</strong>
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
        </div>
    );
}

export default ProdutosPromocao;