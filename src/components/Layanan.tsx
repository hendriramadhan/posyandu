import { Container, Row, Col, Card } from "react-bootstrap";
import mother from "../assets/mdi_mother-nurse.png";
import kb from "../assets/map_unisex.png";
import inj from "../assets/bxs_injection.png";
import baby from "../assets/baby.png";
import diare from "../assets/lambung.png";

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
        <Row className="d-flex justify-content-center flex-wrap mt-5 gap-2">
          <Col md={3} className="">
            <Card style={{ width: "15rem" }} className="mt-4">
              <img src={mother} alt="" className="mx-auto my-1 mt-3" />
              <h3 className="pt-2 fs-5 text-center mb-3">Ibu & Anak</h3>
            </Card>
          </Col>
          <Col md={3} className="">
            <Card style={{ width: "15rem" }} className="mt-4">
              <img src={kb} alt="" className="mx-auto my-1 mt-3 " />
              <h3 className="pt-2 fs-5 text-center mb-3">Program KB</h3>
            </Card>
          </Col>
          <Col md={3} className="">
            <Card style={{ width: "15rem" }} className="mt-4">
              <img src={inj} alt="" className="mx-auto my-1 mt-3 " />
              <h3 className="pt-2 fs-5 text-center mb-3">Imunisasi Anak</h3>
            </Card>
          </Col>
          <Col md={3} className="">
            <Card style={{ width: "15rem" }} className="mt-4">
              <img src={baby} alt="" className="mx-auto my-1 mt-3 " />
              <h3 className="pt-2 fs-5 text-center mb-3">Gizi Anak</h3>
            </Card>
          </Col>
          <Col md={3} className="">
            <Card style={{ width: "15rem" }} className="mt-4">
              <img src={diare} alt="" className="mx-auto my-1 mt-3 " />
              <h3 className="pt-2 fs-5 text-center mb-3">
                Penanggulangan Diare
              </h3>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
