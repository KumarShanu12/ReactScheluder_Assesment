import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import slogo from "../pics/podarLogo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <img
            src={slogo}
            alt="Logo"
            style={{ width: "250px", height: "100px" }}
          />

          <NavLink exact activeClassName="active_class" to="/">
            About us{" "}
          </NavLink>

          <NavLink exact activeClassName="active_class" to="/home">
            Home Page{" "}
          </NavLink>

          <NavLink exact activeClassName="active_class" to="/Signup">
            Sign-Up{" "}
          </NavLink>

          <NavLink exact activeClassName="active_class" to="/Login">
            Login-Up{" "}
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Menu;
