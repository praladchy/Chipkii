import React from 'react'
import "./Carsousel.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Explorer } from '../../Dummy/Photos/Explorer/Explorer';


const Carsousel = () => {
  return (<>


    <Carousel data-bs-theme="dark" className='Carsousel-main-container'>
      <Carousel.Item>
        <img
          className="d-block w-100 Carsousel-Image-Container " id='Carsousel-1'
          src={Explorer.Explorer4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Carsousel-Image-Container"
          id='Carsousel-2'
          //   src={Explorer.Explorer2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Carsousel-Image-Container"
          id='Carsousel-3'
          src={Explorer.Explorer3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Third slide label</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </>
  );

}

export default Carsousel