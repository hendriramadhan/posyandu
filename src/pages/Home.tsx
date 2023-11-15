import inb from "../assets/ibu dan bayi.png";
import bg from "../assets/bg color.png";
import { Container, Button } from "react-bootstrap";

export function Home() {
  return (
    <>
      <img className="background-home" src={bg} alt="" />
      <img className="mom" src={inb} alt="Gambar Ibu dan Bayi" />
      <main className="home">
        <Container>
          <h2>Posyandu Sahabat Masyarakat</h2>
          <p>
            Dikelola dan diselengarakan dari, oleh, untuk, dan bersama
            masyarakat.
          </p>
          <Button>Cek Kesehatan</Button>
        </Container>
      </main>
    </>
  );
}
