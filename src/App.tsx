import { Routes, Route } from "react-router-dom";
import { Daftar } from "./pages/Daftar";
import { Home } from "./pages/Home";
import { Masuk } from "./pages/Masuk";
import { MyNav } from "./components/MyNav";
import { Layanan } from "./components/Layanan";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <body>
        <header>
          <MyNav />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#Layanan" element={<Layanan />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/Masuk" element={<Masuk />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
