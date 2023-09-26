import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function FormularioSimple() {
    const [nombre, setNombre] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
          icon: "success",
          title: "¡Ok!",
          text: "Se ha guardado correctamente tu nombre: " + nombre,
        });
        console.log("el nombre es " + nombre);
    }

  return (
    <div>
      <Header />
      <main className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/formularios">Formularios</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Formularios Simples
                </li>
            </ol>
        </nav>
        <h3>Formulario Simple</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}/>
            </div>
            <hr />
            <button className="btn btn-warning">Enviar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default FormularioSimple;
