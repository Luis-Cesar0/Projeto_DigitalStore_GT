import './Gallery.css'
import sapatoBaner from '../../images/Sapato_Ornamento.png'
import fogo from '../../images/fogo.png'


function Gallery({className,width,height,radius,showThumbs,images }) {
  
  return (
    <div id="galeria" class="carousel slide carousel-dark">

        <div class="carousel-indicators" id="cont-indicators">
          <button type="button" data-bs-target="#galeria" data-bs-slide-to="0" class="indicador active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#galeria" data-bs-slide-to="1" class="indicador" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#galeria" data-bs-slide-to="2" class="indicador" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner" id="container-galeria">

          <div class="carousel-item active ">
            <div class="conteudo-galeria">
  
              <div class="texto-galeria">
                <p class="alerta-promo">Melhores ofertas personalizadas</p>
                <h2>Queima de stoque Nike 🔥</h2>
                <p class="detalhe-galeria">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button class="btn-primary">Ver Oferta</button>
              </div>

              <img src={sapatoBaner} class="img-galeria" alt="..."/>
            </div>

          </div>

          <div class="carousel-item">

            <div class="conteudo-galeria">

              <div class="texto-galeria">
                <p class="alerta-promo">Melhores ofertas personalizadas</p>
                <h2>Queima de stoque Nike 🔥</h2>
                <p class="detalhe-galeria">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button class="btn-primary">Ver Oferta</button>
              </div>

            

             <img src={sapatoBaner} class="img-galeria" alt="..."/>
          </div>
          </div>

          <div class="carousel-item">

            <div class="conteudo-galeria">
              <div class="texto-galeria">
                <p class="alerta-promo">Melhores ofertas personalizadas</p>
                <h2>Queima de stoque Nike 🔥</h2>
                <p class="detalhe-galeria">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button class="btn-primary">Ver Oferta</button>
              </div>
           

              <img src={sapatoBaner} class="img-galeria" alt="..."/>
            </div>
          </div>

        </div>

        <div id="arrow-galeria">
          <button class="carousel-control-prev " type="button" data-bs-target="#galeria" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#galeria" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
  );
}

export default Gallery;

