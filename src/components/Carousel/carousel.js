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
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Ffundo-cinza&psig=AOvVaw1dTLz3-k6G92wOfEJYHMum&ust=1599875905985000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC23p2B4OsCFQAAAAAdAAAAABAD"
          alt="Third slide"
        />       
      </Carousel.Item>

      {/* <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://tieducacional.com.br/wp-content/uploads/2017/03/profissional-ti-importancia-atualizado-730x330.png"
          alt="First slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
  }

export default ControlledCarousel;