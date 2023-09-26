import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Axios() {
  return (
    <div>
      <Header />
      <main className="container">
        <h1>Axios</h1>
        <ul>
            <li>
                <Link to="/axios-categorias">Categorías</Link>
            </li>
            <li>
                <Link to="/axios-productos">Productos</Link>
            </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Axios;
