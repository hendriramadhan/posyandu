import { Container, Row, Col, Card } from "react-bootstrap";
import mother from "../assets/mdi_mother-nurse.png";

export function Layanan() {
  return (
    <div className="layanan">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="pt-5 text-center text-light" id="layanan">
              Pelayanan Masyarakat
            </h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center flex-wrap mt-5">
          <Col md={3}>
            <Card className="">
              <img
                src={mother}
                alt=""
                className="mx-auto my-1 mt-3" // Center the image horizontally
              />
              <h3 className="pt-2 fs-5 text-center mb-3">Ibu & Anak</h3>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="">
              <img
                src={mother}
                alt=""
                className="mx-auto my-1 mt-3 " // Center the image horizontally
              />
              <h3 className="pt-2 fs-5 text-center mb-3">Ibu & Anak</h3>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="">
              <img
                src={mother}
                alt=""
                className="mx-auto my-1 mt-3 " // Center the image horizontally
              />
              <h3 className="pt-2 fs-5 text-center mb-3">Ibu & Anak</h3>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="">
              <img
                src={mother}
                alt=""
                className="mx-auto my-1 mt-3 " // Center the image horizontally
              />
              <h3 className="pt-2 fs-5 text-center mb-3">Ibu & Anak</h3>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="">
              <img
                src={mother}
                alt=""
                className="mx-auto my-1 mt-3 " // Center the image horizontally
              />
              <h3 className="pt-2 fs-5 text-center mb-3">Ibu & Anak</h3>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
