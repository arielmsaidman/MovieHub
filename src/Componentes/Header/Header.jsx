import React from "react";
import "./Header.css";
import moviehublogo from "../../assets/moviehublogo.png";
import { Link, useLocation } from "react-router-dom";

const Header = ({ children }) => {
  const location = useLocation();

  return (
    <header className="imagen">
      <Link to="/home">
        <img
          src={moviehublogo}
          alt="MovieHub"
          width="250"/>
      </Link>

      {children}

      {location.pathname === "/" && (
        <Link to="/registrarse">
          <button className="boton-login">Iniciar Sesión</button>
        </Link>
      )}
      {/* asociado a Nologin, solo aparece en esa pestaña */}

      {location.pathname === "/home" && (
        // <Link to="/registrarse">
          <button className="boton-login">Hola,...</button>
        // </Link>
      )}

    </header>
  );
};

export default Header;
