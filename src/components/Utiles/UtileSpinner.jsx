import React from "react";
import './spinner.css'
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function UtileSpinner() {
  return (
    <div>
      <Header />
      <main className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/utiles">Utiles</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Spinner
            </li>
          </ol>
        </nav>
        <h1>Spinner</h1>
        <h3>Spinner</h3>
      </main>
      <div class="spinner"></div>
      <Footer />
    </div>
  );
}

export default UtileSpinner;
