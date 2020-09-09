import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
          className="d-block w-100 "
          src="https://tieducacional.com.br/wp-content/uploads/2016/08/panorama-atual-das-mulheres-em-ti-730x330.png"
          alt="Third slide"
        />       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://tieducacional.com.br/wp-content/uploads/2017/03/profissional-ti-importancia-atualizado-730x330.png"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
  }

export default ControlledCarousel;