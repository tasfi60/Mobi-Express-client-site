import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container'>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className='text-container1'>
            <h3>Welcome to Mobi Express</h3>
            <p>Best place for buying & Selling</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption className='text-container text-dark'>
          <h3>Welcome to Mobi Express</h3>
            <p>Best place for buying & Selling</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption className='text-container text-dark'>
          <h3>Welcome to Mobi Express</h3>
            <p>
            Best place for buying & Selling
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
};

export default Banner;