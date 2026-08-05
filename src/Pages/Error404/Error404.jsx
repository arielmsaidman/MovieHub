import React from 'react'
import pochoclos from "../../assets/pochoclo.png";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="no-found">
      <div className="contenedor-imagen">
        <img className="foto-pochoclo" src={pochoclos} alt="Pochoclos" />
      </div>
      <h3 className="titulo-error">Ooops... Algo ha salido mal</h3>
    </div>
  )
}

export default Error404