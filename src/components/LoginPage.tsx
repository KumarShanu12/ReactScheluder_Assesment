import { Button, Alert, Navbar, Nav, NavDropdown, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const LoginPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "red", width: "1300px", height: "100px" }}>
        <h3 style={{ position: "absolute", left: "600px", fontSize: "30px" }}>
          Login Form
        </h3>
      </div>
      <Form className="text-center">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default LoginPage;
