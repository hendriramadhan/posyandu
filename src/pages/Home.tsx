import inb from "../assets/ibu dan bayi.png";
import bg from "../assets/bg color.png";
import { Container, Button, Row, Col } from "react-bootstrap";

export function Home() {
  return (
    <>
      <img className="background-home" src={bg} alt="" />
      <img className="mom" src={inb} alt="Gambar Ibu dan Bayi" />

      <Container>
        <main className="home">
          <Row className="w-100vh min-vh-100">
            <Col md={6}></Col>
            <Col md={6} className="position-absolute top-50 end-0">
              <h2 style={{ fontSize: "3.5rem" }} className="fw-bold text-light">
                Posyandu Sahabat Masyarakat
              </h2>
              <p className="text-light fs-4">
                Dikelola dan diselengarakan dari, oleh, untuk, dan bersama
                masyarakat.
              </p>
              <div className="d-grid pe-xl-5">
                <Button
                  style={{ color: "var(--secondary-color)" }}
                  variant="light"
                  className="fw-bold fs-1 rounded-4 btn-lg"
                >
                  Cek Kesehatan ›
                </Button>
              </div>
            </Col>
          </Row>
        </main>
      </Container>
    </>
  );
}
