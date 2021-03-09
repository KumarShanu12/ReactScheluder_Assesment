import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar } from "react-bootstrap";

const Footer: FunctionComponent = () => {
  return (
    <>
      <Navbar
        bg="dark"
        style={{ position: "relative", top: "50px", height: "50px" }}
      >
        <p style={{color:'white',position:'relative',left:'550px'}}>  © All right reserved</p>
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Navbar>
    </>
  );
};
export default Footer;
