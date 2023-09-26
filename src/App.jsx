import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Hooks from "./components/Hooks/Hooks";
import Error from './components/404/Error';
import Formularios from "./components/Formularios/Formularios";
import FormularioSimple from "./components/Formularios/FormularioSimple";
import Utiles from "./components/Utiles/Utiles";
import UtilesDaysJs from "./components/Utiles/UtilesDaysJs";
import UtileSpinner from "./components/Utiles/UtileSpinner";
import AlmacenamientoLocal from "./components/AlmacenamientoLocal/AlmacenamientoLocal";
import LocalStorage from "./components/AlmacenamientoLocal/LocalStorage";
import SesionStorage from "./components/AlmacenamientoLocal/SesionStorage";
import Context from "./components/Context/Context";
import EjemploRedux from "./components/Redux/EjemploRedux";
import Axios from "./components/Axios/Axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/formularios" element={<Formularios />} />
          <Route path="/formulario-simple" element={<FormularioSimple />} />
          <Route path="/utiles" element={<Utiles />} />
          <Route path="/utiles-dayjs" element={<UtilesDaysJs />} />
          <Route path="/utiles-spinner" element={<UtileSpinner />} />
          <Route path="/almacenamiento-local" element={<AlmacenamientoLocal />} />
          <Route path="/almacenamiento-local-localstorage" element={<LocalStorage />} />
          <Route path="/almacenamiento-local-sesionstorage" element={<SesionStorage />} />
          <Route path="/context" element={<Context />} />
          <Route path="/redux" element={<EjemploRedux />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
