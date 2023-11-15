import React from "react";
import { Button, NavbarToggle } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export function MyNav() {
  return (
    <>
      <Navbar className="bg-body-tertiary primary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>

          <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/daftar">Layanan</Nav.Link>
              <Nav.Link href="#Home">Blog</Nav.Link>
              <Nav.Link href="#Home">Kontak</Nav.Link>
            </Nav>
            <Button variant="outline-danger">Masuk</Button>
            <Button variant="outline-danger">Daftar</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
