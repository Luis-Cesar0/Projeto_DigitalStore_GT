import Gallery from "../components/Gallery/Gallery"
import OfertaEspecial from "../components/OfertaEspecial/OfertaEspecial"
import SapatoBaner from '../images/Sapato_Ornamento.png'
// import Sapatoroxo from '../images/sapato-roxo.png'
// import Sapatobege from '../images/sapato-bege.png'
// import Sapatorosa from '../images/sapato-rosa.png'
// import Sapatomarron from '../images/sapato-marron.png'
// import Sapatoamarelo from '../images/sapato-amarelo.png'

// const listspatos = [Sapatoroxo,Sapatobege,Sapatorosa,Sapatomarron,Sapatoamarelo]
 const listaimg =[SapatoBaner,SapatoBaner,SapatoBaner,SapatoBaner,SapatoBaner]
export default function Home(){
    return(
        <main>
            <Gallery images={listaimg} />
            <OfertaEspecial/>
        </main>
    )
}