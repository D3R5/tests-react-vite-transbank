import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function LocalStorage() {
  const [existe, setExiste] = useState(
    localStorage.getItem("tokenLocal") !== null ? 1 : 0
  );

  const handleCrear = () => {
    localStorage.setItem("tokenLocal", "12345");
    Swal.fire({
      icon: "success",
      title: "OK",
      text: `Se ha creado el usuario correctamente`,
    });
    setExiste(1);
    console.log(localStorage.getItem("tokenLocal"));
  };
  const handleBorrar = () => {
    localStorage.removeItem("tokenLocal");
    Swal.fire({
      icon: "success",
      title: "OK",
      text: `Se ha borrado el usuario correctamente`,
    });
    setExiste(0);
    console.log(localStorage.getItem("tokenLocal"));
  };

  return (
    <div>
      <Header />
      <main className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/almacenamiento-local">Almacenamiento Local</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              localStorage
            </li>
          </ol>
        </nav>
        <h1>localStorage</h1>
        <button className="btn btn-warning" onClick={handleCrear}>
          Crear localStorage
        </button>
        {existe === 1 && (
          <>
            <p>El valor es: {localStorage.getItem("tokenLocal")}</p>
            <br />
            <button className="btn btn-danger" onClick={handleBorrar}>Borrar</button>

          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default LocalStorage;
