import React, { useState } from "react";

import image from "../pics/child.png";
import image2 from "../pics/child1.png";
import image3 from "../pics/child2.png";
import Footer from './Footer'


import { Navbar, Nav, Form, Carousel } from "react-bootstrap";
import Info from "./InfoS";
import InquiryForm from "./InquiryForm";
import PodarLocation from "./PodarLocations";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
  return (
    <>
      <Carousel style={{ height: "400px" }}>
        <Carousel.Item interval={400}>
          <img
            style={{ height: "400px", width: "200px" }}
            className="d-block w-100"
            src={image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "brown" }}>Podar Public School</h3>
            <p>Study is the way to bright future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={400}>
          <img
            style={{ height: "400px", width: "200px" }}
            className="d-block w-100"
            src={image2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "brown" }}>Podar Public School</h3>
            <p>Study makes the future bright.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={400}>
          <img
            style={{ height: "400px", width: "200px" }}
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "brown" }}>Podar Public School</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Info />
      <PodarLocation />
      <InquiryForm />
      <Footer/>
    </>
  );
};

export default About;
