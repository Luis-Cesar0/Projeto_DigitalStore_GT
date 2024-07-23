import './PaginaNaoEncontrada.css'
import imgError from '../images/error404.png'
import { Link } from 'react-router-dom'

export default function PaginaNaoEncotrada(){
    return(
        
        <div className="divErro404">
            <div className='conteinerErro404'>
                <div className='erro404'>
                    <h1>4</h1>
                    <img src={imgError} alt="Erro 404"/>
                    <h1>4</h1>
                    
                    
                </div>
                <div className="mensagemErro">
                    <h2>Erro</h2>
                    <h3>Página não encontrada</h3>
                </div>
            </div>
            <Link to={'/'} className="botaoHome">Voltar para o Início</Link>
        </div>
    )
}