import Gallery from "../components/Gallery/Gallery"
import OfertaEspecial from "../components/OfertaEspecial/OfertaEspecial"
import SapatoBaner from '../images/Sapato_Ornamento.png'
import SapatoPerfil from '../images/sapato_perfil_carde_vendas.png'

let listaimg =[SapatoBaner,SapatoBaner,SapatoBaner,SapatoBaner,SapatoBaner,SapatoPerfil]
export default function Home(){
    return(
        <main>
            <Gallery images={listaimg} ClassName='centro'/>
            <OfertaEspecial/>
        </main>
    )
}