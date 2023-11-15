// import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../assets/Logo Posyandu 2 1.png";
import "../assets/index.css";
import { useEffect, useState } from "react";

export function MyNav() {
  const [changeColor, setChangecolor] = useState(false);

  const changeBackgroundColor = () => {
    window.scrollY > 10 ? setChangecolor(true) : setChangecolor(false);

    // if(window.scrollY>10){
    //   setChangecolor(true)
    // }else{
    //   setChangecolor(false)
    // }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <>
      <Navbar
        fixed="top"
        expand="xl"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="#home" className="text-uppercase fs-5">
            <img
              alt="logo"
              src={logo}
              className=" d-inline-block align-center "
            />{" "}
            React Bootstrap
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto fs-5">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/daftar">Layanan</Nav.Link>
              <Nav.Link href="#Home">Blog</Nav.Link>
              <Nav.Link href="#Home">Kontak</Nav.Link>
            </Nav>
            <Nav className="">
              <Button variant="light" className="rounded-4 fs-6">
                Masuk
              </Button>
              <Nav.Link
                href="#Daftar"
                className={
                  changeColor
                    ? "navbar-expand-xl navbar-nav nav-link"
                    : "text-light"
                }
              >
                Daftar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
