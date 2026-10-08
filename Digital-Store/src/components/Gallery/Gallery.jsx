import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import fogo from '../../images/fogo.png'
import './Gallery.css'

function Gallery({ ClassName = 'galleria-promo', Width, height, radius, showThumbs, images }) {
    return (
        <div
            id="galeria"
            className={`carousel slide carousel-dark ${ClassName}`}
            style={{ width: Width, height, borderRadius: radius }}
        >
            <div className="carousel-inner" id="container-galeria">
                {images.map((image, index) => (
                    <div className={`carousel-item${index === 0 ? ' active' : ''}`} key={`slide-${index}`}>
                        <div className="conteudo-galeria">
                            {!showThumbs && (
                                <div className="texto-galeria">
                                    <p className="alerta-promo">Melhores ofertas personalizadas</p>
                                    <h2>Queima de estoque Nike <img src={fogo} alt="" /></h2>
                                    <p className="detalhe-galeria">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                    <Link to="/produtos/1" className="btn-primary">Ver Oferta</Link>
                                </div>
                            )}
                            <img
                                src={image}
                                className="img-slide"
                                alt={showThumbs ? `Imagem ${index + 1} do produto` : 'Tênis em destaque'}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="carousel-indicators" id={showThumbs ? 'cont-preview' : 'cont-indicators'}>
                {images.map((image, index) => (
                    <button
                        type="button"
                        data-bs-target="#galeria"
                        data-bs-slide-to={index}
                        className={`indicador${index === 0 ? ' active' : ''}`}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                        key={`indicator-${index}`}
                        style={{ borderRadius: radius }}
                    >
                        {showThumbs && (
                            <img
                                src={image}
                                className="img-preview"
                                alt=""
                                aria-hidden="true"
                                style={{ borderRadius: radius }}
                            />
                        )}
                    </button>
                ))}
            </div>

            <div id="arrow-galeria">
                <button className="carousel-control-prev" type="button" data-bs-target="#galeria" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#galeria" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
        </div>
    )
}

Gallery.propTypes = {
    ClassName: PropTypes.string,
    Width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    showThumbs: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Gallery
