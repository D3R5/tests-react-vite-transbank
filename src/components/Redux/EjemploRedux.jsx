import React from 'react'
import { useSelector, useDispatch } from'react-redux';
import { cambiarMexico, cambiarEEUU, cambiarArgentina, cambiarPeru, cambiarChile } from './Features/procedenciaSlice';
import { sumar, restar, multiplicar, dividir, resetear } from './Features/calculadoraSlice';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function EjemploRedux() {
    // const pais = useSelector((state) => state.procedencia.pais);
    const procedencia = useSelector((state) => state.procedencia);
    const calculadora = useSelector((state) => state.calculadora);
    const dispatch = useDispatch();
  return (
    <div>
        <Header />
        <main className='container'>
            <h1>Ejemplo Redux</h1>
            <ul>
                <li>Pais: {procedencia.pais}</li>
                <li>Ciudad: {procedencia.ciudad}</li>
            </ul>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(cambiarMexico())}>Cambiar a México</button>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(cambiarArgentina())}>Cambiar a Argentina</button>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(cambiarEEUU())}>Cambiar a EEUU</button>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(cambiarPeru())}>Cambiar a Perú</button>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(cambiarChile())}>Cambiar a Chile</button>
            <hr />
            <h1>Ejemplo Redux 2 Calculadora</h1>
            <ul>
                <li>Numero 1: {calculadora.numero1}</li>
                <li>Numero 2: {calculadora.numero2}</li>
                <li>Resultado: {calculadora.resultado}</li>
            </ul>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(sumar())}>Sumar</button>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(restar())}>Restar</button>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(multiplicar())}>Multiplicar</button>
            <hr />
            <button className="btn btn-warning" onClick={() =>dispatch(dividir())}>Dividir</button>
        </main>
        <Footer />
    </div>
  )
}

export default EjemploRedux