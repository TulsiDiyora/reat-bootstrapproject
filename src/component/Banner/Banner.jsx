import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner.webp';
import banner2 from '../../assets/banner2.webp';
import banner3 from '../../assets/banner3.webp';
import ShowBtn from '../ShowBtn/ShowBtn';
import './Banner.css';

const Banner = () => {
  return (
    <section>
      <Carousel controls={false} >
        <Carousel.Item>
          <img  className="d-block w-100"  src={banner1}  alt="First slide"/>
          <div className="banner-content">
            <h1 className='fw-bold b-title display-3 pb-5'> A
              <span> Shelter Pet Wants </span> 
              <br />
              To Meet You
            </h1>
            <ShowBtn />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img  className="d-block w-100"  src={banner2}  alt="Second slide" />
          <div className="banner-content1 text-center">
              <h1 className='fw-bold b-title display-3 pb-5'> Shop All 
              <span>  Pet Products </span> 
            </h1>
            <ShowBtn />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img  className="d-block w-100"  src={banner3}  alt="Third slide"/>
          <div className="banner-content2 ">
              <h1 className='fw-bold b-title display-3 pb-5'> It's 
              <span> About Making </span> New <br/> Friends
            </h1>
            <ShowBtn />
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Banner;


