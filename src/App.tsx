import React from "react";
// import logo from "./logo.svg";
// import './App.css';
import { Routes, Route } from "react-router-dom";
import { Daftar } from "./pages/Daftar";
import { Home } from "./pages/Home";
import { Masuk } from "./pages/Masuk";
import { MyNav } from "./components/MyNav";
import inb from "./assets/ibu dan bayi.png";
import "./assets/index.css";

function App() {
  return (
    <>
      <body>
        <header>
          <MyNav />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/Masuk" element={<Masuk />} />
        </Routes>
        <main>
          <h2>Posyandu Sahabat Masyarakat</h2>
          <p>
            Dikelola dan diselengarakan dari, oleh, untuk, dan bersama
            masyarakat.
          </p>
          <button>Cek Kesehatan</button>
          <img src={inb} alt="Gambar Ibu dan Bayi" />
        </main>
      </body>
    </>
  );
}

export default App;
