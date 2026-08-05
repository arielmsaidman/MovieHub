import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (el) => {
    el.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h1 className="iniciar-sesion">Iniciar Sesión</h1>

        <input className="input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(el) => setEmail(el.target.value)}
        />

        <input className="input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(el) => setPassword(el.target.value)}
        />

        <Link to="/home">
          <button type="submit">
            Iniciar Sesión
          </button>
        </Link>

        <p>
          ¿No tienes cuenta? <span>Regístrate</span>
        </p>

      </form>

    </div>
  );
};

export default Login;