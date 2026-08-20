import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";

const Login = () => {

  const navigate = useNavigate();

  const { setNombre } = useContext(UsuarioContext);

  const [nombreInput, setNombreInput] = useState("");

  const handleSubmit = (el) => {
    el.preventDefault();

    if (nombreInput.trim().length > 0) {
      setNombre(nombreInput);
      navigate("/home");
    } else {
      alert("Debe ingresar un nombre");
    }
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h1 className="iniciar-sesion">
          Iniciar Sesión
        </h1>

        <input
          className="input"
          type="text"
          placeholder="Nombre"
          value={nombreInput}
          onChange={(el) => setNombreInput(el.target.value)}
        />

        <button type="submit">
          Iniciar Sesión
        </button>

        <p>
          ¿No tienes cuenta? <span>Regístrate</span>
        </p>

      </form>

    </div>
  );
};

export default Login;
