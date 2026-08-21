import React, { useContext } from "react";
import "./Header.css";
import moviehublogo from "../../assets/moviehublogo.png";
import { Link, useLocation } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = ({ children }) => {

  const location = useLocation();

  const { nombre } = useContext(UsuarioContext);
  console.log("nombre:", nombre);

  return (
    <header className="imagen">

      <Link to="/home">
        <img
          src={moviehublogo}
          alt="MovieHub"
          width="250"
        />
      </Link>

      {children}

      {location.pathname === "/" && (
        <Link to="/registrarse">
          <button className="boton-login">
            Iniciar Sesión
          </button>
        </Link>
      )}

      {(
        location.pathname === "/home" ||
        location.pathname === "/series" ||
        location.pathname === "/peliculas" ||
        location.pathname.startsWith("/peliculas/")
      ) && (
        <button className="boton-login">
          Hola {nombre || "Usuario"}
        </button>
      )}

    </header>
  );
};

export default Header;