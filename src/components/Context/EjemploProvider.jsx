import React, { createContext } from 'react'

const EjemploContext = createContext();

const EjemploProvider = ({children}) => {
    const variableContexto = "Hola Mundo";

    return (
        <EjemploContext.Provider value={{variableContexto}}>
            {children}
        </EjemploContext.Provider>
    )
}

export { EjemploProvider };

export default EjemploContext;