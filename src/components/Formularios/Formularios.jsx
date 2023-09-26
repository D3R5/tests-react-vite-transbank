import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Formularios() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Formularios</h1>
        <ul>
          <li>
            <Link to="/formulario-simple">Formulario Simple</Link>
          </li>
          <li>
            <Link to="/formulario-action-data">Formulario Action Data</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default Formularios;
