import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import './Peliculas.css';
import MiLista from "../../Componentes/MiLista/MiLista"
import Navbar from '../../Componentes/Navbar/Navbar';

const Peliculas = () => {

  const [Peliculas, setPeliculas] = React.useState('');

  const handleChange = (event) => {
  setPeliculas(event.target.value);
};

  return (
    <div>

      {/* <Navbar /> */}

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Peliculas</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Peliculas}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Terror</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <button className='boton-buscar'>Buscar</button>

    </div>
  );
};
export default Peliculas;