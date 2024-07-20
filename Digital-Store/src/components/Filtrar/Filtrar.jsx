
import './Filtrar.css';

export default function Filtrar() {
    return (
        <div className="Cont-filtro">
            <h5 className="titulo">Filtrar Por</h5>
                <hr />
            <div className="colunaCheckbox">
                
               <div id='cont-Marka' className='cont-Categorias'>

                    <h5 className="subtitulos">Marka</h5>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Adidas</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Balenciaga</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">K-Swiss</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Nike</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Puma</label>
                    </div>

               </div>
               <div id='cont-Categoria' className='cont-Categorias'>
                   
                    <h5 className="subtitulos">Categoria</h5>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Esporte e Lazer</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Casual</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Utilitário</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Corrida</label>
                    </div>

               </div>
               <div id='cont-Genero' className='cont-Categorias'>
                   
                    <h5 className="subtitulos">Gênero</h5>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Masculino</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Feminino</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Unissex</label>
                    </div>

               </div>
                <div id='cont-Estado' className='cont-Categorias'>

                    <h5 className="subtitulos">Estado</h5>
                    <div>
                        <input type="radio" name='estadoProduto' id='produtoNova' style={{ border: "1px solid black" }} />
                        <label htmlFor="produtoNova">Novo</label>
                    </div>
                    <div>
                        <input type="radio" name='estadoProduto' id='produtoUsado'/>
                        <label htmlFor="produtoUsado">Usado</label>
                    </div>

                </div>
            </div>
        </div>
    );
}
