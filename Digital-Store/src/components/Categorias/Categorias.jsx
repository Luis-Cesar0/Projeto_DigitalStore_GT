// recuços
import { useState } from 'react'
import { Link } from 'react-router-dom'

//imagens 
import Camisetas from '../../images/camisetas.png'
import Calcas from '../../images/calcas.png'
import Headphones from '../../images/headphones.png'
import Tenis from '../../images/tenis.png'
import CamisetasRosa from '../../images/camisetas-rosa.png'
import CalcasRosa from '../../images/calcas-rosa.png'
import HeadphonesRosa from '../../images/headphones-rosa.png'
import TenisRosa from '../../images/tenis-rosa.png'

// estilo
import './Categorias.css'



export default function Categorias(){
    const destaques = [
        {
            img:Camisetas,
            imgRosa:CamisetasRosa,
            titulo:'Camisetas'
        },
        {
            img:Calcas,
            imgRosa:CalcasRosa,
            titulo:'Calças'
        },
        {
            img:Calcas,
            imgRosa:CalcasRosa,
            titulo:'Bonés'
        },
        {
            img:Headphones,
            imgRosa:HeadphonesRosa,
            titulo:'Headphones'
        },
        {
            img:Tenis,
            imgRosa:TenisRosa,
            titulo:'Tênis'
        }
    ]
    const [imagensSrc, setImagensSrc] = useState(destaques.map(destaque => destaque.img));

    const handleMouseEntra = (index, imgEntra) => {
        const novasImagens = [...imagensSrc];
        novasImagens[index] = imgEntra;
        setImagensSrc(novasImagens);
    };

    const handleMouseSaiu = (index, imgSaiu) => {
        const novasImagens = [...imagensSrc];
        novasImagens[index] = imgSaiu;
        setImagensSrc(novasImagens);
    };

    return(
        <div className="itensEmDestaque">
        {destaques.map((destaque,index) => (
            
            <div className="itensColecoes" key={index}>
                
                <Link to={'produtos'}  >
                    <div className="imgColecoes" >
                        <img src={imagensSrc[index]} 
                        alt={destaque.titulo}
                        onMouseEnter={() => handleMouseEntra(index, destaque.imgRosa)}
                        onMouseLeave={() => handleMouseSaiu(index, destaque.img)}
                        id={`imgItem${index}`}
                        />
                    </div>
                </Link>
                <p>{destaque.titulo}</p>
            </div>
        ))}
        </div>
    )
}