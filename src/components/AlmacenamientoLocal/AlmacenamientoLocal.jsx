import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AlmacenamientoLocal() {
  return (
    <div>
      <Header />
        <main className="container">
            <h1>Almacenamiento Local</h1>
            <ul>
                <li>
                    <NavLink to="/almacenamiento-local-localstorage">localStorage</NavLink>
                </li>
                <li>
                    <NavLink to="/almacenamiento-local-sesionstorage">sesionStorage</NavLink>
                </li>
            </ul>
        </main>
      <Footer />
    </div>
  );
}

export default AlmacenamientoLocal;
