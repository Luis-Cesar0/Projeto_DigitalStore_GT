import './Ordenar.css';

export default function Ordernar() {
    return (
        <div className="container">
            <div className="sidebar">
                <div className="ordenarCampo">
                    <label className="tituloOrdenar">Ordenar por:</label>
                    <select className="listChoiceObjects" name="Ordenar por" id="ordenar">
                        <option value="menorPreco">Menor preço</option>
                        <option value="maiorPreco">Maior preço</option>
                    </select>
                </div>
            </div>
            <div className="conteudo">
                <div className="tituloResultado">
                    Resultados para <span>"Tenis"</span> - <span className="resultado">"389" Produtos</span>
                </div>
                
            </div>
        </div>
    );
}
