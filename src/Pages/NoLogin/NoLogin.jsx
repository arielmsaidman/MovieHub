import React from 'react'
import fondopelicula from "../../assets/fondopelicula.png";
import "./NoLogin.css";

const NoLogin = () => {
  return (
    <div className="nologin">
      <img
        className="fondo-pelicula"
        src={fondopelicula}
        alt="fondo-noLogin"
      />

      <div className="contenido">
        <h1>Películas y series ilimitadas y mucho más</h1>
        <p>Disfruta de tus películas favoritas en cualquier momento.</p>
      </div>
    </div>
  )
}

export default NoLogin;