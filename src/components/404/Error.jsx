import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Error() {
  return (
    <div>
      <Header />
        <main className='container'>
            <h1>Página no encontrada</h1>
        </main>
      <Footer />
    </div>
  )
}
