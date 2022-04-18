import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner01.jpg'
import banner2 from '../../../image/banner02.jpg'
import banner3 from '../../../image/banner03.jpg'
// import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);}
    
    return (
        <div className='carousel-container mt-3'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-50 mx-auto"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className='w-50 mx-auto'>
      <h2>Book a summer wedding with a discount!</h2>
      <p className='text-black'> If you’d like to invite me for a summer wedding photoshoot, please do it now, as in that case I will offer you a 10% discount!.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-50 mx-auto"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption className='w-50 mx-auto'>
      <h2>Wedding Photography and Videography</h2>
      <p className='text-black'>We’re capturing the best moments on film, while each time presenting a unique standpoint.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-50 mx-auto"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption className='w-50 mx-auto'>
      <h2 className='text-black'>Order RAW images and save money!</h2>
      <p className='text-black'>If you discard after-edited option for your wedding photos and will take RAW ones, the total price of your photoshoot will be cut by 15%!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;