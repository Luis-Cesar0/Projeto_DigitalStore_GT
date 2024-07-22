import './Gallery.css'
import fogo from '../../images/fogo.png'
import { Link } from 'react-router-dom';


function Gallery({ClassName ='galleria-promo',Width,height,radius,showThumbs,images }) {
  
  return (
    <div id="galeria" className={`carousel slide carousel-dark ${ClassName}`} style={
      {width: Width, height: height, borderRadius: radius}
    }>
        {/* container dos botões da parte debaixo do slide */}
        <div className="carousel-indicators" id={showThumbs != true ? "cont-indicators" : "cont-preview"}>
          {/* Usando o map com o array de imagens para cria os botôes para cada slid */}
          {images.map((img, index) => {
            return(
              <button type="button" 
              data-bs-target="#galeria" 
              data-bs-slide-to={index} 
              className={index == 0 ? "indicador active" :"indicador"} 
              aria-current="true" 
              aria-label={`Slide ${index + 1}`} 
              key={index} 
              style={{ borderRadius: radius}}>

                {showThumbs == true && <img src={img} className='img-preview' alt='Imagem do Produto' style={{ borderRadius: radius}}/>}

              </button>
            )
          })}
        </div>

          {/* container onde fica todos os slides */}
        <div className="carousel-inner" id="container-galeria">
            {/* Usando o map com o array de imagens para cria os As imagens de cada slide */}
            {images.map((img,index)=>{
              return(
                <div className={index == 0 ? "carousel-item active" : "carousel-item" } key={index}>
                  <div className="conteudo-galeria">
                        {/* showThumbs para esconder o texto promocional */}
                      {showThumbs != true &&
                        <div className="texto-galeria">
                        <p className="alerta-promo">Melhores ofertas personalizadas</p>
                        <h2>Queima de stoque Nike <img src={fogo} alt="fogo" /></h2>
                        <p className="detalhe-galeria">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <Link to={'produtos/:id'} className="btn-primary">Ver Oferta</Link>
                      </div>}

                    <img src={img} className='img-slide' alt='Imagem do Produto' />
                  </div>
                </div>
              )
            })}
        </div>

        {/* setas que movem o slides */}
        <div id="arrow-galeria">
          <button className="carousel-control-prev " type="button" data-bs-target="#galeria" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#galeria" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
  );
}

export default Gallery;

