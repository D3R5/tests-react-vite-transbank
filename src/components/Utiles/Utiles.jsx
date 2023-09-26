import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Utiles() {
  return (
    <div>
        <Header />
        <main className='container'>
            <h1>Utiles</h1>
            <ul>
                <li>
                    <Link to="/utiles-dayjs">DayJs</Link>
                </li>
                <li>
                    <Link to="/utiles-spinner">Spinner</Link>
                </li>
            </ul>
        </main>
        <Footer />
    </div>
  )
}

export default Utiles