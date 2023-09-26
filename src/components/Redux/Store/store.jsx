import { configureStore } from "@reduxjs/toolkit";
import procedenciaReducer from "../Features/procedenciaSlice";
import calculadoraReducer from "../Features/calculadoraSlice";

export const store = configureStore({
    reducer: {
        procedencia: procedenciaReducer,
        calculadora: calculadoraReducer,
    }
})