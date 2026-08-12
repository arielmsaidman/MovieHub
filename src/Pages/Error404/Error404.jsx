import React from 'react'
import pochoclos from "../../assets/pochoclo.png";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="no-found">
      <div className="contenedor-imagen">
        <img className="foto-pochoclo" src={pochoclos} alt="Pochoclos" />
      </div>
      
      <div>
        <h3 className="titulo-error">Ooops... Algo ha salido mal</h3>
        <Link to="/home">
          <button type="submit">
            Volver a la pagina principal
          </button>
        </Link>
      </div>
    
    </div>
  )
}

export default Error404