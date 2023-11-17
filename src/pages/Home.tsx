import inb from "../assets/womanbaby.png";
import bg from "../assets/bg color.png";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Layanan } from "../components/Layanan";

export function Home() {
  return (
    <main>
      <div className="home">
        <section className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="mt-5 d-flex align-items-center mb-5">
              <Col md={6}>
                <img
                  className="img-fluid mom"
                  src={inb}
                  alt="Gambar Ibu dan Bayi"
                />
              </Col>
              <Col md={6} className="pt-lg-0 pt-5">
                <h2 className="fw-bold text-light">
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
          </Container>
        </section>
        {/* </Container> */}
      </div>
      <section>
        <Layanan />
      </section>
    </main>
  );
}
