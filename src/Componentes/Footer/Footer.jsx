import "./Footer.css";
import moviehublogo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="fondo-footer">

        <div className="footer-logo">
          <Link to="/home">
            <img
              src={moviehublogo}
              alt="MovieHub"
              width="150"
            />
          </Link>

          <p>
            Tu lugar para descubrir películas y series.
          </p>
        </div>
        
        <div className="alineacion">

            <div className="footer-seccion">
            <h4>Navegación</h4>

            <Link to="/home">Inicio</Link>
            <Link to="/peliculas">Películas</Link>
            <Link to="/series">Series</Link>
            </div>



            <div className="footer-seccion">
            <h4>MovieHub</h4>

            <a href="#">Contacto</a>
            <a href="#">Términos y condiciones</a>
            <a href="#">Privacidad</a>
            </div>

        </div>
        
      </div>

      <div className="footer-bottom">
        <p>© 2026 MovieHub. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;