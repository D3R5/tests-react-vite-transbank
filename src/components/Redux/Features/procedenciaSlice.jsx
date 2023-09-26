import { createSlice } from "@reduxjs/toolkit";

const initialState = { pais: "Chile", ciudad: "Santiago" };

export const procedenciaSlice = createSlice({
    name: "procedencia",
    initialState,
    reducers: {
        cambiarMexico: (state) => { state.pais = "Mexico", state.ciudad = "Mexico"},
        cambiarEEUU: (state) => { state.pais = "EEUU", state.ciudad = "Washington" },
        cambiarArgentina: (state) => { state.pais = "Argentina", state.ciudad = "Buenos Aires" },
        cambiarPeru: (state) => { state.pais = "Perú", state.ciudad = "Lima" }, 
        cambiarChile: (state) => { state.pais = "Chile", state.ciudad = "Santiago" },
    },
});

export const { cambiarMexico, cambiarEEUU, cambiarArgentina, cambiarPeru, cambiarChile } = procedenciaSlice.actions;

export default procedenciaSlice.reducer;
