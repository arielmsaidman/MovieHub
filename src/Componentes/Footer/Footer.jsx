import "./Footer.css";
import moviehublogo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="fondo-footer">

        <div className="footer-logo">
          <Link 
            to="/home"
            onClick={() => {
                    const elemento = document.getElementById("navbar");

                    if (elemento) {
                      elemento.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}    
          >
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

              <Link
                  to="/home"
                  onClick={() => {
                    const elemento = document.getElementById("navbar");

                    if (elemento) {
                      elemento.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}    
              >
                Inicio
              </Link>

              <Link 
                  to="/peliculas"
                  onClick={() => {
                    const elemento = document.getElementById("navbar");

                    if (elemento) {
                      elemento.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}  
              >
                Películas
              </Link>
              
              
              <Link 
                  to="/series"
                  onClick={() => {
                    const elemento = document.getElementById("navbar");

                    if (elemento) {
                      elemento.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}  
              >
                Series
              </Link>
            
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