import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Series.css";
import Card from "../../Componentes/Card/Card";
import { useFetch } from "../../hooks/useFetch";
import Generos from "../../Componentes/Generos/Generos";

 const Series = () => {

  const { contenido, loading, error } = useFetch();

  const [genero, setGenero] = React.useState("");

  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Mostrar solamente películas
  const series = contenido.filter(
    (item) => item.tipo === "serie"
  );

  // Filtrar por género
  const seriesFiltradas = genero
  ? series.filter((item) =>
      Array.isArray(item.genero) &&
      item.genero.includes(genero)
    )
  : series;


  return (
    <div>

       <Generos
        genero={genero}
        handleChange={handleChange}
      />

      <div className="grid">
        {seriesFiltradas.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ))}
      </div>

    </div>
  );
};

export default Series;