import "./Generos.css";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const Generos = ({ genero, handleChange }) => {

    return (

    <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel id="genero-label">
          Género
        </InputLabel>

        <Select
          labelId="genero-label"
          value={genero}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>

          <MenuItem value="Acción">
            Acción
          </MenuItem>

          <MenuItem value="Animación">
            Animación
          </MenuItem>

          <MenuItem value="Aventura">
            Aventura
          </MenuItem>

          <MenuItem value="Biografía">
            Biografía
          </MenuItem>

          <MenuItem value="Comedia">
            Comedia
          </MenuItem>

          <MenuItem value="Ciencia ficción">
            Ciencia ficción
          </MenuItem>

          <MenuItem value="Crimen">
            Crimen
          </MenuItem>

          <MenuItem value="Drama">
            Drama
          </MenuItem>

          <MenuItem value="Fantasía">
            Fantasía
          </MenuItem>

          <MenuItem value="Historia">
            Historia
          </MenuItem>

          <MenuItem value="Misterio">
            Misterio
          </MenuItem>

          <MenuItem value="Romance">
            Romance          
          </MenuItem>

          <MenuItem value="Thriller">
            Thriller
          </MenuItem>
          
        </Select>
      </FormControl>
    );
};
export default Generos;