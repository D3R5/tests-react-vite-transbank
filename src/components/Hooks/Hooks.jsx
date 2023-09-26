import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Hooks() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Hooks</h1>
        <ul>
          <li>
            <Link to="/hooks/evento_click">Evento Click</Link>
          </li>
        </ul>
      </main>

      <Footer />
    </>
  );
}

export default Hooks;
