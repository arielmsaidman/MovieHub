import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Series.css";
import Card from "../../Componentes/Card/Card";
import { useFetch } from "../../hooks/useFetch";
import Generos from "../../Componentes/Generos/Generos";
import Paginacion from "../../Componentes/Paginacion/Paginacion";
import Loading from "../../Componentes/Loading/Loading";


const Series = () => {

 const [genero, setGenero] = React.useState("");

const {contenido, loading, error, paginaActual, haySiguiente, siguientePagina, anteriorPagina,
} = useFetch("serie", genero);

  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>

       <Generos
        genero={genero}
        handleChange={handleChange}
      />

      <div className="grid">
        {contenido.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ))}
      </div>

      <Paginacion
        paginaActual={paginaActual}
        haySiguiente={haySiguiente}
        siguientePagina={siguientePagina}
        anteriorPagina={anteriorPagina}
      />

    </div>
  );
};

export default Series;