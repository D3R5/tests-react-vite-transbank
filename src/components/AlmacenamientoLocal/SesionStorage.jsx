import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SesionStorage() {
    const [existe, setExiste] = useState(
        sessionStorage.getItem("tokenLocal") !== null ? 1 : 0
      );
    
      const handleCrear = () => {
        sessionStorage.setItem("tokenLocal", "12345");
        Swal.fire({
          icon: "success",
          title: "OK",
          text: `Se ha creado el usuario correctamente`,
        });
        setExiste(1);
        console.log(sessionStorage.getItem("tokenLocal"));
      };
      const handleBorrar = () => {
        sessionStorage.removeItem("tokenLocal");
        Swal.fire({
          icon: "success",
          title: "OK",
          text: `Se ha borrado el usuario correctamente`,
        });
        setExiste(0);
        console.log(sessionStorage.getItem("tokenLocal"));
      };

  return (
    <div>
      <Header />
      <main className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/almacenamiento-local">Almacenamientosesion</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
             sesionStorage
            </li>
          </ol>
        </nav>
        <h1>sesionStorage</h1>
        <button className="btn btn-warning" onClick={handleCrear}>
          Crear localStorage
        </button>
        {existe === 1 && (
          <>
            <p>El valor es: {sessionStorage.getItem("tokenLocal")}</p>
            <br />
            <button className="btn btn-danger" onClick={handleBorrar}>Borrar</button>

          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default SesionStorage;
