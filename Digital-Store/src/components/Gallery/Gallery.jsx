import Carousel from 'react-bootstrap/Carousel';
import sapatoBaner from '../../images/Sapato_Ornamento.png'


function Gallery({className,width,height,radius,showThumbs,images }) {
  
  return (
    <Carousel interval={null}>
        
      <Carousel.Item >
        <img src={sapatoBaner} alt="sapato" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item >
      <img src={sapatoBaner} alt="sapato" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item >
      <img src={sapatoBaner} alt="sapato" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;

