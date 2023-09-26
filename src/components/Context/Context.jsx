import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Context() {
  return (
    <div>
        <Header />
        <main className='container'>
            <h1>Ejemplo Contexto</h1>
        </main>
        <Footer />
    </div>
  )
}

export default Context