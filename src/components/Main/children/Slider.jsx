import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styles from '../../../styles.module.css';
import vagonka1 from '../../../images/vagonka1.png';
import vagonka2 from '../../../images/vagonka2.png';

export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={vagonka1} alt='вагонка' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={vagonka2} alt='вагонка' />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
