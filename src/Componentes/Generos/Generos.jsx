import "./Generos.css";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Generos = ({ genero, handleChange }) => {
  return (
<div className="fondo">
  
    <h3 id="genero-label">
        Género
    </h3>

    <FormControl
        variant="standard"
        sx={{ minWidth: 120 }}
    >
        <Select
        className="genero"
        value={genero}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => {
            if (selected === "") {
            return "Todos";
            }

            return selected;
        }}
        >
        <MenuItem value="">
            <em>Todos</em>
        </MenuItem>

        <MenuItem value="Acción">Acción</MenuItem>
        <MenuItem value="Animación">Animación</MenuItem>
        <MenuItem value="Aventura">Aventura</MenuItem>
        <MenuItem value="Biografía">Biografía</MenuItem>
        <MenuItem value="Comedia">Comedia</MenuItem>
        <MenuItem value="Ciencia ficción">Ciencia ficción</MenuItem>
        <MenuItem value="Crimen">Crimen</MenuItem>
        <MenuItem value="Drama">Drama</MenuItem>
        <MenuItem value="Fantasía">Fantasía</MenuItem>
        <MenuItem value="Historia">Historia</MenuItem>
        <MenuItem value="Misterio">Misterio</MenuItem>
        <MenuItem value="Romance">Romance</MenuItem>
        <MenuItem value="Thriller">Thriller</MenuItem>
        </Select>
    </FormControl>

</div>
  );
};

export default Generos;