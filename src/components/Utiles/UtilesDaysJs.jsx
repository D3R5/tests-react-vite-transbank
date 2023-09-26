import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import 'dayjs/locale/es';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

dayjs.locale('es');
const UtilesDaysJs = () => {
  let fecha = new Date();
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
              DayJs
            </li>
          </ol>
        </nav>
        <h1>DayJs</h1>
        <h3>Formatear Fecha</h3>
        <ul>
          <li>Fecha: {fecha.toString()}</li>
          <li>
            Fecha: {dayjs(fecha).format("dddd")} {dayjs(fecha).format("DD")}{" "}
            {dayjs(fecha).format("MMMM")} {dayjs(fecha).format("YYYY")}{" "}
            {dayjs(fecha).format("HH:mm:ss")}
          </li>
          <li>Fecha Corta: {dayjs(fecha).format("DD/MM/YYYY")}</li>
          <li>Fecha TimeStamp: {fecha.valueOf( )}</li>
        </ul>
        <h3>Cálculos con fecha</h3>
      </main>
      <Footer />
    </div>
  );
};

export default UtilesDaysJs;
