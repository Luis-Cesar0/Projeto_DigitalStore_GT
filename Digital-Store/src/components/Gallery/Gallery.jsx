import Carousel from 'react-bootstrap/Carousel';
import sapatoBaner from '../../images/Sapato_Ornamento.png'


function Gallery() {
  return (
    <Carousel interval={null}>
        
      <Carousel.Item >
        <img src={sapatoBaner} alt="sapato" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item >
      <img src={sapatoBaner} alt="sapato" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item >
      <img src={sapatoBaner} alt="sapato" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;

